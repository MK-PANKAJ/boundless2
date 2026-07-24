import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { Database, Lock, Mail, Loader2, ArrowLeft } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate small delay for premium feels
    setTimeout(() => {
      try {
        const envEmail = (import.meta.env.ADMIN_EMAIL || "").trim();
        const envHash = (import.meta.env.ADMIN_PASS_HASH || "").trim().replace(/\\/g, "");

        if (!envEmail || !envHash) {
          setError("Admin configuration is missing in the .env file.");
          setLoading(false);
          return;
        }

        if (email.trim() !== envEmail) {
          setError("Invalid email or password.");
          setLoading(false);
          return;
        }

        // Verify password hash
        const isValid = bcrypt.compareSync(password, envHash);
        if (!isValid) {
          setError("Invalid email or password.");
          setLoading(false);
          return;
        }

        // Set session
        sessionStorage.setItem("admin_token", "true");
        navigate("/admin");
      } catch (err) {
        console.error("Login verification error:", err);
        setError("An error occurred during authentication.");
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col justify-center items-center p-6 font-sans">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Portal Back Link */}
        <button 
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft size={12} />
          <span>Back to Site</span>
        </button>

        {/* Logo Header */}
        <div className="text-center mt-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3">
            <Database size={24} className="text-amber-500" />
          </div>
          <h2 className="text-2xl font-serif font-black text-white">Admin Portal</h2>
          <p className="text-xs text-slate-400 mt-1">Authenticate to access database management controls</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-5 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs px-4 py-3 rounded-lg text-center font-semibold">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Mail size={13} className="text-slate-400" />
              <span>Email Address</span>
            </label>
            <input 
              type="email" 
              required
              placeholder="admin@boundless.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Lock size={13} className="text-slate-400" />
              <span>Password</span>
            </label>
            <input 
              type="password" 
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-6 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-700/50 text-[#0f172a] py-2.5 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : null}
            <span>{loading ? "Authenticating..." : "Login to Dashboard"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
