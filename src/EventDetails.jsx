import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, MapPin } from 'lucide-react';
import eventsData from './data/events';
import SubEventDetails from './SubEventDetails';

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  const event = eventsData.find((e) => e.id === eventId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#fcfbf9] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#4a1225] mb-4">Event Not Found</h1>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#d97706] hover:text-[#4a1225] transition-colors"
        >
          <ArrowLeft size={20} /> Go Back
        </button>
      </div>
    );
  }

  if (event.category === 'trip') {
    return <SubEventDetails providedEventId={eventId} providedSubEventId={eventId} />;
  }

  // Combine subEvents and itinerary to create the feed
  const feedItems = event.subEvents?.length > 0 ? event.subEvents : (event.itinerary || []);

  return (
    <div className="min-h-screen bg-[#F8F5EE] font-sans selection:bg-orange-200">
      
      {/* Top Navigation */}
      <nav className="w-full px-6 py-6 border-b border-[#e5d5b5]/40 flex items-center gap-2">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#4a1225] font-bold text-xs tracking-[0.15em] hover:text-[#d97706] transition-colors uppercase"
        >
          <ArrowLeft size={14} strokeWidth={3} /> GO BACK TO HOME
        </button>
      </nav>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a1225] mb-2 text-center drop-shadow-sm">
          {event.title}
        </h1>
        <p className="text-center text-gray-500 font-medium mb-12">{event.tagline}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {feedItems.map((item, idx) => {
            const isItinerary = !item.id;
            const itemId = item.id || `day-${idx+1}`;
            
            return (
              <div 
                key={itemId}
                onClick={() => navigate(`/event/${eventId}/${itemId}`)}
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
                      {item.day}
                    </div>
                  )}
                  
                  {/* MEETUP Tag */}
                  <div className="absolute top-4 right-4 bg-[#4a1225] text-white text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">
                    {event.category === 'trip' && isItinerary ? 'TRIP' : 'MEETUP'}
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
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase">
                      {event.title} {isItinerary ? 'Expedition' : 'Meetup'}
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

    </div>
  );
}
