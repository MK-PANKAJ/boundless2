import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { uploadImageToFirebase, compressAndReadFile } from '../utils/upload';
import { ArrowLeft, Save, Plus, Trash, Loader2, Image as ImageIcon } from 'lucide-react';

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Main Form fields
  const [formData, setFormData] = useState({
    title: '',
    tagline: '',
    description: '',
    category: 'trip',
    image: '',
    date: ''
  });

  // Base64 file state for main cover image
  const [coverImage, setCoverImage] = useState({ preview: null, base64: null });

  // Stats key-value list state
  const [statsList, setStatsList] = useState([]);

  // Existing Glimpses + new Glimpse files
  const [existingGlimpses, setExistingGlimpses] = useState([]);
  const [newGlimpseFiles, setNewGlimpseFiles] = useState([]); // Array of { preview, base64 }

  // Sub-events state
  const [subEvents, setSubEvents] = useState([]); // Array of subEvent objects

  // Day-wise itinerary state
  const [itinerary, setItinerary] = useState([]); // Array of day plans

  // Load Event details
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const docRef = doc(db, "events", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            title: data.title || '',
            tagline: data.tagline || '',
            description: data.description || '',
            category: data.category || 'trip',
            image: data.image || '',
            date: data.date || ''
          });
          
          // Load stats
          if (data.stats) {
            setStatsList(Object.entries(data.stats).map(([key, value]) => ({ key, value })));
          } else {
            setStatsList([{ key: 'cities', value: '' }, { key: 'participants', value: '' }]);
          }

          // Load glimpses
          setExistingGlimpses(data.glimpses || []);

          // Load subEvents
          if (data.subEvents) {
            setSubEvents(data.subEvents.map(sub => ({
              id: sub.id || '',
              title: sub.title || '',
              date: sub.date || '',
              location: sub.location || '',
              attendees: sub.attendees || '',
              summary: sub.summary || '',
              image: sub.image || '', // Existing image URL
              previewImage: null,    // If replacing, local preview
              base64Image: null      // If replacing, local base64
            })));
          }

          // Load itinerary
          if (data.itinerary) {
            setItinerary(data.itinerary.map(item => ({
              day: item.day || '',
              title: item.title || '',
              description: item.description || ''
            })));
          } else {
            setItinerary([]);
          }
        } else {
          alert("Event not found!");
          navigate("/admin");
        }
      } catch (error) {
        console.error("Error loading event:", error);
        alert("Failed to load event details from Firebase.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchEvent();
  }, [id, navigate]);

  // File picker handler for cover image
  const handleCoverChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressedBase64 = await compressAndReadFile(file);
        setCoverImage({ preview: compressedBase64, base64: compressedBase64 });
      } catch (err) {
        alert("Failed to process cover image.");
      }
    }
  };

  // Stats operations
  const addStatField = () => setStatsList(prev => [...prev, { key: '', value: '' }]);
  const removeStatField = (idx) => setStatsList(prev => prev.filter((_, i) => i !== idx));
  const handleStatChange = (idx, field, val) => {
    const newList = [...statsList];
    newList[idx][field] = val;
    setStatsList(newList);
  };

  // Glimpses operations
  const handleAddGlimpse = async (e) => {
    const files = Array.from(e.target.files || []);
    for (const file of files) {
      try {
        const compressedBase64 = await compressAndReadFile(file);
        setNewGlimpseFiles(prev => [...prev, { preview: compressedBase64, base64: compressedBase64 }]);
      } catch (err) {
        console.error("Failed to process glimpse image:", file.name, err);
      }
    }
    e.target.value = ""; // Clear file input
  };
  const removeExistingGlimpse = (idx) => setExistingGlimpses(prev => prev.filter((_, i) => i !== idx));
  const removeNewGlimpseFile = (idx) => setNewGlimpseFiles(prev => prev.filter((_, i) => i !== idx));

  // Sub-event operations
  const addSubEvent = () => {
    setSubEvents(prev => [...prev, {
      id: '',
      title: '',
      date: '',
      location: '',
      attendees: '',
      summary: '',
      image: '',
      previewImage: null,
      base64Image: null
    }]);
  };
  const removeSubEvent = (idx) => setSubEvents(prev => prev.filter((_, i) => i !== idx));
  const handleSubEventChange = (idx, field, val) => {
    const newSubEvents = [...subEvents];
    newSubEvents[idx][field] = val;
    setSubEvents(newSubEvents);
  };
  const handleSubEventImageChange = async (idx, e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressedBase64 = await compressAndReadFile(file);
        const newSubEvents = [...subEvents];
        newSubEvents[idx].previewImage = compressedBase64;
        newSubEvents[idx].base64Image = compressedBase64;
        setSubEvents(newSubEvents);
      } catch (err) {
        alert("Failed to process sub-event image.");
      }
    }
  };

  // Submit Save/Update Event
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.title) return alert("Title is required.");

    setSaving(true);
    try {
      // 1. Upload new cover image if modified
      let uploadedCoverUrl = formData.image;
      if (coverImage.base64) {
        try {
          uploadedCoverUrl = await uploadImageToFirebase(coverImage.base64, "events/covers");
        } catch (err) {
          throw new Error("Failed to upload Cover Image: " + err.message);
        }
      }

      // 2. Upload new glimpses
      const uploadedGlimpseUrls = [...existingGlimpses];
      for (let i = 0; i < newGlimpseFiles.length; i++) {
        const fileObj = newGlimpseFiles[i];
        try {
          const url = await uploadImageToFirebase(fileObj.base64, "events/glimpses");
          uploadedGlimpseUrls.push(url);
        } catch (err) {
          throw new Error(`Failed to upload Glimpse Image #${i + 1}: ` + err.message);
        }
      }

      // 3. Upload sub-event images if modified or new
      const finalizedSubEvents = [];
      for (let i = 0; i < subEvents.length; i++) {
        const sub = subEvents[i];
        let subImgUrl = sub.image; // Keep existing image by default
        if (sub.base64Image) {
          try {
            subImgUrl = await uploadImageToFirebase(sub.base64Image, "events/meetups");
          } catch (err) {
            throw new Error(`Failed to upload Sub-Event "${sub.title || i + 1}" Image: ` + err.message);
          }
        }
        
        finalizedSubEvents.push({
          id: sub.id || sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          title: sub.title || "",
          date: sub.date || "",
          location: sub.location || "",
          attendees: Number(sub.attendees) || 0,
          summary: sub.summary || "",
          image: subImgUrl,
          glimpses: subImgUrl ? [subImgUrl] : []
        });
      }

      // 4. Compile stats
      const statsObj = {};
      statsList.forEach(item => {
        const key = String(item.key || "").trim();
        const value = String(item.value !== undefined && item.value !== null ? item.value : "").trim();
        if (key && value) {
          statsObj[key] = value;
        }
      });

      // Convert itinerary
      const finalizedItinerary = itinerary.map(item => ({
        day: item.day || '',
        title: item.title || '',
        description: item.description || ''
      }));

      // 5. Save event updates to Firestore
      const eventToSave = {
        title: formData.title,
        tagline: formData.tagline,
        description: formData.description,
        category: formData.category,
        image: uploadedCoverUrl,
        stats: statsObj,
        glimpses: uploadedGlimpseUrls,
        subEvents: finalizedSubEvents,
        itinerary: finalizedItinerary,
        date: formData.date || '',
        createdAt: new Date(), // Set doc creation to now or let it default, or we can fetch original if needed.
        updatedAt: new Date()
      };

      await setDoc(doc(db, "events", id), eventToSave);
      alert("Event updated successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Update event error:", error);
      alert("Error updating event: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-slate-400 flex flex-col items-center justify-center gap-3">
        <Loader2 size={40} className="animate-spin text-amber-500" />
        <p>Loading event details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans p-6">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate("/admin")} 
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <h1 className="text-2xl font-serif font-black text-white">Edit Event</h1>
              <p className="text-slate-400 text-xs mt-0.5">Modify event details, image gallery, and sub-event meetups</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="space-y-8">
          {/* Main Info Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-amber-500 border-b border-slate-800 pb-1 uppercase tracking-wider text-xs">1. General Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Event Title*</label>
                <input 
                  type="text" 
                  required
                  value={formData.title} 
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Event ID (Slug - Read Only)</label>
                <input 
                  type="text" 
                  disabled
                  value={id} 
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-2 text-sm text-slate-500 cursor-not-allowed font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Tagline / Short Subtitle</label>
                <input 
                  type="text" 
                  value={formData.tagline} 
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Category</label>
                <select 
                  value={formData.category} 
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="trip">Expedition / Trip</option>
                  <option value="multi-city">Multi-city Event Series</option>
                  <option value="meetup">Single Local Meetup</option>
                  <option value="online">Online Gathering</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Event Date / Duration</label>
                <input 
                  type="text" 
                  placeholder="e.g. 12th - 15th September 2025"
                  value={formData.date} 
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Description</label>
              <textarea 
                rows={4}
                value={formData.description} 
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          {/* Cover Image Upload */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-amber-500 border-b border-slate-800 pb-1 uppercase tracking-wider text-xs">2. Banner / Cover Image</h2>
            <div className="flex flex-col md:flex-row gap-4 items-center bg-slate-900/50 p-4 rounded-xl border border-slate-850">
              {coverImage.preview || formData.image ? (
                <img 
                  src={coverImage.preview || formData.image} 
                  alt="Cover Preview" 
                  className="w-full md:w-80 h-44 object-cover rounded-lg border border-slate-800 bg-slate-950 shrink-0" 
                />
              ) : (
                <div className="w-full md:w-80 h-44 rounded-lg border border-slate-800 bg-slate-950 flex flex-col items-center justify-center text-slate-500 text-sm gap-2 shrink-0">
                  <ImageIcon size={32} />
                  <span>No banner selected</span>
                </div>
              )}
              <div className="flex-1 w-full space-y-2">
                <p className="text-slate-400 text-xs">Replace the banner image by selecting a new file below.</p>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleCoverChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-xs file:bg-amber-500 file:border-none file:text-[#0f172a] file:px-3 file:py-1 file:rounded file:font-bold file:mr-3 file:cursor-pointer text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Stats Metadata */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-1">
              <h2 className="text-lg font-bold text-amber-500 uppercase tracking-wider text-xs">3. Event Stats (Key-Value)</h2>
              <button 
                type="button" 
                onClick={addStatField}
                className="flex items-center gap-1 text-amber-500 hover:text-amber-400 text-xs font-bold"
              >
                <Plus size={14} />
                <span>Add Stat</span>
              </button>
            </div>
            
            <p className="text-slate-400 text-xs -mt-2">Configure event numbers (e.g. cities: 12, participants: 300+).</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {statsList.map((stat, idx) => (
                <div key={idx} className="flex gap-2 items-center bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <input 
                    type="text" 
                    placeholder="Key"
                    value={stat.key} 
                    onChange={(e) => handleStatChange(idx, 'key', e.target.value)}
                    className="w-1/3 bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-xs text-white focus:outline-none"
                  />
                  <input 
                    type="text" 
                    placeholder="Value"
                    value={stat.value} 
                    onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-xs text-white focus:outline-none"
                  />
                  <button 
                    type="button" 
                    onClick={() => removeStatField(idx)}
                    className="text-rose-400 hover:text-rose-300 p-1"
                  >
                    <Trash size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Glimpses Gallery */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-amber-500 border-b border-slate-800 pb-1 uppercase tracking-wider text-xs">4. Glimpses / Gallery Images</h2>
            
            <div className="space-y-4">
              <input 
                type="file" 
                multiple
                accept="image/*"
                onChange={handleAddGlimpse}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs file:bg-amber-500 file:border-none file:text-[#0f172a] file:px-3 file:py-1 file:rounded file:font-bold file:mr-3 file:cursor-pointer text-slate-400"
              />

              {/* Existing Glimpses */}
              {existingGlimpses.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-2">Existing Glimpses (Click to remove)</div>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
                    {existingGlimpses.map((url, idx) => (
                      <div key={idx} className="relative group aspect-video rounded overflow-hidden border border-slate-800">
                        <img src={url} alt="" className="w-full h-full object-cover" />
                        <button 
                          type="button" 
                          onClick={() => removeExistingGlimpse(idx)}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-rose-400 hover:text-rose-300 transition-opacity"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newly Uploaded glimpses */}
              {newGlimpseFiles.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-2">New Glimpses (Unsaved)</div>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    {newGlimpseFiles.map((fileObj, idx) => (
                      <div key={idx} className="relative group aspect-video rounded overflow-hidden border border-slate-850">
                        <img src={fileObj.preview} alt="" className="w-full h-full object-cover" />
                        <button 
                          type="button" 
                          onClick={() => removeNewGlimpseFile(idx)}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-rose-400 hover:text-rose-300 transition-opacity"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sub-events list */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-1">
              <h2 className="text-lg font-bold text-amber-500 uppercase tracking-wider text-xs">5. Sub-Events (City Meetups / Activities)</h2>
              <button 
                type="button" 
                onClick={addSubEvent}
                className="flex items-center gap-1 text-amber-500 hover:text-amber-400 text-xs font-bold bg-slate-800 px-3 py-1 rounded border border-slate-700"
              >
                <Plus size={14} />
                <span>Add Sub-Event</span>
              </button>
            </div>

            {subEvents.length === 0 ? (
              <p className="text-slate-500 text-xs text-center py-6 bg-slate-950 rounded-lg border border-slate-800">No sub-events added yet. Click "Add Sub-Event" above to include meetups.</p>
            ) : (
              <div className="space-y-6">
                {subEvents.map((sub, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 relative space-y-4">
                    <button 
                      type="button" 
                      onClick={() => removeSubEvent(idx)}
                      className="absolute top-4 right-4 text-rose-400 hover:text-rose-300 flex items-center gap-1 text-xs"
                    >
                      <Trash size={14} />
                      <span>Remove</span>
                    </button>

                    <h4 className="font-bold text-white text-sm">Sub-Event #{idx + 1}</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-400">Title*</label>
                        <input 
                          type="text" 
                          required
                          value={sub.title} 
                          onChange={(e) => handleSubEventChange(idx, 'title', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-400">Date*</label>
                        <input 
                          type="text" 
                          required
                          value={sub.date} 
                          onChange={(e) => handleSubEventChange(idx, 'date', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-400">Location*</label>
                        <input 
                          type="text" 
                          required
                          value={sub.location} 
                          onChange={(e) => handleSubEventChange(idx, 'location', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-400">Attendees Count</label>
                        <input 
                          type="number" 
                          value={sub.attendees} 
                          onChange={(e) => handleSubEventChange(idx, 'attendees', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-400">Summary*</label>
                      <textarea 
                        rows={2}
                        required
                        value={sub.summary} 
                        onChange={(e) => handleSubEventChange(idx, 'summary', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-400">Sub-Event Image</label>
                      <div className="flex flex-col sm:flex-row gap-3 items-start">
                        {sub.previewImage || sub.image ? (
                          <img src={sub.previewImage || sub.image} alt="" className="w-32 h-20 object-cover rounded border border-slate-800 bg-slate-900 shrink-0" />
                        ) : (
                          <div className="w-32 h-20 rounded border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-600 text-xs shrink-0">
                            No image
                          </div>
                        )}
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={(e) => handleSubEventImageChange(idx, e)}
                          className="flex-1 bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-[11px] text-slate-400 file:bg-slate-800 file:border-none file:text-slate-300 file:px-2.5 file:py-0.5 file:rounded file:cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Day-by-Day Itinerary */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-1">
              <h2 className="text-lg font-bold text-amber-500 uppercase tracking-wider text-xs">6. Day-by-Day Itinerary</h2>
              <button 
                type="button" 
                onClick={() => setItinerary(prev => [...prev, { day: `Day ${prev.length + 1}`, title: '', description: '' }])}
                className="flex items-center gap-1 text-amber-500 hover:text-amber-400 text-xs font-bold bg-slate-800 px-3 py-1 rounded border border-slate-700"
              >
                <Plus size={14} />
                <span>Add Day</span>
              </button>
            </div>

            {itinerary.length === 0 ? (
              <p className="text-slate-500 text-xs text-center py-6 bg-slate-950 rounded-lg border border-slate-800">No itinerary days added yet. Click "Add Day" above to start planning.</p>
            ) : (
              <div className="space-y-4">
                {itinerary.map((dayItem, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 relative space-y-4">
                    <button 
                      type="button" 
                      onClick={() => setItinerary(prev => prev.filter((_, i) => i !== idx))}
                      className="absolute top-4 right-4 text-rose-400 hover:text-rose-300 flex items-center gap-1 text-xs"
                    >
                      <Trash size={14} />
                      <span>Remove</span>
                    </button>

                    <h4 className="font-bold text-white text-sm">Day Plan #{idx + 1}</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-400">Day Label*</label>
                        <input 
                          type="text" 
                          required
                          value={dayItem.day} 
                          onChange={(e) => {
                            const newItinerary = [...itinerary];
                            newItinerary[idx].day = e.target.value;
                            setItinerary(newItinerary);
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-400">Day Title*</label>
                        <input 
                          type="text" 
                          required
                          value={dayItem.title} 
                          onChange={(e) => {
                            const newItinerary = [...itinerary];
                            newItinerary[idx].title = e.target.value;
                            setItinerary(newItinerary);
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-400">Description*</label>
                      <textarea 
                        rows={3}
                        required
                        value={dayItem.description} 
                        onChange={(e) => {
                          const newItinerary = [...itinerary];
                          newItinerary[idx].description = e.target.value;
                          setItinerary(newItinerary);
                        }}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 border-t border-slate-800 pt-6">
            <button 
              type="button" 
              onClick={() => navigate("/admin")}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-lg transition-colors text-sm font-semibold border border-slate-700"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={saving}
              className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-700/50 text-[#0f172a] py-2.5 rounded-lg transition-colors text-sm font-bold flex items-center justify-center gap-2"
            >
              {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
              <span>{saving ? "Saving Changes..." : "Save Changes"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
