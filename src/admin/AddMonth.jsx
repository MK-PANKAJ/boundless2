import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';

export default function AddMonth() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    label: '',
    title: '',
    summary: ''
  });

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.id || !formData.label || !formData.title) {
      return alert("Please fill in all required fields.");
    }

    // Validate ID format (YYYY-MM)
    const idPattern = /^\d{4}-\d{2}$/;
    if (!idPattern.test(formData.id)) {
      return alert("Month ID must be in YYYY-MM format (e.g., 2025-08).");
    }

    setSaving(true);
    try {
      const docRef = doc(db, "timeline_months", formData.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSaving(false);
        return alert(`A month with ID "${formData.id}" already exists.`);
      }

      await setDoc(docRef, {
        label: formData.label,
        title: formData.title,
        summary: formData.summary,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      alert("Timeline month added successfully!");
      navigate("/admin/timeline-months");
    } catch (error) {
      console.error("Save month error:", error);
      alert("Error saving month: " + error.message);
    } finally {
      setSaving(false);
    }
  };

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
              <h1 className="text-2xl font-serif font-black text-white">Add Timeline Month</h1>
              <p className="text-slate-400 text-xs mt-0.5">Configure a new monthly node for your memories timeline</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300">Month ID (YYYY-MM)*</label>
            <input 
              type="text" 
              required
              placeholder="e.g. 2025-08"
              value={formData.id} 
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors font-mono"
            />
            <p className="text-[10px] text-slate-500">Must follow YYYY-MM format to sort correctly in the timeline.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Short Label*</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Aug 2025"
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
                placeholder="e.g. August 2025"
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
              placeholder="e.g. Tricolor Trails 2.0 — Independence Week meetups across 12 cities nationwide."
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
