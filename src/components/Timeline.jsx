import React, { useState } from 'react';
import { timelineMonths, getEventsByMonth } from '../data/timelineEvents';

export default function Timeline({ activeMonthId, onMonthSelect }) {
  const [hoveredMonth, setHoveredMonth] = useState(null);
  const eventsByMonth = getEventsByMonth();

  return (
    <div className="timeline-scroll-wrapper overflow-x-auto pb-4 scrollbar-thin overflow-visible">
      <div className="timeline-wrapper animate-in fade-in" style={{ minWidth: '980px' }}>
        <div className="timeline">
          <div className="flex-container justify-between" style={{ display: 'flex', width: '100%', position: 'relative', zIndex: 5 }}>
            {timelineMonths.map((m, index) => {
              const isActive = activeMonthId === m.id;
              const isHovered = hoveredMonth?.id === m.id;
              const monthEvents = eventsByMonth[m.id] || [];
              
              return (
                <div 
                  key={m.id}
                  className={`timeline-item ${isActive ? 'selected' : ''}`}
                  onMouseEnter={() => setHoveredMonth({ ...m, index })}
                  onMouseLeave={() => setHoveredMonth(null)}
                  onClick={() => onMonthSelect(m.id)}
                >
                  {/* Top Label */}
                  <div className="timeline-label font-bold text-xs uppercase">
                    {m.label}
                  </div>

                  {/* Hover Tooltip Dropdown */}
                  {isHovered && (
                    <div className={`timeline-dropdown-popover ${index === 0 ? 'align-left' : index === timelineMonths.length - 1 ? 'align-right' : ''}`}>
                      <div className="dropdown-inner relative">
                        <div className="font-heading text-xs font-bold text-burgundy text-center uppercase tracking-wide border-b border-burgundy/10 pb-1 mb-1">
                          {m.title}
                        </div>
                        <div className="text-[10px] text-gray-500 font-light leading-relaxed mb-2 text-center font-sans normal-case">
                          {m.summary}
                        </div>
                        <div className="flex justify-between items-center text-[9px] font-mono font-bold text-burgundy pt-1 border-t border-burgundy/5">
                          <span>🎒 {monthEvents.length} EVENTS</span>
                          <span className="text-gold">EXPLORE &rarr;</span>
                        </div>
                        <div className="arrow-down-triangle"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
