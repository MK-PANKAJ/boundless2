import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Calendar, Users, ArrowRight, ArrowLeft, Globe, Compass, 
  Clock, X, ChevronLeft, ChevronRight, Sparkles, Heart, Award, 
  Image as ImageIcon, BookOpen, Menu
} from 'lucide-react';
import IndiaMap from './components/IndiaMap';
import Timeline from './components/Timeline';
import { timelineMonths, getTimelineEvents, getEventsByMonth } from './data/timelineEvents';

export default function App() {
  // Navigation View State: 'overview' | 'monthly' | 'detail'
  const [currentView, setCurrentView] = useState('overview');
  const [activeMonthId, setActiveMonthId] = useState('2025-08');
  const [activeEventId, setActiveEventId] = useState(null);
  
  // Interactive UI States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewHistory, setViewHistory] = useState([]); // Call stack for custom go back buttons

  // Lightbox State
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    caption: ''
  });

  // Load chronological data structures
  const eventsList = getTimelineEvents();
  const eventsByMonth = getEventsByMonth();

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, activeMonthId, activeEventId]);

  // Handle  // Sync state with URL (deep linking)
  useEffect(() => {
    function resolvePath() {
      let parts = window.location.pathname.split('/').filter(Boolean);
      // Strip base path 'boundless2' if present
      if (parts[0] === 'boundless2') {
        parts = parts.slice(1);
      }
      
      if (parts.length === 0) {
        setCurrentView('overview');
        setActiveEventId(null);
        return;
      }
      
      const view = parts[0]; // 'monthly' or 'detail'
      if (view === 'monthly' && parts[1]) {
        const monthExists = timelineMonths.some(m => m.id === parts[1]);
        if (monthExists) {
          setActiveMonthId(parts[1]);
          setCurrentView('monthly');
          setActiveEventId(null);
          return;
        }
      } else if (view === 'detail' && parts[1]) {
        const eventExists = eventsList.find(e => e.id === parts[1]);
        if (eventExists) {
          setActiveEventId(parts[1]);
          setActiveMonthId(eventExists.monthId);
          setCurrentView('detail');
          return;
        }
      }
      
      // Fallback
      setCurrentView('overview');
      setActiveEventId(null);
    }

    resolvePath();
    window.addEventListener('popstate', resolvePath);
    return () => window.removeEventListener('popstate', resolvePath);
  }, []);

  // Update Browser URL helper
  const navigateTo = (view, monthId, eventId) => {
    let url = '/boundless2/';
    if (view === 'monthly') {
      url = `/boundless2/monthly/${monthId}`;
      setViewHistory(['overview']);
    } else if (view === 'detail') {
      url = `/boundless2/detail/${eventId}`;
      // Setup smart history back stack
      setViewHistory(prev => {
        if (currentView === 'monthly') return ['overview', 'monthly'];
        return ['overview'];
      });
    } else {
      setViewHistory([]);
    }
    
    window.history.pushState({}, '', url);
    setCurrentView(view);
    if (monthId) setActiveMonthId(monthId);
    if (eventId) setActiveEventId(eventId);
  };

  // Custom Go Back action honoring the global hierarchy rule
  const goBack = () => {
    if (currentView === 'detail') {
      const last = viewHistory[viewHistory.length - 1];
      if (last === 'monthly') {
        navigateTo('monthly', activeMonthId, null);
      } else {
        navigateTo('overview', null, null);
      }
    } else if (currentView === 'monthly') {
      navigateTo('overview', null, null);
    }
  };

  // Lightbox handlers
  const openLightbox = (images, index = 0, caption = '') => {
    if (!images || images.length === 0) return;
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index,
      caption: caption || `Image ${index + 1} of ${images.length}`
    });
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (direction) => {
    setLightboxState(prev => {
      if (prev.images.length <= 1) return prev;
      let nextIndex = prev.currentIndex + direction;
      if (nextIndex < 0) nextIndex = prev.images.length - 1;
      if (nextIndex >= prev.images.length) nextIndex = 0;
      return {
        ...prev,
        currentIndex: nextIndex,
        caption: `Image ${nextIndex + 1} of ${prev.images.length}`
      };
    });
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxState.isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') navigateLightbox(1);
      else if (e.key === 'ArrowLeft') navigateLightbox(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

  // Wavy SVG timeline configuration
  const svgWidth = 1200;
  const svgHeight = 160;
  const getTimelineNodeCoords = (index) => {
    const startX = 60;
    const endX = svgWidth - 60;
    const stepX = (endX - startX) / (timelineMonths.length - 1);
    const x = startX + index * stepX;
    
    // Smooth ribbon wave coordinates: middle -> high -> middle -> low -> middle...
    let y = 80;
    if (index % 4 === 1) y = 30; // High peak
    else if (index % 4 === 3) y = 130; // Low peak
    return { x, y };
  };

  // Compile wavy curve path
  const compileWavyPath = () => {
    let path = `M ${getTimelineNodeCoords(0).x} ${getTimelineNodeCoords(0).y}`;
    for (let i = 0; i < timelineMonths.length - 1; i++) {
      const current = getTimelineNodeCoords(i);
      const next = getTimelineNodeCoords(i + 1);
      const midX = (current.x + next.x) / 2;
      path += ` C ${midX} ${current.y}, ${midX} ${next.y}, ${next.x} ${next.y}`;
    }
    return path;
  };

  // Explore Journey CTA Click handler (opens first month)
  const handleExploreJourney = () => {
    navigateTo('monthly', '2025-08', null);
  };

  // Map City marker click handler (direct routing to event detail page)
  const handleMapCityClick = (city) => {
    // Check if the city has a corresponding subEvent
    const match = eventsList.find(e => e.id === city.subEventId);
    if (match) {
      navigateTo('detail', match.monthId, match.id);
    } else {
      // Direct to month page if no specific subEvent is mapped
      navigateTo('monthly', '2025-08', null);
    }
  };

  // Find chronological next event state
  const getNextEventNavigation = () => {
    if (currentView !== 'detail' || !activeEventId) return null;
    
    const activeEvents = eventsByMonth[activeMonthId] || [];
    const currentIndex = activeEvents.findIndex(e => e.id === activeEventId);
    
    // Case 1: Next event exists in the current month
    if (currentIndex >= 0 && currentIndex < activeEvents.length - 1) {
      const nextEvent = activeEvents[currentIndex + 1];
      return {
        label: 'Next Event',
        eventId: nextEvent.id,
        monthId: activeMonthId,
        title: nextEvent.title
      };
    }
    
    // Case 2: Edge Case - Last event of the month, transform to Next Month's first event
    const activeMonthIndex = timelineMonths.findIndex(m => m.id === activeMonthId);
    if (activeMonthIndex >= 0 && activeMonthIndex < timelineMonths.length - 1) {
      // Find next month containing events
      for (let i = activeMonthIndex + 1; i < timelineMonths.length; i++) {
        const nextMonthId = timelineMonths[i].id;
        const nextMonthEvents = eventsByMonth[nextMonthId] || [];
        if (nextMonthEvents.length > 0) {
          const nextEvent = nextMonthEvents[0];
          return {
            label: `Explore ${timelineMonths[i].label} First Event`,
            eventId: nextEvent.id,
            monthId: nextMonthId,
            title: nextEvent.title,
            isNextMonth: true
          };
        }
      }
    }
    
    // Case 3: Absolute end of journey, loop back to overview
    return {
      label: 'Restart Journey',
      eventId: null,
      monthId: null,
      isRestart: true
    };
  };

  const nextNav = getNextEventNavigation();

  // Chronological navigation helpers are handled within subcomponents or layout handlers

  // --- RENDERING SUB-VIEWS ---

  // Page 1: Journey Overview (Home)
  const OverviewView = () => (
    <div className="animate-in fade-in duration-500 relative">
      <div className="warm-ambient-glow" style={{ top: '15%', left: '5%' }} />
      <div className="warm-ambient-glow" style={{ top: '65%', right: '5%' }} />
      
      {/* Immersive Edge-to-Edge Hero Header */}
      <div className="immersive-hero-header">
        <div className="hero-dark-overlay" />
        <div className="hero-text-wrap text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-gold font-mono text-xs uppercase tracking-widest animate-pulse">
            <Compass size={14} /> IIT MADRAS BS TRAVEL SOCIETY
          </div>
          <h1 className="hero-title">BOUNDLESS</h1>
          <p className="hero-subtitle">
            A Chronicle of Student Hikes, Nationwide Meetups, and Flagship Expeditions
          </p>
          <div className="h-0.5 w-16 bg-gold/50 mx-auto rounded-full" />
        </div>
      </div>

      {/* Editorial Journey Summary */}
      <div className="layout-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Summary Text on the Left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="badge-orange uppercase tracking-wider text-[10px] font-bold">
              Tenure Chronicles
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-burgundy leading-tight">
              Connecting Explorers In Person
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
              Over the past year, the Boundless Travel Society has transformed digital student interactions into in-person communities. Supported by the IIT Madras BS Student Activity Fee, we organized milestone chapters traversing deep forests, misty peaks, and golden shorelines.
            </p>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Every city meetup and flag hoisting is more than a dot on a map — it represents deep student integration, leadership, and joint exploration outside virtual classrooms.
            </p>
            
            {/* Minimalist Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-burgundy/10">
              <div>
                <div className="font-heading text-2xl font-bold text-burgundy">5200+</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 font-mono tracking-wider">Members</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-burgundy">40+</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 font-mono tracking-wider">Cities</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-burgundy">15+</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 font-mono tracking-wider">Expeditions</div>
              </div>
            </div>
          </div>

          {/* Interactive Leaflet India Map on the Right */}
          <div className="lg:col-span-7 w-full">
            <div className="text-center mb-4 lg:text-left">
              <span className="badge-orange bg-burgundy/5 text-burgundy border-burgundy/20 uppercase tracking-widest text-[9px] font-mono font-bold">
                Geographical Database of Milestone Chapters
              </span>
            </div>
            <IndiaMap onCityClick={handleMapCityClick} />
          </div>
        </div>
      </div>

      {/* Footer/Bottom: Unified Horizontal Month-by-Month Timeline */}
      <div className="bg-sand-light/50 border-t border-burgundy/10 py-12 relative overflow-visible">
        <div className="layout-container flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-visible">
          
          {/* Unified bar Timeline */}
          <div className="flex-1 w-full relative overflow-visible">
            <h3 className="font-heading text-xs font-mono font-bold text-burgundy/60 uppercase tracking-widest mb-6 text-center lg:text-left">
              ✦ CHRONOLOGICAL JOURNEY TIMELINE (HOVER TO PREVIEW) ✦
            </h3>
            
            <Timeline 
              activeMonthId={activeMonthId} 
              onMonthSelect={(monthId) => navigateTo('monthly', monthId, null)} 
            />
          </div>
          
          {/* CTA Explore Journey button */}
          <div className="flex flex-col items-center lg:items-end justify-center w-full lg:w-[220px] pt-4 lg:pt-8">
            <button 
              onClick={handleExploreJourney} 
              className="explore-journey-cta-btn flex items-center justify-between gap-4 w-full sm:w-auto lg:w-full"
            >
              <div className="text-left">
                <span className="block text-[10px] font-mono tracking-widest text-gold font-bold uppercase">Begin Exploration</span>
                <span className="font-heading text-sm font-extrabold uppercase text-white tracking-wide">EXPLORE JOURNEY</span>
              </div>
              <ArrowRight size={18} className="text-gold transition-transform group-hover:translate-x-1.5" />
            </button>
            <span className="text-[9px] font-mono text-gray-400 font-bold tracking-widest mt-2 uppercase text-center lg:text-right">
              ★ Start from AUG 2025
            </span>
          </div>

        </div>
      </div>
    </div>
  );

  // Page 2: Monthly Event View
  const MonthlyView = () => {
    const month = timelineMonths.find(m => m.id === activeMonthId);
    const monthEvents = eventsByMonth[activeMonthId] || [];
    
    return (
      <div className="animate-in slide-in-from-right duration-400 pb-20">
        <div className="warm-ambient-glow" style={{ top: '25%', left: '8%' }} />
        
        {/* Navigation & Header with "Go Back" */}
        <div className="layout-container pt-12 pb-8 border-b border-burgundy/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <button 
                onClick={goBack} 
                className="flex items-center space-x-2 text-burgundy hover:text-gold transition-colors font-bold text-[13px] uppercase tracking-wider mb-2 font-mono"
              >
                <ArrowLeft size={14} />
                <span>← BACK TO TIMELINE</span>
              </button>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
                <h1 className="font-heading text-2xl md:text-4xl font-extrabold text-burgundy uppercase tracking-wide">
                  {month ? month.title : 'Monthly Events'}
                </h1>
              </div>
              <p className="text-xs text-gray-500 font-light leading-relaxed max-w-xl">
                {month ? month.summary : ''}
              </p>
            </div>
            
            <div className="chapter-tally-chip">
              <span className="label">Chapter Tally</span>
              <span className="count">{monthEvents.length} Milestone Events</span>
            </div>

          </div>
        </div>
        {/* Content: Visually appealing Event Grid */}
        <div className="layout-container py-12">
          {monthEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {monthEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={() => navigateTo('detail', activeMonthId, event.id)}
                  className="monthly-event-card"
                  style={{display:'flex', flexDirection:'column'}}
                >
                  <div className="monthly-card-img-frame">
                    <img src={event.image} alt={event.title} />
                    <div className="monthly-card-tag-absolute">
                      {event.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Card body — flex column so footer always pins to bottom */}
                  <div style={{display:'flex', flexDirection:'column', flex:1, padding:'20px 20px 16px 20px', gap:'10px'}}>

                    {/* Tagline — strict 1 line */}
                    <span style={{
                      display:'block', fontSize:'9px', fontFamily:'var(--font-mono)',
                      fontWeight:700, color:'var(--color-gold)', textTransform:'uppercase',
                      letterSpacing:'0.07em', lineHeight:'1.3',
                      overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'
                    }}>
                      📍 {event.tagline || event.mainEventTitle}
                    </span>

                    {/* Title — strict 1 line */}
                    <h3 style={{
                      fontFamily:'var(--font-heading)', fontSize:'17px', fontWeight:800,
                      color:'var(--color-burgundy)', lineHeight:'1.25', margin:0,
                      overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'
                    }}>
                      {event.title}
                    </h3>

                    {/* Description — always exactly 3 lines */}
                    <p style={{
                      flex:1,
                      fontSize:'12px', color:'rgba(74,18,37,0.55)', fontWeight:300,
                      lineHeight:'1.6', margin:0,
                      display:'-webkit-box', WebkitLineClamp:3,
                      WebkitBoxOrient:'vertical', overflow:'hidden'
                    }}>
                      {event.summary}
                    </p>

                    {/* Footer badges — always at bottom */}
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:'12px', borderTop:'1px solid rgba(74,18,37,0.07)', marginTop:'4px'}}>
                      <span style={{display:'inline-flex',alignItems:'center',gap:'5px',background:'rgba(74,18,37,0.05)',borderRadius:'99px',padding:'4px 10px',fontSize:'10px',fontFamily:'var(--font-mono)',fontWeight:700,color:'var(--color-burgundy)',letterSpacing:'0.04em'}}>
                        📅 {event.date}
                      </span>
                      <span style={{display:'inline-flex',alignItems:'center',gap:'5px',background:'rgba(217,119,6,0.08)',borderRadius:'99px',padding:'4px 10px',fontSize:'10px',fontFamily:'var(--font-mono)',fontWeight:700,color:'var(--color-gold)',letterSpacing:'0.04em'}}>
                        👥 {event.attendees}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#fffaf0] border border-dashed border-burgundy/20 rounded-3xl space-y-4 max-w-lg mx-auto">
              <span className="text-4xl">🏕️</span>
              <h3 className="font-heading text-lg font-bold text-burgundy">Quiet Period</h3>
              <p className="text-xs text-gray-500 font-light max-w-xs mx-auto">
                No offline expeditions scheduled during this period. Society members stayed connected virtually through forums.
              </p>
              <button 
                onClick={goBack} 
                className="btn-secondary text-[11px] py-1.5 px-4"
              >
                Back to Timeline
              </button>
            </div>
          )}
        </div>

        {/* Persistent Timeline - Moved to the bottom below event cards */}
        <div className="layout-container border-t border-burgundy/10 pt-10 mt-8 pb-10 overflow-visible">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-heading text-xs font-mono font-bold text-burgundy/60 uppercase tracking-widest">
              ✦ CHRONOLOGICAL JOURNEY TIMELINE (PERSISTENT NAVIGATION) ✦
            </h4>
            <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">
              Selected: {month ? month.title : ''}
            </span>
          </div>
          
          <Timeline 
            activeMonthId={activeMonthId} 
            onMonthSelect={(monthId) => navigateTo('monthly', monthId, null)} 
          />
        </div>
      </div>
    );
  };

  // Page 3: Event Detail View
  const DetailView = () => {
    const event = eventsList.find(e => e.id === activeEventId);
    if (!event) return null;
    
    return (
      <div className="animate-in slide-in-from-bottom duration-450 pb-24 relative">
        <div className="warm-ambient-glow" style={{ bottom: '10%', right: '8%' }} />
        
        {/* Immersive Header Navigation */}
        <div className="layout-container pt-12 pb-6 border-b border-burgundy/10">
          <button 
            onClick={goBack} 
            className="flex items-center space-x-2 text-burgundy hover:text-gold transition-colors font-bold text-[13px] uppercase tracking-wider font-mono"
          >
            <ArrowLeft size={14} />
            <span>← GO BACK TO FEED</span>
          </button>
        </div>

        {/* Level 3 Content: Dedicated Full-Page View */}
        <div className="layout-container py-12">
          <div className="event-detail-card overflow-hidden">
            
            {/* Visual Cover Header */}
            <div className="h-[280px] md:h-[420px] relative border-b border-burgundy/15 overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a1225]/85 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
                <span className="badge-orange uppercase tracking-wider text-[9px] font-bold">
                  {event.tagline || event.mainEventTitle}
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
                  {event.title}
                </h1>
              </div>
            </div>

            {/* Expanded Content Details Grid */}
            <div className="p-8 md:p-12 space-y-8 bg-transparent">
              
              {/* Event Metadata Ribbon */}
              <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-burgundy/10">
                <div className="flex-1 flex items-start gap-4">
                  <div className="p-3 bg-[#fffaf0] border border-burgundy/10 text-burgundy rounded-xl">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-0.5">Chronology</div>
                    <div className="text-[13px] font-bold text-burgundy">{event.date}</div>
                  </div>
                </div>
                
                <div className="hidden sm:block w-px bg-burgundy/10"></div>
                
                <div className="flex-1 flex items-start gap-4">
                  <div className="p-3 bg-[#fffaf0] border border-burgundy/10 text-burgundy rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-0.5">Chapters & Coordinates</div>
                    <div className="text-[13px] font-bold text-burgundy">{event.location}</div>
                  </div>
                </div>
                
                <div className="hidden sm:block w-px bg-burgundy/10"></div>
                
                <div className="flex-1 flex items-start gap-4">
                  <div className="p-3 bg-[#fffaf0] border border-burgundy/10 text-burgundy rounded-xl">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-mono text-gray-500 mb-0.5">Active Turnout</div>
                    <div className="text-[13px] font-bold text-burgundy">{event.attendees} Student Explorers</div>
                  </div>
                </div>
              </div>

              {/* Story Narrative Expanded Text */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-burgundy">Expedition Chronicles</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  {event.summary}
                </p>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Every expedition represents the core DNA of the Boundless Travel Society. Connected in gratitude, academic sharing, and adventure, students built strong peer networks supported by the IIT Madras BS Student Activity Fee. All pictures, files, and coordinates are chronologically archived.
                </p>
              </div>

              {/* Multi-Day Detailed Timeline Itinerary (if available) */}
              {event.itinerary && event.itinerary.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-burgundy/10">
                  <h3 className="font-heading text-xl font-bold text-burgundy">Day-by-Day Expedition Itinerary</h3>
                  <div className="timeline-container">
                    {event.itinerary.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-dot timeline-dot-orange" />
                        <div className="p-5 bg-white border border-burgundy/10 rounded-xl space-y-2 shadow-sm">
                          <span className="badge-orange text-[9px] font-mono">{item.day}</span>
                          <h4 className="font-heading text-sm font-bold text-burgundy">{item.title}</h4>
                          <p className="text-xs text-gray-500 font-light leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visual Memories Glimpses Gird */}
              {event.glimpses && event.glimpses.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-burgundy/10 animate-in fade-in duration-300">
                  <h3 className="font-heading text-lg font-bold text-burgundy flex items-center gap-2">
                    <ImageIcon size={18} /> Visual Glimpses & Memories
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {event.glimpses.map((src, i) => (
                      <div 
                        key={i} 
                        className="glimpse-thumb animate-in zoom-in-95"
                        onClick={() => openLightbox(event.glimpses, i, `${event.title} - Glimpse ${i + 1}`)}
                      >
                        <img 
                          src={src} 
                          alt={`${event.title} glimpse`} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {/* Event Navigation Footer — Next Event CTA only */}
              <div style={{display:'flex', justifyContent:'center', paddingTop:'40px', borderTop:'1px solid rgba(74,18,37,0.1)', marginTop:'48px'}}>
                {nextNav && (
                  <button
                    onClick={() => {
                      if (nextNav.isRestart) {
                        navigateTo('overview', null, null);
                      } else {
                        navigateTo('detail', nextNav.monthId, nextNav.eventId);
                      }
                    }}
                    style={{
                      display:'inline-flex', alignItems:'center', gap:'12px',
                      padding:'16px 40px',
                      border:'none',
                      borderRadius:'14px',
                      background:'var(--color-burgundy)',
                      color:'white',
                      fontFamily:'var(--font-mono)',
                      fontSize:'11px', fontWeight:700,
                      letterSpacing:'0.07em', textTransform:'uppercase',
                      cursor:'pointer',
                      transition:'all 0.25s ease',
                      boxShadow:'0 6px 20px -4px rgba(74,18,37,0.28)',
                    }}
                    onMouseEnter={e=>{ e.currentTarget.style.background='var(--color-burgundy-glow)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px -6px rgba(74,18,37,0.38)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.background='var(--color-burgundy)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 20px -4px rgba(74,18,37,0.28)'; }}
                  >
                    <span>{nextNav.label.toUpperCase()} : {nextNav.title ? nextNav.title.toUpperCase() : 'OVERVIEW'}</span>
                    <span style={{fontSize:'16px'}}>→</span>
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- RENDER ---
  return (
    <>
      <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: '#fcf7e7' }}>
        
        {/* Main Content Area */}
        <main className="flex-grow">
          {currentView === 'overview' && <OverviewView />}
          {currentView === 'monthly' && <MonthlyView />}
          {currentView === 'detail' && <DetailView />}
        </main>
      </div>

      {/* Full Screen Lightbox Modal */}
      {lightboxState.isOpen && (
        <div className="lightbox-frame animate-in fade-in" onClick={closeLightbox}>
          <button 
            className="lightbox-close-btn" 
            style={{ 
              position: 'absolute', 
              top: 24, 
              right: 24, 
              background: 'rgba(255,255,255,0.05)', 
              color: 'white', 
              border: '1px solid rgba(255,255,255,0.1)', 
              padding: 12, 
              borderRadius: '50%',
              cursor: 'pointer'
            }} 
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>
          
          <button 
            style={{ 
              position: 'absolute', 
              left: 24, 
              background: 'rgba(255,255,255,0.05)', 
              color: 'white', 
              border: '1px solid rgba(255,255,255,0.1)', 
              padding: 16, 
              borderRadius: '50%',
              cursor: 'pointer'
            }} 
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
          >
            <ChevronLeft size={24} />
          </button>
          
          <img 
            className="lightbox-main-img" 
            src={lightboxState.images[lightboxState.currentIndex]} 
            alt="Enlarged gallery memory" 
            onClick={(e) => e.stopPropagation()} 
          />
          
          <button 
            style={{ 
              position: 'absolute', 
              right: 24, 
              background: 'rgba(255,255,255,0.05)', 
              color: 'white', 
              border: '1px solid rgba(255,255,255,0.1)', 
              padding: 16, 
              borderRadius: '50%',
              cursor: 'pointer'
            }} 
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
          >
            <ChevronRight size={24} />
          </button>
          
          <div style={{ marginTop: 16, color: '#fcf7e7', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {lightboxState.caption}
          </div>
        </div>
      )}
    </>
  );
}