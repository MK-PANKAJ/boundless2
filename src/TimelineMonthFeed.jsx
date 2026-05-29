import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, MapPin } from 'lucide-react';
import { timelineMonths, getEventsByMonth } from './data/timelineEvents';
import Timeline from './components/Timeline';

export default function TimelineMonthFeed() {
  const { monthId } = useParams();
  const navigate = useNavigate();
  const [activeMonthId, setActiveMonthId] = React.useState(monthId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [monthId]);

  const eventsByMonth = getEventsByMonth();
  const feedItems = eventsByMonth[monthId] || [];
  
  const monthInfo = timelineMonths.find(m => m.id === monthId);

  if (!monthInfo) {
    return (
      <div className="min-h-screen bg-[#F8F5EE] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#4a1225] mb-4">Month Not Found</h1>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#d97706] hover:text-[#4a1225] transition-colors"
        >
          <ArrowLeft size={20} /> Back to Timeline
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5EE] font-sans selection:bg-orange-200 pb-[100px]">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <button 
          onClick={() => navigate('/#timeline-section')}
          className="flex items-center gap-2 text-[#4a1225] font-bold text-xs tracking-[0.15em] hover:text-[#d97706] transition-colors uppercase mb-8"
        >
          <ArrowLeft size={14} strokeWidth={3} /> BACK TO TIMELINE
        </button>

        <div className="border-b border-[#e5d5b5] pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
            <h1 className="font-sans text-5xl md:text-6xl font-black text-[#4a1225] tracking-tight uppercase text-left">
              {monthInfo.title}
            </h1>

            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-[#4a1225]/10 text-center shrink-0">
              <p className="text-[9px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">
                Chapter Tally
              </p>
              <p className="text-[#4a1225] font-black text-lg">
                {feedItems.length} Milestone Events
              </p>
            </div>
          </div>
          <p className="text-gray-500 font-medium text-left text-sm md:text-base">
            {monthInfo.summary}
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-4">
          {feedItems.map((item, idx) => {
            const isItinerary = item.category === 'trip';
            const itemId = item.id || `day-${idx+1}`;
            
            return (
              <div 
                key={itemId}
                onClick={() => navigate(isItinerary ? `/event/${item.parentEventId}` : `/event/${item.parentEventId}/${itemId}`)}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(74,18,37,0.05)] border border-[#4a1225]/5 flex flex-col cursor-pointer group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(74,18,37,0.1)] transition-all duration-300"
              >
                {/* Image Section */}
                <div className="w-full h-56 relative overflow-hidden bg-[#F4EBD9]">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#d97706] font-serif text-3xl opacity-50">
                      {item.title || item.day}
                    </div>
                  )}
                  
                  {/* MEETUP Tag */}
                  <div className="absolute top-4 right-4 bg-[#4a1225] text-white text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">
                    {isItinerary ? 'TRIP' : 'MEETUP'}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category / Sub-title */}
                  <div className="flex items-center gap-1.5 mb-2 text-[#d97706]">
                    {isItinerary ? <MapPin size={12} strokeWidth={3} /> : (
                       <svg width="10" height="12" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="5" cy="5" r="3" fill="#d97706"/>
                          <path d="M5 8V14" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round"/>
                       </svg>
                    )}
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase truncate">
                      {item.tagline || (isItinerary ? 'Expedition' : 'Meetup')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[22px] font-bold text-[#4a1225] mb-3 leading-tight group-hover:text-[#d97706] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed text-gray-500 font-medium mb-6 line-clamp-3">
                    {item.summary || item.description}
                  </p>

                  {/* Footer Stats */}
                  <div className="mt-auto flex items-center justify-between">
                    {/* Date / Day Pill */}
                    <div className="flex items-center gap-2 bg-[#F8F5EE] px-3 py-1.5 rounded-full">
                      <Calendar size={12} className="text-[#6366f1]" />
                      <span className="text-[10px] font-bold text-[#4a1225] tracking-wide">
                        {item.date || item.day}
                      </span>
                    </div>

                    {/* Attendees Pill */}
                    {item.attendees && (
                      <div className="flex items-center gap-2 bg-[#F8F5EE] px-3 py-1.5 rounded-full">
                        <Users size={12} className="text-[#6366f1]" />
                        <span className="text-[10px] font-bold text-[#4a1225] tracking-wide">
                          {item.attendees}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Timeline Section */}
      <section id="timeline-section" className="w-full fixed bottom-0 left-0 z-50 bg-[#f5f5f4] shadow-[0_-4px_25px_rgba(0,0,0,0.08)] border-t border-[#e5d5b5]">
        <Timeline 
          activeMonthId={activeMonthId} 
          onMonthSelect={(id) => {
            setActiveMonthId(id);
            navigate(`/timeline/${id}`);
          }} 
          compact={true} 
        />
      </section>

    </div>
  );
}
