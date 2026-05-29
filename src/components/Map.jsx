import React from 'react';

const Map = () => {
  const mapPins = [
    { top: '28%', left: '42%', label: 'Delhi' },
    { top: '40%', left: '32%', label: 'Jaipur' },
    { top: '62%', left: '30%', label: 'Mumbai' },
    { top: '80%', left: '45%', label: 'Chennai' },
    { top: '55%', left: '68%', label: 'Kolkata' },
    { top: '42%', left: '48%', label: 'Indore' },
    { top: '48%', left: '55%', label: 'Nagpur' },
    { top: '60%', left: '60%', label: 'Bhubaneshwar' },
    { top: '35%', left: '55%', label: 'Gorakhpur' },
    { top: '40%', left: '62%', label: 'Patna' },
    { top: '55%', left: '60%', label: 'Jamshedpur' },
  ];

  return (
    <div className="relative w-full max-w-[500px] aspect-square animate-in fade-in duration-1000">
      {/* Map Image */}
      <div className="absolute inset-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] z-0">
         <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/India_location_map.svg/1024px-India_location_map.svg.png" 
            alt="India Map" 
            className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)] saturate-150 sepia-[0.4] hue-rotate-[-15deg] brightness-[0.85] contrast-[1.2]"
            style={{ filter: "drop-shadow(2px 0px 0px white) drop-shadow(-2px 0px 0px white) drop-shadow(0px 2px 0px white) drop-shadow(0px -2px 0px white) saturate(1.2) sepia(0.3) brightness(0.9) contrast(1.1)" }}
         />
      </div>
      
      {/* Route Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path 
            d="M 42 28 Q 25 30 32 40 Q 40 45 48 42 Q 52 40 55 48 Q 58 55 68 55 Q 65 48 62 40 Q 60 30 55 35 Q 50 35 42 28" 
            fill="none" 
            stroke="white" 
            strokeWidth="0.6" 
            strokeDasharray="1.5 1.5" 
            className="opacity-90 drop-shadow-sm"
         />
         <path 
            d="M 32 40 Q 25 50 30 62 Q 35 75 45 80 Q 60 85 70 80 Q 80 75 68 55 Q 65 65 60 60 Q 55 65 55 48" 
            fill="none" 
            stroke="white" 
            strokeWidth="0.6" 
            strokeDasharray="1.5 1.5" 
            className="opacity-90 drop-shadow-sm"
         />
         {/* Flight path loop and airplane */}
         <path 
            d="M 30 62 C 20 75 5 80 15 85 C 25 90 40 85 45 80" 
            fill="none" 
            stroke="white" 
            strokeWidth="0.6" 
            strokeDasharray="1.5 1.5" 
            className="opacity-90 drop-shadow-sm"
         />
         <g transform="translate(15, 85) rotate(-15) scale(0.25)">
           <path d="M0,0 L16,-6 L4,10 Z" fill="none" stroke="white" strokeWidth="2.5" />
           <path d="M0,0 L6,3 L4,10" fill="none" stroke="white" strokeWidth="2.5" />
         </g>
      </svg>

      {/* Map Pins */}
      {mapPins.map((pin, i) => (
        <div key={i} className="absolute flex items-center gap-1.5 -translate-x-1/2 -translate-y-1/2 z-20 group" style={{ top: pin.top, left: pin.left }}>
          <div className="relative">
            {/* Custom Teardrop Pin */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md group-hover:scale-125 transition-transform cursor-pointer">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#f97316" stroke="white" strokeWidth="1.5" />
              <circle cx="12" cy="9" r="3" fill="white" />
            </svg>
            <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20 group-hover:opacity-0 pointer-events-none"></div>
          </div>
          <span 
            className="text-[11px] sm:text-[13px] font-serif italic font-extrabold text-slate-800 whitespace-nowrap cursor-pointer transition-transform group-hover:scale-110"
            style={{ textShadow: '1.5px 1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px -1.5px 0 #fff, 0px 2px 3px rgba(0,0,0,0.3)' }}
          >
            {pin.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Map;
