import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#EDE4D3] text-[#1c1917] flex flex-col justify-center items-center p-6 font-sans relative overflow-hidden">
      {/* Background paper texture feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Main card */}
      <div className="w-full max-w-lg text-center space-y-6 z-10">
        
        {/* Animated Compass Icon */}
        <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
          <style>{`
            @keyframes spin-slow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes wobble {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(-8deg); }
              75% { transform: rotate(8deg); }
            }
            .compass-outer {
              animation: wobble 4s ease-in-out infinite;
            }
            .compass-needle {
              transform-origin: center;
              animation: spin-slow 20s linear infinite;
            }
          `}</style>
          
          <div className="absolute inset-0 bg-[#4a1225]/5 rounded-full blur-2xl"></div>
          
          {/* Custom SVG/Compass Container */}
          <div className="compass-outer w-32 h-32 bg-[#FAF6EE] border-4 border-[#4a1225] rounded-full shadow-lg flex items-center justify-center relative">
            <Compass size={64} className="text-[#4a1225] compass-needle" />
            
            {/* Cardinal direction indicators */}
            <span className="absolute top-2 text-[10px] font-black text-[#4a1225]/40 tracking-wider">N</span>
            <span className="absolute bottom-2 text-[10px] font-black text-[#4a1225]/40 tracking-wider">S</span>
            <span className="absolute right-3 text-[10px] font-black text-[#4a1225]/40 tracking-wider">E</span>
            <span className="absolute left-3 text-[10px] font-black text-[#4a1225]/40 tracking-wider">W</span>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <h1 className="text-4xl font-serif font-black text-[#4a1225] tracking-tight">LOST ON THE TRAIL</h1>
          <h2 className="text-sm font-bold text-[#78716c] uppercase tracking-[0.2em]">404 - Destination Unknown</h2>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            It looks like you've wandered off the mapped trails. The page you are looking for has been relocated or doesn't exist. Let's get you back to basecamp.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
          <button 
            onClick={() => navigate(-1)} 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FAF6EE] hover:bg-white text-[#4a1225] border border-[#4a1225]/20 px-6 py-2.5 rounded-lg transition-colors font-bold text-sm"
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>
          
          <button 
            onClick={() => navigate("/")} 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#4a1225] hover:bg-[#3b0e1d] text-white px-6 py-2.5 rounded-lg transition-colors font-bold text-sm shadow-md"
          >
            <Home size={16} />
            <span>Return to Home</span>
          </button>
        </div>

      </div>
    </div>
  );
}
