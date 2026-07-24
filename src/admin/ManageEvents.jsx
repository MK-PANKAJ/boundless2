import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Plus, Pencil, Trash, Database, Calendar, Loader2, ArrowLeft, LogOut } from 'lucide-react';

export default function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      const list = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Sort by title or a created field if available
      setEvents(list.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)));
    } catch (error) {
      console.error("Error fetching events:", error);
      alert("Failed to load events from Firestore. Make sure Firestore is configured and enabled.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event? All its sub-events will be removed from this record.")) return;
    try {
      await deleteDoc(doc(db, "events", id));
      setEvents(prev => prev.filter(e => e.id !== id));
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-bold mb-1">
              <Database size={18} />
              <span>BOUNDLESS TRAVEL SOCIETY</span>
            </div>
            <h1 className="text-3xl font-serif font-black tracking-tight text-white">Events Administration</h1>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => navigate("/")} 
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg transition-colors text-sm font-semibold border border-slate-700"
            >
              <ArrowLeft size={16} />
              <span>Back to Portal</span>
            </button>
            <button 
              onClick={() => navigate("/admin/timeline-months")} 
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg transition-colors text-sm font-semibold border border-slate-700"
            >
              <Calendar size={16} />
              <span>Manage Months</span>
            </button>
            <button 
              onClick={() => navigate("/admin/events/add")} 
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f172a] px-4 py-2 rounded-lg transition-colors text-sm font-bold"
            >
              <Plus size={16} />
              <span>Add Event</span>
            </button>
            <button 
              onClick={() => {
                sessionStorage.removeItem("admin_token");
                navigate("/admin/login");
              }} 
              className="flex items-center gap-2 bg-rose-950/40 hover:bg-rose-900/60 text-rose-200 px-4 py-2 rounded-lg transition-colors text-sm font-semibold border border-rose-900/30"
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-slate-400">
            <Loader2 size={40} className="animate-spin text-amber-500" />
            <p>Loading events from Firebase...</p>
          </div>
        ) : events.length === 0 ? (
          <div className="bg-slate-900 border border-dashed border-slate-800 rounded-2xl p-12 text-center max-w-lg mx-auto mt-10">
            <Database size={48} className="text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Events Found</h3>
            <p className="text-slate-400 mb-6">Your Firebase database is empty. Click the "Add Event" button to create your first event record.</p>
            <button 
              onClick={() => navigate("/admin/events/add")}
              className="bg-amber-500 hover:bg-amber-400 text-[#0f172a] px-6 py-2 rounded-lg transition-colors font-bold"
            >
              Add New Event
            </button>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Event</th>
                    <th className="py-4 px-6 font-semibold">Category</th>
                    <th className="py-4 px-6 font-semibold">Stats Summary</th>
                    <th className="py-4 px-6 font-semibold">Sub-Events</th>
                    <th className="py-4 px-6 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
                  {events.map((event) => (
                    <tr key={event.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <img 
                            src={event.image || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80"} 
                            alt={event.title} 
                            className="w-16 h-10 object-cover rounded bg-slate-950 border border-slate-800"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80";
                            }}
                          />
                          <div>
                            <div className="font-bold text-white text-base">{event.title}</div>
                            <div className="text-slate-400 text-xs line-clamp-1">{event.tagline || event.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-slate-800 text-amber-400 text-xs px-2.5 py-1 rounded-full font-semibold border border-amber-500/10 uppercase">
                          {event.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-300">
                        {event.stats ? (
                          <div className="flex flex-col gap-0.5 text-xs">
                            {Object.entries(event.stats).map(([k, v]) => (
                              <span key={k}><strong className="text-slate-400 uppercase">{k}:</strong> {v}</span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-500">-</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-amber-500/10 text-amber-500 text-xs px-2.5 py-1 rounded-full font-bold border border-amber-500/20">
                          {event.subEvents?.length || 0} Meetups
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => navigate(`/admin/events/edit/${event.id}`)}
                            className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                            title="Edit Event"
                          >
                            <Pencil size={15} />
                          </button>
                          <button 
                            onClick={() => handleDelete(event.id)}
                            className="p-2 text-rose-400 hover:text-white bg-rose-950/20 hover:bg-rose-600 rounded transition-colors"
                            title="Delete Event"
                          >
                            <Trash size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
