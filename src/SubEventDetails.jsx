import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Users, ArrowRight, ImageIcon } from 'lucide-react';
import eventsData from './data/events';
import { parseDateToMonthId } from './data/timelineEvents';

export default function SubEventDetails({ providedEventId, providedSubEventId, providedFrom }) {
  const params = useParams();
  const eventId = providedEventId || params.eventId;
  const subEventId = providedSubEventId || params.subEventId || eventId;
  const navigate = useNavigate();
  const location = useLocation();

  const isMainEventView = eventId === subEventId;

  // Resolve the original feed path:
  // - If rendered as a trip shortcut by EventDetails, use providedFrom
  // - If rendered as a real route, read from router state
  // - Fall back to home
  const cameFromParent = !!location.state?.from?.startsWith('/event/');
  const feedPath = providedFrom || (cameFromParent ? location.state?.feedPath : location.state?.from) || '/';

  // Dynamic label for the feed-level back button
  const feedLabel = feedPath.includes('/timeline')
    ? 'GO BACK TO TIMELINE'
    : feedPath.includes('/category')
    ? 'GO BACK TO CATEGORY'
    : 'GO BACK TO HOME';

  // Back to the parent EventDetails page (one level up from SubEventDetails)
  const isSubRoute = !isMainEventView;

  useEffect(() => {
    window.scrollTo(0, 0);
    // Clean up URL if they somehow land on /event/mewar-trip/mewar-trip
    if (isMainEventView && !providedEventId) {
      navigate(`/event/${eventId}`, { replace: true });
    }
  }, [subEventId, isMainEventView, providedEventId, eventId, navigate]);

  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5EE] text-[#4a1225] font-serif text-2xl">
        Event Not Found
      </div>
    );
  }

  // If this is a trip's sub-event accessed directly as a URL route (not rendered by EventDetails),
  // redirect to the parent trip page — trip sub-events don't have separate pages.
  if (event.category === 'trip' && !isMainEventView && !providedEventId) {
    return <Navigate to={`/event/${eventId}`} replace state={{ from: feedPath }} />;
  }

  const backRoute = location.state?.from || (event.category === 'trip' ? '/category/trips' : `/event/${eventId}`);

  const feedItems = event.subEvents?.length > 0 ? event.subEvents : (event.itinerary || []);
  
  // Create a flattened timeline of all events and their sub-events in chronological order
  const flatTimeline = [];
  eventsData.forEach((ev) => {
    // 1. Add Main Event itself
    flatTimeline.push({
      eventId: ev.id,
      subEventId: ev.id,
      title: ev.title,
      monthId: ev.id === 'shimoga-trip' ? '2026-05'
             : ev.id === 'mewar-trip' ? '2025-09'
             : ev.id === 'meghalaya-trip' ? '2025-10'
             : ev.id === 'meghalaya-2' ? '2025-12'
             : ev.id === 'kerala-yatra' ? '2026-01'
             : ev.id === 'girls-getaway' ? '2026-03'
             : ev.id === 'kalsubai-trek' ? '2025-10'
             : ev.id === 'pushkar-trip' ? '2025-11'
             : ev.id === 'ananthagiri-trip' ? '2026-02'
             : ev.id === 'uttarakhand-trip' ? '2026-04'
             : ev.id === 'goa-trip' ? '2026-06'
             : ev.id === 'tricolor-trails-2' ? '2025-08'
             : ev.id === 'navrang-2' ? '2025-10'
             : ev.id === 'tricolor-trails-3' ? '2026-01'
             : ev.id === 'interactive-online' ? '2025-09'
             : '2025-08',
      date: ev.id === 'shimoga-trip' ? '14 May 2026'
          : ev.id === 'mewar-trip' ? '11 Sep 2025'
          : ev.id === 'meghalaya-trip' ? '16 Oct 2025'
          : ev.id === 'meghalaya-2' ? '25 Dec 2025'
          : ev.id === 'kerala-yatra' ? '8 Jan 2026'
          : ev.id === 'girls-getaway' ? '18 Mar 2026'
          : ev.id === 'kalsubai-trek' ? '18 Oct 2025'
          : ev.id === 'pushkar-trip' ? '2 Nov 2025'
          : ev.id === 'ananthagiri-trip' ? '7 Feb 2026'
          : ev.id === 'uttarakhand-trip' ? '16 Apr 2026'
          : ev.id === 'goa-trip' ? '5 Jun 2026'
          : '1 Aug 2025'
    });
    // 2. Add Sub Events
    if (ev.subEvents?.length > 0 && ev.category !== 'trip') {
      ev.subEvents.forEach((sub) => {
        if (sub.id) {
          let mId = parseDateToMonthId(sub.date);
          if (sub.id === 'nagpur') mId = '2025-10';
          if (sub.id === 'chennai-raas') mId = '2025-10';

          flatTimeline.push({
            eventId: ev.id,
            subEventId: sub.id,
            title: sub.title,
            monthId: mId || '2025-08',
            date: sub.date
          });
        }
      });
    }
  });

  // Chronological Sort
  flatTimeline.sort((a, b) => {
    if (a.monthId !== b.monthId) {
      return a.monthId.localeCompare(b.monthId);
    }
    const getDay = (dateStr) => {
      const match = dateStr?.match(/^\d+/);
      return match ? parseInt(match[0], 10) : 99;
    };
    return getDay(a.date) - getDay(b.date);
  });

  const currentIndex = flatTimeline.findIndex(
    item => item.eventId === eventId && item.subEventId === subEventId
  );
  
  const currentItem = isMainEventView ? event : feedItems.find((item, idx) => (item.id === subEventId) || (`day-${idx+1}` === subEventId));
  const nextItem = currentIndex !== -1 && currentIndex < flatTimeline.length - 1 ? flatTimeline[currentIndex + 1] : null;

  if (!currentItem) return <div>Sub-Event Not Found</div>;

  const handleNext = () => {
    if (nextItem) {
      if (nextItem.eventId === nextItem.subEventId) {
        navigate(`/event/${nextItem.eventId}`, { state: { from: feedPath } });
      } else {
        navigate(`/event/${nextItem.eventId}/${nextItem.subEventId}`, { 
          state: { 
            from: cameFromParent ? `/event/${eventId}` : feedPath, 
            feedPath: feedPath 
          } 
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] font-sans selection:bg-orange-200 pt-8 pb-20 px-4 md:px-8">
      
      {/* Header: Back navigation breadcrumb */}
      <div className="max-w-6xl mx-auto mb-6">
        {isSubRoute ? (
          // Sub-event view
          <div className="flex items-center gap-5 flex-wrap">
            {(!location.state?.from || cameFromParent) && (
              <button 
                onClick={() => navigate(`/event/${eventId}`, { state: { from: feedPath } })}
                className="flex items-center gap-2 text-[#4a1225] font-bold text-xs tracking-[0.15em] hover:text-[#d97706] transition-colors uppercase"
              >
                <ArrowLeft size={14} strokeWidth={3} /> GO BACK TO EVENT
              </button>
            )}

            {/* Show feed shortcut ONLY when we came from the parent and a feed path exists */}
            {cameFromParent && feedPath !== '/' && (
              <>
                <span className="text-[#4a1225]/20 text-xs select-none">|</span>
                <button 
                  onClick={() => navigate(feedPath)}
                  className="flex items-center gap-2 text-[#4a1225]/40 font-bold text-xs tracking-[0.15em] hover:text-[#d97706] hover:text-opacity-100 transition-colors uppercase"
                >
                  <ArrowLeft size={12} strokeWidth={3} /> {feedLabel}
                </button>
              </>
            )}

            {/* If they came directly from a feed (no intermediate parent page visit), ONLY show the feed back button */}
            {!cameFromParent && location.state?.from && (
              <button 
                onClick={() => navigate(feedPath)}
                className="flex items-center gap-2 text-[#4a1225] font-bold text-xs tracking-[0.15em] hover:text-[#d97706] transition-colors uppercase"
              >
                <ArrowLeft size={14} strokeWidth={3} /> {feedLabel}
              </button>
            )}
          </div>
        ) : (
          // Top-level trip view (no parent EventDetails layer)
          <button 
            onClick={() => navigate(feedPath)}
            className="flex items-center gap-2 text-[#4a1225] font-bold text-xs tracking-[0.15em] hover:text-[#d97706] transition-colors uppercase"
          >
            <ArrowLeft size={14} strokeWidth={3} /> {feedLabel}
          </button>
        )}
      </div>

      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-[0_10px_40px_rgba(74,18,37,0.05)] overflow-hidden">
        
        {/* Hero Image / Map */}
        <div className="w-full h-64 md:h-80 relative overflow-hidden bg-[#F4EBD9]">
          {currentItem.image ? (
            <img 
              src={currentItem.image} 
              alt={currentItem.title} 
              className="w-full h-full object-cover"
            />
          ) : (
             <div className="w-full h-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center">
               <div className="absolute inset-0 bg-[#4a1225]/40 mix-blend-multiply"></div>
             </div>
          )}
          {/* Subtle bottom gradient for blending */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Content Wrapper */}
        <div className="px-6 md:px-16 py-10 relative -mt-4 bg-white z-10 rounded-t-[40px]">
          
          {/* 3-Column Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 border-b border-gray-100 pb-12">
            
            {/* Stat 1: Chronology */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl border border-[#e5d5b5] bg-[#F8F5EE] flex items-center justify-center shrink-0 group-hover:bg-[#F4EBD9] transition-colors">
                <Clock className="text-[#4a1225]" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#4a1225] tracking-widest uppercase mb-1">Chronology</p>
                <p className="text-base font-bold text-[#4a1225]">{currentItem.date || currentItem.day}</p>
              </div>
            </div>

            {/* Stat 2: Coordinates */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl border border-[#e5d5b5] bg-[#F8F5EE] flex items-center justify-center shrink-0 group-hover:bg-[#F4EBD9] transition-colors">
                <MapPin className="text-[#4a1225]" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#4a1225] tracking-widest uppercase mb-1">Chapters & Coordinates</p>
                <p className="text-base font-bold text-[#4a1225] truncate pr-4">{currentItem.location || event.title}</p>
              </div>
            </div>

            {/* Stat 3: Turnout */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl border border-[#e5d5b5] bg-[#F8F5EE] flex items-center justify-center shrink-0 group-hover:bg-[#F4EBD9] transition-colors">
                <Users className="text-[#4a1225]" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#4a1225] tracking-widest uppercase mb-1">Active Turnout</p>
                <p className="text-base font-bold text-[#4a1225]">
                  {currentItem.attendees ? `${currentItem.attendees} Student Explorers` : event.stats?.participants}
                </p>
              </div>
            </div>
            
          </div>

          {/* Expedition Chronicles Section */}
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold font-serif text-[#4a1225] mb-6">
              Expedition Chronicles
            </h2>
            <div className="space-y-6 text-[#7a646c] text-[15px] leading-[1.8] font-medium">
              <p>
                {currentItem.summary || currentItem.description}
              </p>
              <p>
                Every expedition represents the core DNA of the Boundless Travel Society. Connected in gratitude, academic sharing, and adventure, students built strong peer networks supported by the IIT Madras BS Student Activity Fee. All pictures, files, and coordinates are chronologically archived.
              </p>
            </div>
          </div>

          {/* Day-by-Day Expedition Itinerary (Only for Main Event Trips) */}
          {isMainEventView && event.itinerary && event.itinerary.length > 0 && (
            <div className="max-w-4xl mt-16 border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold font-serif text-[#4a1225] mb-8">
                Day-by-Day Expedition Itinerary
              </h2>
              <div className="space-y-4">
                {event.itinerary.map((dayItem, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-[#4a1225] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                      {idx + 1}
                    </div>
                    <div className="flex-1 bg-[#FDF9F1] border border-[#e5d5b5] rounded-2xl p-6">
                      <p className="text-[10px] font-bold text-[#d97706] tracking-[0.15em] uppercase mb-2">
                        {dayItem.day}
                      </p>
                      <h3 className="text-lg font-bold text-[#4a1225] mb-2">
                        {dayItem.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {dayItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Visual Glimpses & Memories */}
          {currentItem.glimpses && currentItem.glimpses.length > 0 && (
            <div className="max-w-4xl mt-16 border-t border-gray-100 pt-12">
              <div className="flex items-center gap-3 mb-8">
                <ImageIcon className="text-[#4a1225]" size={24} />
                <h2 className="text-2xl font-bold font-serif text-[#4a1225]">
                  Visual Glimpses & Memories
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentItem.glimpses.map((imgUrl, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <img 
                      src={imgUrl} 
                      alt={`Glimpse ${idx + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next Button Footer */}
          <div className="mt-16 flex justify-center border-t border-gray-50 pt-16 mb-4">
            {nextItem ? (
              <button 
                onClick={handleNext}
                className="bg-[#4a1225] hover:bg-[#320c19] text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg transform transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  Next Event : {nextItem.title}
                </span>
                <ArrowRight size={14} strokeWidth={3} />
              </button>
            ) : (
              <div className="bg-[#F8F5EE] text-[#4a1225]/50 px-8 py-4 rounded-xl flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  End of Journey
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
