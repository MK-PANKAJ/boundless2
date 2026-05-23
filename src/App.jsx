import React, { useState, useEffect } from 'react';
import { 
  MapPin, Calendar, Users, ArrowRight, ArrowLeft, Globe, Compass, 
  ChevronDown, Clock, Info, X, ChevronLeft, ChevronRight, 
  Sparkles, Heart, Award, Image as ImageIcon, BookOpen, Menu
} from 'lucide-react';
import eventsData from './data/events';
import IndiaMap from './components/IndiaMap';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'mainEvent', 'subEvent'
  const [selectedMainEvent, setSelectedMainEvent] = useState(null);
  const [selectedSubEvent, setSelectedSubEvent] = useState(null);
  
  // Interactive UI States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0); // Featured slides: 0-3
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'trip', 'multi-city', 'online'
  const [hoveredCity, setHoveredCity] = useState(null); // Map tooltip tracker
  
  // Lightbox State
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    caption: ''
  });

  const goHome = () => {
    setCurrentView('home');
    setSelectedMainEvent(null);
    setSelectedSubEvent(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', '/');
  };

  const goToMainEvent = (event) => {
    setSelectedMainEvent(event);
    setCurrentView('mainEvent');
    setSelectedSubEvent(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (event && event.id) window.history.pushState({}, '', `/events/${event.id}`);
  };

  const goToSubEvent = (parentEvent, subEvent) => {
    setSelectedMainEvent(parentEvent);
    setSelectedSubEvent(subEvent);
    setCurrentView('subEvent');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (parentEvent && parentEvent.id && subEvent && subEvent.id) {
      window.history.pushState({}, '', `/events/${parentEvent.id}/${subEvent.id}`);
    }
  };

  // Sync state with URL (deep linking)
  useEffect(() => {
    function resolvePath() {
      const parts = window.location.pathname.split('/').filter(Boolean);
      if (parts.length === 0) {
        goHome();
        return;
      }
      if (parts[0] === 'events' && parts[1]) {
        const e = eventsData.find(ev => ev.id === parts[1]);
        if (e) {
          setSelectedMainEvent(e);
          if (parts[2]) {
            const s = (e.subEvents || []).find(se => se.id === parts[2]);
            if (s) {
              setSelectedSubEvent(s);
              setCurrentView('subEvent');
              return;
            }
          }
          setCurrentView('mainEvent');
          setSelectedSubEvent(null);
          return;
        }
      }
      goHome();
    }

    resolvePath();
    window.addEventListener('popstate', resolvePath);
    return () => window.removeEventListener('popstate', resolvePath);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxState.isOpen) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

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

  // Featured Slides Data for the Peach Section
  const featuredSlides = [
    {
      title: 'Navrang 2.0',
      tagline: 'Festive Garba Celebration',
      description: 'Navrang 2.0 brought glowing Garba nights and synchronized traditional dance circles to 14+ Indian cities between 23 Sept – 1 Oct 2025. Dressed in stunning ethnic wear, over 350+ students gathered in collaborative chapters to celebrate friendship and cultural unity.',
      image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=400',
      event: eventsData.find(e => e.id === 'navrang-2'),
      subEvent: null
    },
    {
      title: 'Tricolor Trails 2.0',
      tagline: 'Independence Week Meetups',
      description: 'A massive multi-city series spanning 12 cities. Held in celebration of Independence Week in August 2025, the meetups blended historical museum tours, lake walks, local treks, and cafes bonding sessions under one patriotic banner.',
      image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=400',
      event: eventsData.find(e => e.id === 'tricolor-trails-2'),
      subEvent: null
    },
    {
      title: 'Tricolor Trails 3.0',
      tagline: 'Republic Day Hikes & Meetups',
      description: 'Commemorating the 77th Republic Day of India, this series connected students in Ooty, Rishikesh, Mathura & Vrindavan ghats, Siliguri bridges, and snowy hills of Manali. A beautiful celebration of unity and exploration.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=400',
      event: eventsData.find(e => e.id === 'tricolor-trails-3'),
      subEvent: null
    },
    {
      title: 'Teachers\' Day',
      tagline: 'Tribute to Mentor Kothai Ma\'am',
      description: 'Drawn virtually together in gratitude, 120+ student explorers gathered online on Google Meet on 5th September 2025. The core team prepared a beautiful appreciation montage and interactive cards for Beloved Kothai Ma\'am.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400',
      event: eventsData.find(e => e.id === 'interactive-online'),
      subEvent: (eventsData.find(e => e.id === 'interactive-online')?.subEvents || []).find(se => se.id === 'teachers-day')
    }
  ];

  // Dynamically filter all events parsed from the Google Doc
  const filteredEvents = eventsData.filter(event => {
    if (activeCategory === 'all') return true;
    return event.category === activeCategory;
  });

  // --- VIEWS ---

  const HomeView = () => (
    <div className="animate-in fade-in duration-500 relative">
      <div className="warm-ambient-glow" style={{ top: '10%', left: '5%' }} />
      <div className="warm-ambient-glow" style={{ top: '50%', right: '5%' }} />
      
      {/* Concentric Ripple Hero Section */}
      <div className="hero-container pt-32 pb-16">
        <div className="ripple-circle-frame">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600" 
            alt="Ancient Temple" 
          />
        </div>
        
        {/* Concentric rings backing the frame */}
        <div className="ripple-ring ripple-ring-1" />
        <div className="ripple-ring ripple-ring-2" />
        <div className="ripple-ring ripple-ring-3" />
        <div className="ripple-ring ripple-ring-4" />
        <div className="ripple-ring ripple-ring-5" />

        {/* Text banner cutting through circle */}
        <div className="ripple-banner">
          Trekking Breathing Through Every Corner
        </div>
      </div>

      {/* Wavy bottom divider before Upcoming Trips */}
      <div className="wavy-bottom-cream"></div>

      {/* Upcoming Trips section */}
      <div id="upcoming-section" className="upcoming-trips-section layout-container py-12">
        <h2 className="section-title mb-8">★ Upcoming Trips ★</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Card 1: Kerala Yatra */}
          <div className="upcoming-card-yellow">
            <div className="upcoming-banner-frame mb-4">
              <img 
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1000" 
                alt="Kerala tea gardens" 
              />
              <div className="upcoming-banner-overlay-text">Kerala</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-burgundy">Kerala Trip (4-8 June)</h3>
                <div className="flex gap-2 mt-2">
                  <span className="card-tag-maroon">High-level</span>
                  <span className="card-tag-maroon">Adventure</span>
                </div>
              </div>
              <button 
                onClick={() => goToMainEvent(eventsData.find(e => e.id === 'kerala-yatra'))}
                className="btn-primary"
              >
                DETAILS <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Card 2: Shimoga Expedition */}
          <div className="upcoming-card-yellow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-burgundy">Yercaud Summer Trip (14-17 June)</h3>
                <span className="text-xs uppercase font-mono text-gray-500 font-bold block mt-1">Karnataka & Western Ghats Trail</span>
              </div>
              <button 
                onClick={() => goToMainEvent(eventsData.find(e => e.id === 'shimoga-trip'))}
                className="btn-secondary"
              >
                DETAILS
              </button>
            </div>
          </div>

          {/* Card 3: Pondicherry Trip */}
          <div className="upcoming-card-yellow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-burgundy">Pondicherry Trip (14-17 June)</h3>
                <span className="text-xs uppercase font-mono text-gray-500 font-bold block mt-1">Coastal beaches & French Quarter Walk</span>
              </div>
              <button 
                onClick={() => goToMainEvent(eventsData.find(e => e.id === 'kerala-yatra'))}
                className="btn-secondary"
              >
                DETAILS
              </button>
            </div>
          </div>

          {/* Card 4: Coorg Trip */}
          <div className="upcoming-card-yellow" style={{ backgroundColor: '#fdfbfa' }}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-burgundy">Coorg Trip</h3>
                <span className="text-xs uppercase font-mono text-gray-500 font-bold block mt-1">Coffee plantations & high mountains</span>
              </div>
              <button 
                onClick={() => goToMainEvent(eventsData.find(e => e.id === 'shimoga-trip'))}
                className="btn-secondary"
              >
                DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy separator before dark gallery */}
      <div className="wavy-top-black"></div>

      {/* Dark Gallery Section */}
      <div id="gallery-section" className="dark-gallery-section">
        <div className="layout-container text-center">
          <h2 className="section-title text-white mb-2">Our Gallery</h2>
          <p className="text-sm uppercase tracking-widest text-[#f5b63f] font-mono font-bold">★ Visual Memories Coord ★</p>
          
          {/* Overlapping 3D columns gallery */}
          <div className="gallery-3d-wrapper">
            <div 
              className="gallery-3d-card"
              onClick={() => openLightbox(['https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=600'], 0, 'Scenic Peaks')}
            >
              <img src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=600" alt="Tea estates" />
              <div className="gallery-3d-overlay">
                <span className="font-heading text-sm font-bold text-white">Lush Green Hills</span>
              </div>
            </div>
            
            <div 
              className="gallery-3d-card"
              onClick={() => openLightbox(['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600'], 0, 'Sohra Bridge')}
            >
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600" alt="Root Bridges" />
              <div className="gallery-3d-overlay">
                <span className="font-heading text-sm font-bold text-white">Sohra Root Bridge</span>
              </div>
            </div>

            <div 
              className="gallery-3d-card"
              onClick={() => openLightbox(['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600'], 0, 'Chopta Valley')}
            >
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600" alt="Chopta" />
              <div className="gallery-3d-overlay">
                <span className="font-heading text-sm font-bold text-white">Chopta Valley</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy bottom border back to cream */}
      <div className="wavy-bottom-black"></div>

      {/* Interactive Leaflet India Map Section */}
      <div className="map-section layout-container text-center">
        <span className="badge-orange uppercase tracking-wider text-[11px] font-bold mb-2">Interactive Travel Network</span>
        <h2 className="section-title mb-4">★ Over 40+ Cities Explored ★</h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10 font-light">
          Explore our geographical database of milestone chapters across India. Hover over waving tricolor pins to view city meetups, and click a pin to read its detailed archives.
        </p>
        
        <div className="max-w-4xl mx-auto px-4">
          <IndiaMap 
            onCityClick={(city) => {
              const parent = eventsData.find(e => e.id === city.eventId);
              if (parent) {
                const sub = (parent.subEvents || []).find(se => se.id === city.subEventId);
                if (sub) {
                  goToSubEvent(parent, sub);
                } else {
                  goToMainEvent(parent);
                }
              }
            }}
          />
        </div>
      </div>

      {/* Previous Trips Section */}
      <div id="previous-section" className="prev-trips-section">
        <div className="layout-container">
          <h2 className="section-title mb-8">Previous Trips</h2>
          
          {/* Category Filter Tabs */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {[
              { id: 'all', label: '✦ View All' },
              { id: 'trip', label: '⛺ Trips & Treks' },
              { id: 'multi-city', label: '★ Flagship Series' },
              { id: 'online', label: '💻 Online Events' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-bold font-mono text-[11px] uppercase transition-all duration-200 border-2 cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'bg-burgundy text-white border-burgundy shadow-sm' 
                    : 'bg-white text-burgundy border-burgundy/15 hover:border-burgundy/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {filteredEvents.map((event) => (
              <div 
                key={event.id} 
                className="prev-card"
                onClick={() => goToMainEvent(event)}
              >
                <div className="prev-card-img-frame">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="p-5 text-center">
                  <span className="badge-orange text-[9px] uppercase font-mono tracking-wider font-bold mb-2 inline-block">
                    {event.category === 'trip' ? '⛺ Trip & Trek' : event.category === 'multi-city' ? '★ Flagship Series' : '💻 Online Theme'}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-burgundy line-clamp-1">{event.title}</h3>
                  <span className="text-[11px] uppercase tracking-wider font-mono text-gray-500 font-bold block mt-1">
                    📍 {event.stats.cities} {event.stats.cities === 1 ? 'Destination' : 'Cities'} • {event.stats.participants} participants
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Event Slider Card */}
      <div className="featured-slider-bg">
        <div className="featured-white-card">
          <div className="flex-1 space-y-4">
            {/* Slider navigators */}
            <div className="flex items-center gap-3 text-xs font-mono font-bold text-burgundy mb-2">
              <button 
                onClick={() => setFeaturedIndex(prev => prev > 0 ? prev - 1 : featuredSlides.length - 1)}
                className="hover:text-gold transition-colors font-bold"
              >
                ◀
              </button>
              <span>{featuredIndex + 1} / {featuredSlides.length}</span>
              <button 
                onClick={() => setFeaturedIndex(prev => prev < featuredSlides.length - 1 ? prev + 1 : 0)}
                className="hover:text-gold transition-colors font-bold"
              >
                ▶
              </button>
              <span className="w-2.5 h-2.5 rounded-full bg-burgundy block" />
            </div>

            <span className="badge-orange uppercase tracking-wider text-[11px] font-bold">Featured Event Archive</span>
            <h3 className="font-heading text-2xl font-bold text-burgundy">{featuredSlides[featuredIndex].title}</h3>
            <p className="text-sm font-editorial italic text-burgundy/80">“ {featuredSlides[featuredIndex].tagline} ”</p>
            <p className="text-[13px] leading-relaxed text-gray-500 font-light">
              {featuredSlides[featuredIndex].description}
            </p>
            <button 
              onClick={() => {
                const slide = featuredSlides[featuredIndex];
                if (slide.subEvent) {
                  goToSubEvent(slide.event, slide.subEvent);
                } else {
                  goToMainEvent(slide.event);
                }
              }}
              className="btn-primary mt-2"
            >
              READ CORRESPONDENCE &rarr;
            </button>
          </div>

          <div className="flex-1">
            <div className="garba-cover-art-frame">
              <img 
                src={featuredSlides[featuredIndex].image} 
                alt={featuredSlides[featuredIndex].title} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mint Green Stats Grid */}
      <div id="about-section" className="mint-stats-section">
        <div className="layout-container max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <span className="badge-emerald bg-burgundy/5 text-burgundy border-burgundy/20 uppercase tracking-widest text-[11px] font-bold">
              IITM BS TRAVEL SOCIETY
            </span>
            <h2 className="section-title text-burgundy">Society Impact Log</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="blue-stats-card">
              <div className="blue-stat-number">5200+</div>
              <div className="blue-stat-label">Active Members</div>
            </div>
            <div className="blue-stats-card">
              <div className="blue-stat-number">1200+</div>
              <div className="blue-stat-label">Female Members</div>
            </div>
            <div className="blue-stats-card">
              <div className="blue-stat-number">110+</div>
              <div className="blue-stat-label">Core Organizers</div>
            </div>
            <div className="blue-stats-card">
              <div className="blue-stat-number">40+</div>
              <div className="blue-stat-label">Cities Visited</div>
            </div>
          </div>

          <div className="blue-stats-card max-w-xs mx-auto">
            <div className="blue-stat-number">15+</div>
            <div className="blue-stat-label">Trips Conducted</div>
          </div>
        </div>
      </div>
    </div>
  );

  const MainEventView = () => {
    if (!selectedMainEvent) return null;
    const event = selectedMainEvent;

    return (
      <div className="animate-in slide-in-from-right-8 duration-300 pb-24 relative">
        <div className="warm-ambient-glow" style={{ top: '20%', right: '10%' }} />
        {/* Navigation Header */}
        <div className="layout-container pt-28 pb-6 border-b border-burgundy/10">
          <button 
            onClick={goHome}
            className="flex items-center space-x-2 text-burgundy hover:text-gold transition-colors font-bold text-[15px]"
          >
            <ArrowLeft size={16} />
            <span>← Back to overview</span>
          </button>
        </div>

        {/* Detailed details paper */}
        <div className="layout-container py-12 max-w-4xl">
          <div className="details-paper overflow-hidden bg-white">
            <div className="h-[280px] md:h-[400px] relative border-b border-burgundy/10 overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a1225]/85 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10 space-y-2">
                <span className="badge-orange uppercase tracking-wider text-[11px] font-bold">Flagship Expedition</span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white font-heading">{event.title}</h1>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-8 bg-transparent">
              <p className="text-lg font-editorial italic text-burgundy/90">“ {event.tagline} ”</p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">{event.description}</p>
              
              <div className="flex gap-4 border-t border-burgundy/10 pt-6">
                <div className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-[#fffaf0] border border-burgundy/10 text-burgundy font-bold shadow-sm">
                  <Globe size={24} />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-mono text-burgundy/60">Locations</div>
                    <div className="text-xl font-bold">{event.stats.cities} Cities</div>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-[#fffaf0] border border-burgundy/10 text-burgundy font-bold shadow-sm">
                  <Users size={24} />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-mono text-burgundy/60">Explorers</div>
                    <div className="text-xl font-bold">{event.stats.participants}</div>
                  </div>
                </div>
              </div>

              {/* Sub-Events List (Meetups) */}
              {event.subEvents && event.subEvents.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-burgundy/10">
                  <h2 className="font-heading text-2xl font-bold text-burgundy">City Meetup Chapters</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {event.subEvents.map((sub, i) => (
                      <div 
                        key={sub.id} 
                        className="cream-glass-card cursor-pointer p-5 flex flex-col justify-between"
                        onClick={() => goToSubEvent(event, sub)}
                      >
                        <div>
                          <h3 className="font-heading text-lg font-bold text-burgundy mb-2">{sub.title}</h3>
                          <div className="space-y-1 mb-4 text-xs font-mono text-gray-500 font-bold">
                            <div className="flex items-center gap-1.5"><Calendar size={13}/> {sub.date}</div>
                            <div className="flex items-center gap-1.5"><MapPin size={13}/> {sub.location}</div>
                          </div>
                        </div>
                        <div className="flex items-center text-burgundy font-bold text-[13px] mt-2 border-t border-burgundy/10 pt-2">
                          View Details &rarr;
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline Itinerary for trips */}
              {event.itinerary && event.itinerary.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-burgundy/10">
                  <h2 className="font-heading text-2xl font-bold text-burgundy">Day-by-Day Expedition Itinerary</h2>
                  <div className="timeline-container">
                    {event.itinerary.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-dot timeline-dot-orange" />
                        <div className="p-5 bg-white border border-burgundy/10 rounded-xl space-y-2">
                          <span className="badge-orange text-[10px] font-mono">{item.day}</span>
                          <h3 className="font-heading text-base font-bold text-burgundy">{item.title}</h3>
                          <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Glimpses Grid */}
              {event.glimpses && event.glimpses.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-burgundy/10">
                  <h3 className="font-heading text-lg font-bold text-burgundy flex items-center gap-2">
                    <ImageIcon size={18} /> Visual Memories
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {event.glimpses.map((src, i) => (
                      <div 
                        key={i} 
                        className="relative aspect-video rounded-xl overflow-hidden border border-burgundy/20 cursor-pointer group shadow-sm"
                        onClick={() => openLightbox(event.glimpses, i, `${event.title} - Glimpse ${i + 1}`)}
                      >
                        <img src={src} alt={`${event.title} ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SubEventView = () => {
    if (!selectedSubEvent || !selectedMainEvent) return null;
    const sub = selectedSubEvent;
    const parent = selectedMainEvent;

    return (
      <div className="animate-in slide-in-from-bottom-8 duration-300 pb-24 relative">
        <div className="warm-ambient-glow" style={{ bottom: '15%', left: '10%' }} />
        {/* Navigation Header */}
        <div className="layout-container pt-28 pb-6 border-b border-burgundy/10 mb-12">
          <button 
            onClick={() => goToMainEvent(parent)}
            className="flex items-center space-x-2 text-burgundy hover:text-gold transition-colors font-bold text-[15px]"
          >
            <ArrowLeft size={16} />
            <span>← Back to {parent.title} overview</span>
          </button>
        </div>

        <div className="layout-container max-w-3xl">
          <div className="details-paper overflow-hidden bg-white">
            <div className="h-[200px] md:h-[260px] relative border-b border-burgundy/10" style={{ background: 'radial-gradient(circle at center, #fed9a8 40%, #fcf7e7 100%)' }}>
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10 space-y-1.5">
                <span className="badge-emerald bg-burgundy/5 text-burgundy border-burgundy/20 uppercase tracking-widest text-[10px] font-bold">
                  {parent.title} Meetup
                </span>
                <h1 className="text-2xl md:text-4xl font-extrabold text-burgundy font-heading">{sub.title}</h1>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-8 bg-transparent">
              {/* Event Metadata */}
              <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-burgundy/10">
                <div className="flex-1 flex items-start gap-4">
                  <div className="p-3 bg-[#fffaf0] border border-burgundy/10 text-burgundy rounded-xl">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-mono text-gray-500 mb-0.5">Meetup Date</div>
                    <div className="text-[14px] font-bold text-burgundy">{sub.date}</div>
                  </div>
                </div>
                
                <div className="hidden sm:block w-px bg-burgundy/10"></div>
                
                <div className="flex-1 flex items-start gap-4">
                  <div className="p-3 bg-[#fffaf0] border border-burgundy/10 text-burgundy rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-mono text-gray-500 mb-0.5">Meetup Venue</div>
                    <div className="text-[14px] font-bold text-burgundy">{sub.location}</div>
                  </div>
                </div>
                
                <div className="hidden sm:block w-px bg-burgundy/10"></div>
                
                <div className="flex-1 flex items-start gap-4">
                  <div className="p-3 bg-[#fffaf0] border border-burgundy/10 text-burgundy rounded-xl">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-mono text-gray-500 mb-0.5">Attendance</div>
                    <div className="text-[14px] font-bold text-burgundy">{sub.attendees} BS Members</div>
                  </div>
                </div>
              </div>

              {/* Main Summary */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-burgundy font-heading">Meetup Archives Summary</h2>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                  {sub.summary}
                </p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                  Dressed in local chapter gear or traditional ethnic wear, students celebrated the spirit of connection in person. This meetup was supported by the IIT Madras BS Student Activity Fee. All coordinates and pictures are archived.
                </p>
              </div>

              {/* Sub-event Glimpses */}
              {sub.glimpses && sub.glimpses.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-burgundy/10">
                  <h3 className="font-heading text-lg font-bold text-burgundy flex items-center gap-2">
                    <ImageIcon size={18} /> Meetup Memories
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {sub.glimpses.map((s, i) => (
                      <div 
                        key={i} 
                        className="relative aspect-video rounded-xl overflow-hidden border border-burgundy/20 cursor-pointer group shadow-sm"
                        onClick={() => openLightbox(sub.glimpses, i, `${sub.title} - Memory ${i + 1}`)}
                      >
                        <img src={s} alt={`${sub.title} ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
        
        {/* Global Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcf7e7]/85 backdrop-blur-md border-b border-burgundy/10 h-[64px] flex items-center">
          <div className="layout-container w-full flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-90"
              onClick={goHome}
            >
              <Compass size={22} className="text-burgundy" />
              <span className="brand-stamp-font text-lg text-burgundy tracking-tight">
                Boundless
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-bold text-burgundy">
              <button onClick={() => {
                goHome();
                setTimeout(() => {
                  document.getElementById('upcoming-section').scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} className="hover:text-gold transition-colors">TRIPS</button>
              
              <button onClick={() => {
                goHome();
                setTimeout(() => {
                  document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} className="hover:text-gold transition-colors">GALLERY</button>
              
              {/* Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(prev => !prev)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-burgundy text-white rounded-full hover:bg-burgundy-glow transition-all"
              >
                <span>MENU</span>
                <Menu size={14} />
              </button>
            </div>
          </div>
        </nav>

        {/* Capsule drop-down menu */}
        {isMenuOpen && (
          <div className="capsule-menu fixed top-[70px] right-[24px]">
            <ul>
              <li onClick={() => { goHome(); setTimeout(() => { document.getElementById('upcoming-section').scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Upcoming Trips</li>
              <li onClick={() => { goHome(); setTimeout(() => { document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Our Gallery</li>
              <li onClick={() => { goHome(); setTimeout(() => { document.getElementById('previous-section').scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Previous Trips</li>
              <li onClick={() => { goHome(); setTimeout(() => { document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' }); }, 100); }}>About Us</li>
              <li onClick={goHome}>City Meetups</li>
              <li onClick={goHome}>Co-Leads</li>
              <li onClick={goHome}>Team</li>
            </ul>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-grow pt-[64px]">
          {currentView === 'home' && <HomeView />}
          {currentView === 'mainEvent' && <MainEventView />}
          {currentView === 'subEvent' && <SubEventView />}
        </main>

        {/* Scalloped top border of footer */}
        <div className="wavy-top-black"></div>

        {/* Embossed Typography Footer */}
        <footer className="burgundy-footer">
          <div className="layout-container space-y-6">
            <div className="massive-shadow-text">BOUNDLESS</div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-6">
              <div className="text-left space-y-1">
                <span className="font-bold text-white block">Boundless Travel Society</span>
                <span className="text-xs text-gray-400 font-mono">hello@boundlesssociety.com</span>
              </div>
              <div className="flex gap-4 text-xs font-bold text-gray-300">
                <button onClick={goHome} className="hover:text-white transition-colors">Archive</button>
                <button onClick={goHome} className="hover:text-white transition-colors">Gallery</button>
                <button onClick={goHome} className="hover:text-white transition-colors">About</button>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* LIGHTBOX COMPONENT */}
      {lightboxState.isOpen && (
        <div className="lightbox-frame" onClick={closeLightbox}>
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
            alt="Enlarged gallery visual" 
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