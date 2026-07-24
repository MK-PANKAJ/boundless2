import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Plus, Pencil, Trash, Database, ArrowLeft, Loader2, LogOut } from 'lucide-react';

export default function ManageMonths() {
  const [months, setMonths] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchMonths = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "timeline_months"));
      const list = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Sort months chronologically by ID (YYYY-MM format sorts lexicographically correctly!)
      setMonths(list.sort((a, b) => a.id.localeCompare(b.id)));
    } catch (error) {
      console.error("Error fetching months:", error);
      alert("Failed to load timeline months from Firestore.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMonths();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this timeline month? This will remove it from the timeline view.")) return;
    try {
      await deleteDoc(doc(db, "timeline_months", id));
      setMonths(prev => prev.filter(m => m.id !== id));
      alert("Timeline month deleted successfully!");
    } catch (error) {
      console.error("Error deleting month:", error);
      alert("Failed to delete month.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-bold mb-1">
              <Database size={18} />
              <span>BOUNDLESS TRAVEL SOCIETY</span>
            </div>
            <h1 className="text-3xl font-serif font-black tracking-tight text-white font-serif">Timeline Months</h1>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => navigate("/admin")} 
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg transition-colors text-sm font-semibold border border-slate-700"
            >
              <ArrowLeft size={16} />
              <span>Back to Events</span>
            </button>
            <button 
              onClick={() => navigate("/admin/timeline-months/add")} 
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0f172a] px-4 py-2 rounded-lg transition-colors text-sm font-bold"
            >
              <Plus size={16} />
              <span>Add Month Node</span>
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
            <p>Loading months from Firebase...</p>
          </div>
        ) : months.length === 0 ? (
          <div className="bg-slate-900 border border-dashed border-slate-800 rounded-2xl p-12 text-center max-w-lg mx-auto mt-10">
            <Database size={48} className="text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Months Configured</h3>
            <p className="text-slate-400 mb-6">There are no months configured for your journey timeline in Firestore yet. Return to the Events Admin and click "Seed Database" to load them.</p>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-32">Month ID</th>
                    <th className="py-4 px-6 font-semibold w-40">Label / Title</th>
                    <th className="py-4 px-6 font-semibold">Summary Text</th>
                    <th className="py-4 px-6 font-semibold text-right w-32">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
                  {months.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-amber-500">
                        {m.id}
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-bold text-white">{m.title}</div>
                        <div className="text-slate-400 text-xs">{m.label}</div>
                      </td>
                      <td className="py-4 px-6 text-slate-300">
                        <p className="line-clamp-2">{m.summary || <span className="text-slate-650 italic">No summary provided</span>}</p>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => navigate(`/admin/timeline-months/edit/${m.id}`)}
                            className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                            title="Edit Month"
                          >
                            <Pencil size={15} />
                          </button>
                          <button 
                            onClick={() => handleDelete(m.id)}
                            className="p-2 text-rose-400 hover:text-white bg-rose-950/20 hover:bg-rose-600 rounded transition-colors"
                            title="Delete Month"
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
