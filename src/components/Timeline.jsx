import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Compass } from 'lucide-react';
import { timelineMonths, getEventsByMonth } from '../data/timelineEvents';

export default function Timeline({ activeMonthId, onMonthSelect, compact = false }) {
  const navigate = useNavigate();
  const eventsByMonth = getEventsByMonth();

  const colors = [
    'text-orange-500', 
    'text-blue-500', 
    'text-green-500', 
    'text-purple-500', 
    'text-pink-500'
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Torn Paper Divider - exactly 48px high to prevent stretching */}
      {!compact && (
        <div className="relative w-full h-12 z-20" style={{
          maskImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,50 L1200,50 L1200,10 C1180,10 1170,25 1150,25 C1130,25 1120,5 1100,5 C1080,5 1070,20 1050,20 C1030,20 1020,0 1000,0 C980,0 970,15 950,15 C930,15 920,8 900,8 C880,8 870,22 850,22 C830,22 820,12 800,12 C780,12 770,28 750,28 C730,28 720,2 700,2 C680,2 670,18 650,18 C630,18 620,10 600,10 C580,10 570,25 550,25 C530,25 520,5 500,5 C480,5 470,20 450,20 C430,20 420,0 400,0 C380,0 370,15 350,15 C330,15 320,8 300,8 C280,8 270,22 250,22 C230,22 220,12 200,12 C180,12 170,28 150,28 C130,28 120,2 100,2 C80,2 70,18 50,18 C30,18 20,10 0,10 Z" fill="black"/></svg>')`,
          maskSize: '100% 100%',
          backgroundColor: '#f5f5f4' 
        }}></div>
      )}

      {/* Main Timeline Section */}
      <div className={`relative w-full overflow-hidden bg-[#f5f5f4]`}>
        {/* Container inside the parchment */}
        <div className={`w-full mx-auto relative flex flex-col xl:flex-row items-center xl:items-start px-2 md:px-8 xl:px-12 ${compact ? 'py-4' : 'pt-4 pb-6'}`}>
          
          {/* Title Area - Aligned to the left as in Scrapbook */}
          {!compact && (
            <div className="flex items-center gap-4 mb-4 xl:mb-0 xl:mr-12 shrink-0 z-20 xl:mt-8 px-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fcd34d] to-[#d97706] p-1 shadow-[0_4px_15px_rgba(217,119,6,0.3)]">
                <div className="w-full h-full rounded-full border-2 border-white/50 flex items-center justify-center">
                  <Compass size={32} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="font-serif font-black text-4xl text-[#1c1917]">Our Journey</h2>
                <p className="font-serif italic text-2xl text-[#d97706] -mt-1">A timeline of memories</p>
              </div>
            </div>
          )}

          {/* Timeline Content */}
          <div className={`relative z-10 flex-1 w-full px-2 md:px-6 ${compact ? 'py-3' : 'pb-4 pt-8 xl:pt-6'}`}>
            
            <div className="relative w-full">
              {/* Weaving dotted line running horizontally */}
              <div 
                className="absolute z-0 opacity-40 pointer-events-none"
                style={{ 
                  left: '3.5rem',
                  width: 'calc(100% - 7rem)',
                  top: compact ? '0.75rem' : '1.375rem',
                  height: compact ? '1rem' : '3rem'
                }}
              >
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox={`0 0 ${(timelineMonths.length - 1) * 100} 100`} className="overflow-visible">
                  <path d={(() => {
                    let path = "M -50,50 Q -25,100 0,100";
                    for (let i = 1; i < timelineMonths.length; i++) {
                      const startX = (i - 1) * 100;
                      const endX = i * 100;
                      const midX = (startX + endX) / 2;
                      const startY = (i - 1) % 2 === 0 ? 100 : 0;
                      const endY = i % 2 === 0 ? 100 : 0;
                      path += ` C ${midX},${startY} ${midX},${endY} ${endX},${endY}`;
                    }
                    const lastY = (timelineMonths.length - 1) % 2 === 0 ? 100 : 0;
                    const lastX = (timelineMonths.length - 1) * 100;
                    path += ` Q ${lastX + 25},${lastY} ${lastX + 50},50`;
                    return path;
                  })()} fill="none" stroke="#1c1917" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>

              <div className="flex justify-between items-start w-full relative z-10">
                {timelineMonths.map((m, i) => {
                  const isDown = i % 2 === 0;
                  const isActive = activeMonthId === m.id;
                  const colorClass = colors[i % colors.length];
                  const monthEvents = eventsByMonth[m.id] || [];
                  const displayTitle = monthEvents.length > 0 ? (monthEvents[0].title || monthEvents[0].tagline) : m.summary;
                  
                  return (
                    <div 
                      key={m.id} 
                      onClick={() => {
                        onMonthSelect(m.id);
                        if (monthEvents.length > 0) {
                          navigate(`/timeline/${m.id}`);
                        }
                      }}
                      className={`w-28 shrink-0 flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${isDown ? (compact ? 'mt-4' : 'mt-12') : 'mt-0'}`}
                    >
                    {/* Location Pin Style Node */}
                    <div className="relative mb-2 flex flex-col items-center">
                      <MapPin size={compact ? 24 : 44} className={`${isActive ? colorClass : colorClass} transition-colors duration-300 drop-shadow-md bg-white rounded-full`} fill={isActive ? '#fef3c7' : '#ffffff'} />
                    </div>
                    
                    {/* Month Label */}
                    <div className={`font-serif font-bold transition-colors duration-300 ${isActive ? 'text-[#1c1917]' : 'text-[#1c1917]' } mb-1 whitespace-nowrap ${compact ? 'text-[10px]' : 'text-sm md:text-base lg:text-lg'}`}>
                      {m.title}
                    </div>
                    
                    {/* Text Label - Hidden in compact mode */}
                    {!compact && (
                      <div className={`text-[10px] md:text-xs font-semibold text-center px-1 leading-tight transition-colors duration-300 ${isActive ? 'text-[#4a1225]' : 'text-[#78716c]'}`}>
                        {displayTitle}
                      </div>
                    )}
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
