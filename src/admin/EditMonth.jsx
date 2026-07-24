import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function EditMonth() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    label: '',
    title: '',
    summary: ''
  });

  useEffect(() => {
    const fetchMonth = async () => {
      try {
        const docRef = doc(db, "timeline_months", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            label: data.label || '',
            title: data.title || '',
            summary: data.summary || ''
          });
        } else {
          alert("Month node not found!");
          navigate("/admin/timeline-months");
        }
      } catch (error) {
        console.error("Error loading month node:", error);
        alert("Failed to load details from Firebase.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchMonth();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.label || !formData.title) {
      return alert("Please fill in all required fields.");
    }

    setSaving(true);
    try {
      const docRef = doc(db, "timeline_months", id);
      await setDoc(docRef, {
        label: formData.label,
        title: formData.title,
        summary: formData.summary,
        updatedAt: new Date()
      }, { merge: true });

      alert("Timeline month updated successfully!");
      navigate("/admin/timeline-months");
    } catch (error) {
      console.error("Update month error:", error);
      alert("Error updating month: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-slate-400 flex flex-col items-center justify-center gap-3">
        <Loader2 size={40} className="animate-spin text-amber-500" />
        <p>Loading month details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans p-6">
      <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate("/admin/timeline-months")} 
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <h1 className="text-2xl font-serif font-black text-white">Edit Timeline Month</h1>
              <p className="text-slate-400 text-xs mt-0.5">Modify month headers or description summary details</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Month ID (Read Only)</label>
            <input 
              type="text" 
              disabled
              value={id} 
              className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-2 text-sm text-slate-500 cursor-not-allowed font-mono"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Short Label*</label>
              <input 
                type="text" 
                required
                value={formData.label} 
                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Display Title*</label>
              <input 
                type="text" 
                required
                value={formData.title} 
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Timeline Summary</label>
            <textarea 
              rows={4}
              value={formData.summary} 
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="flex gap-4 pt-4 border-t border-slate-800">
            <button 
              type="button" 
              onClick={() => navigate("/admin/timeline-months")}
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
              <span>{saving ? "Saving..." : "Save Month"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
