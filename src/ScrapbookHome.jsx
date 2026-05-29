import React, { useEffect, useState } from 'react';
import { Compass, PlayCircle, Backpack, Users, MapPin, HeartHandshake } from 'lucide-react';
import heroBg from './assets/scrapbook_hero_bg.png';
import mapImg from './assets/scrapbook_india_map.png';
import { scrapbookNavLinks, scrapbookStats, scrapbookEvents, scrapbookTimeline, scrapbookMapCities } from './data/scrapbookData';

export default function ScrapbookHome({ onExplore }) {
  // We use inline styles for the "washi tape", "polaroid", and "torn-edge" 
  // to avoid needing excessive external CSS setup, though Tailwind classes are also heavily used.

  return (
    <div className="relative w-full min-h-screen bg-[#FDFBF7] text-[#1c1917] font-['Inter',sans-serif] overflow-x-hidden selection:bg-[#fcd34d] selection:text-[#78350f]">
      
      {/* GLOBAL SVG FILTERS (for paper texture/scrapbook effect) */}
      <svg className="hidden">
        <filter id="washi-tape-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="torn-edge-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* STITCH PATH BACKGROUND - Weave 1 (Header to Map) */}
      <div className="absolute top-[80px] left-[20%] w-[60%] h-[300px] pointer-events-none z-0 hidden lg:block">
        <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path d="M 0,0 C 200,50 800,-50 1000,300" fill="none" stroke="#4a2e1b" strokeWidth="2" strokeDasharray="8,8" />
          <path d="M 0,0 L -10,-10 L 0,-5 L 10,-10 Z" fill="#4a2e1b" transform="translate(1000, 300) rotate(70)" />
        </svg>
      </div>

      {/* --- SECTION 1: HEADER & NAVIGATION --- */}
      <header className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#1e293b] border-2 border-[#fcd34d] flex items-center justify-center shadow-md">
            <Compass className="text-[#fcd34d]" size={28} />
          </div>
          <span className="font-['Playfair_Display',serif] font-bold text-xl md:text-2xl tracking-tight text-[#1e293b]">Boundless Travel Society</span>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {scrapbookNavLinks.map(link => (
            <span key={link.label} className={`text-[15px] font-semibold cursor-pointer transition-colors ${link.active ? 'text-[#d97706] border-b-2 border-[#d97706]' : 'text-[#44403c] hover:text-[#d97706]'}`}>
              {link.label}
            </span>
          ))}
        </nav>

        {/* CTA */}
        <button onClick={onExplore} className="hidden md:flex items-center gap-2 bg-[#1c1917] hover:bg-[#292524] text-[#f8fafc] px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95">
          Explore Journey <Compass size={16} />
        </button>
      </header>

      {/* --- SECTION 2 & 3: HERO & MAP --- */}
      <section className="relative z-10 w-full min-h-[90vh] flex flex-col justify-center pb-20">
        
        {/* Mountain Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={heroBg} alt="Mountains" className="w-full h-full object-cover object-top opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfbf7]/70 via-[#fdfbf7]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-12 mt-8">
          
          {/* Left Hero Text */}
          <div className="flex-1 max-w-xl">
            <div className="relative inline-block">
              {/* Paper plane graphics near title */}
              <svg className="absolute -top-12 -right-16 w-32 h-32 opacity-70 rotate-12 pointer-events-none" viewBox="0 0 100 100">
                <path d="M10,90 Q50,30 90,10" fill="none" stroke="#4a2e1b" strokeWidth="1.5" strokeDasharray="4,4"/>
                <polygon points="90,10 70,15 85,30" fill="#4a2e1b" />
              </svg>

              <h1 className="font-['Playfair_Display',serif] font-black text-6xl md:text-8xl text-[#1c1917] leading-none mb-2 drop-shadow-sm">
                Boundless 2025
              </h1>
            </div>
            
            <h2 className="font-['Caveat',cursive] text-4xl md:text-5xl text-[#c2410c] -rotate-2 mb-6 ml-2 drop-shadow-sm">
              A year of journeys, friendships & endless memories.
            </h2>
            
            <div className="pl-4 border-l-4 border-[#d97706] my-8">
              <p className="text-lg text-[#292524] font-medium leading-relaxed">
                5200+ members. 40+ cities.<br/>One community. Countless stories.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button onClick={onExplore} className="bg-[#1c1917] hover:bg-[#292524] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-xl flex items-center gap-2 transition-transform hover:-translate-y-0.5">
                Start Exploring <span className="text-lg">→</span>
              </button>
              <button className="bg-white/70 backdrop-blur-md hover:bg-white border border-white/40 text-[#1c1917] px-6 py-3.5 rounded-full font-semibold text-sm shadow-sm flex items-center gap-2 transition-all">
                <PlayCircle className="text-[#dc2626]" size={20} fill="#fecaca" />
                Watch Our Journey
              </button>
            </div>

            {/* --- SECTION 4: STATISTICS BAR --- */}
            <div className="mt-12 bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-wrap justify-between gap-4 w-full relative">
              {/* Top left tape */}
              <div className="absolute -top-3 left-6 w-12 h-4 bg-white/70 border border-white/40 shadow-sm rotate-3 filter-[url(#washi-tape-filter)]"></div>
              
              {scrapbookStats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center flex-1 min-w-[80px] text-center">
                  <div className="text-[#d97706] mb-1">
                    {/* Map Material Icons by name or fallback */}
                    {stat.icon === 'group' && <Users size={24} />}
                    {stat.icon === 'diversity_1' && <HeartHandshake size={24} />}
                    {stat.icon === 'location_on' && <MapPin size={24} />}
                    {stat.icon === 'backpack' && <Backpack size={24} />}
                    {stat.icon === 'handshake' && <HeartHandshake size={24} />}
                  </div>
                  <div className="font-['Playfair_Display',serif] font-bold text-xl text-[#4a1225] leading-tight">{stat.value}</div>
                  <div className="text-[10px] font-bold text-[#78716c] uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Map Area */}
          <div className="flex-1 relative w-full min-h-[500px] flex justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* Map Container */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-full flex items-center justify-center">
              {/* The map image */}
              <img src={mapImg} alt="Map of India" className="absolute w-[110%] max-w-none h-auto object-contain opacity-95 saturate-[1.2] drop-shadow-xl z-10" />
              
              {/* SVG Stitch line connecting cities over the map */}
              <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-md" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Hand-drawn looking path connecting major dots roughly */}
                <path d="M 53,30 Q 35,40 40,68 Q 55,90 60,88 Q 75,70 80,65 Q 95,60 90,58 Q 80,40 70,38 Z" fill="none" stroke="#d97706" strokeWidth="0.8" strokeDasharray="1.5,1.5" className="animate-[dash_20s_linear_infinite]" />
              </svg>

              {/* Location Pins */}
              {scrapbookMapCities.map((city, i) => (
                <div key={i} className="absolute z-30 group cursor-pointer" style={{ left: `${city.x}%`, top: `${city.y}%`, transform: 'translate(-50%, -50%)' }}>
                  <div className="relative flex flex-col items-center">
                    <MapPin size={20} className="text-[#dc2626] drop-shadow-md transform transition-transform group-hover:scale-125 group-hover:-translate-y-1" fill="#fee2e2" />
                    <div className="absolute top-5 bg-white/90 backdrop-blur-sm text-[#4a2e1b] font-bold text-[10px] px-2 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {city.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stacked Polaroids Decoration */}
            <div className="absolute right-0 top-10 w-48 hidden xl:block z-40 transform rotate-6">
              
              {/* Back photo */}
              <div className="bg-[#f8f9fa] p-2 pb-8 shadow-lg transform -rotate-12 translate-x-4 border border-[#e9ecef]">
                <img src="https://images.unsplash.com/photo-1533692328991-08159ff19fca?w=400" className="w-full h-28 object-cover filter contrast-125" />
              </div>
              
              {/* Front photo */}
              <div className="absolute top-4 bg-[#f8f9fa] p-2 pb-10 shadow-xl border border-[#e9ecef] transition-transform hover:scale-105 hover:rotate-3">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-white/70 border border-white/40 shadow-sm rotate-2 filter-[url(#washi-tape-filter)] z-10"></div>
                <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400" className="w-full h-32 object-cover filter sepia-[0.2]" />
                
                {/* Scrapbook Note pinned to it */}
                <div className="absolute -bottom-8 -right-8 bg-[#fef08a] px-3 py-2 shadow-md transform -rotate-6 font-['Caveat',cursive] text-lg text-[#854d0e] leading-tight">
                  <div className="absolute -top-2 left-1/2 w-3 h-3 bg-[#dc2626] rounded-full shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.3)] z-10"></div>
                  40+ Cities<br/>12 States<br/>Countless Memories <span className="text-[#ef4444]">♡</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STITCH PATH BACKGROUND - Weave 2 (Map to Events) */}
      <div className="absolute top-[80vh] right-[10%] w-[30%] h-[200px] pointer-events-none z-0 hidden lg:block">
        <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
          <path d="M 500,0 C 400,100 100,100 0,200" fill="none" stroke="#4a2e1b" strokeWidth="2" strokeDasharray="8,8" />
        </svg>
      </div>

      {/* --- SECTION 5: FLAGSHIP EVENTS --- */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 py-12 -mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
          {scrapbookEvents.map((event, i) => {
            // Alternating rotation for that messy scrapbook look
            const rotateClass = i % 2 === 0 ? 'rotate-2' : '-rotate-2';
            const translateY = i === 1 ? 'lg:translate-y-4' : i === 3 ? 'lg:translate-y-8' : '';
            
            return (
              <div key={i} className={`bg-[#f8f9fa] p-3 pb-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-[#e2e8f0] transform ${rotateClass} ${translateY} hover:scale-105 hover:z-50 transition-all duration-300 relative group`}>
                {/* Washi Tape */}
                <div className={`absolute -top-3 ${i%2===0?'left-1/3 -rotate-6':'right-1/3 rotate-6'} w-12 h-4 bg-white/80 border border-[#e2e8f0] shadow-[0_1px_3px_rgba(0,0,0,0.1)] filter-[url(#washi-tape-filter)] z-10`}></div>
                
                <div className="overflow-hidden mb-3 aspect-[4/3] bg-gray-200">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover filter contrast-[1.1] sepia-[0.1] transition-transform duration-700 group-hover:scale-110" />
                </div>
                
                <h3 className="font-['Playfair_Display',serif] font-bold text-lg text-[#1c1917] leading-tight text-center">{event.title}</h3>
                
                <div className="flex justify-between items-center mt-2 px-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#78716c]">{event.subtitle}</p>
                  <div className="w-5 h-5 rounded-full bg-[#fcd34d] flex items-center justify-center text-[#78350f] shadow-sm transform group-hover:translate-x-1 transition-transform">
                    <span className="text-[10px] font-black">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SECTION 6: THE JOURNEY TIMELINE --- */}
      {/* Torn Paper Divider */}
      <div className="relative w-full h-12 mt-12 bg-[#FDFBF7] z-20" style={{
        maskImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,50 L1200,50 L1200,10 C1180,10 1170,25 1150,25 C1130,25 1120,5 1100,5 C1080,5 1070,20 1050,20 C1030,20 1020,0 1000,0 C980,0 970,15 950,15 C930,15 920,8 900,8 C880,8 870,22 850,22 C830,22 820,12 800,12 C780,12 770,28 750,28 C730,28 720,2 700,2 C680,2 670,18 650,18 C630,18 620,10 600,10 C580,10 570,25 550,25 C530,25 520,5 500,5 C480,5 470,20 450,20 C430,20 420,0 400,0 C380,0 370,15 350,15 C330,15 320,8 300,8 C280,8 270,22 250,22 C230,22 220,12 200,12 C180,12 170,28 150,28 C130,28 120,2 100,2 C80,2 70,18 50,18 C30,18 20,10 0,10 Z" fill="black"/></svg>')`,
        maskSize: '100% 100%',
        backgroundColor: '#f5f5f4' // Slightly darker to show the tear
      }}></div>

      <section className="relative w-full bg-[#f5f5f4] pt-12 pb-24 px-6 md:px-12 overflow-hidden">
        
        {/* Title Area */}
        <div className="max-w-7xl mx-auto flex items-center gap-4 mb-16 relative z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fcd34d] to-[#d97706] p-1 shadow-[0_4px_15px_rgba(217,119,6,0.3)]">
            <div className="w-full h-full rounded-full border-2 border-white/50 flex items-center justify-center">
              <Compass size={32} className="text-white" />
            </div>
          </div>
          <div>
            <h2 className="font-['Playfair_Display',serif] font-black text-4xl text-[#1c1917]">Our Journey</h2>
            <p className="font-['Caveat',cursive] text-2xl text-[#d97706] -mt-1">A timeline of memories</p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-7xl mx-auto relative pt-10 pb-10">
          
          {/* Weaving Stitch line running horizontally */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-24 z-0 opacity-40">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 100">
              <path d="M 0,50 Q 100,0 200,50 T 400,50 T 600,50 T 800,50 T 1000,50" fill="none" stroke="#1c1917" strokeWidth="2" strokeDasharray="6,6" />
            </svg>
          </div>

          {/* Timeline Nodes */}
          <div className="relative z-10 flex justify-between items-center px-4 w-full overflow-x-auto snap-x hide-scrollbar">
            <div className="flex gap-16 md:gap-0 justify-between min-w-max md:min-w-0 w-full px-4">
              {scrapbookTimeline.map((item, i) => {
                const isDown = i % 2 !== 0;
                return (
                  <div key={i} className={`flex flex-col items-center snap-center ${isDown ? 'translate-y-8' : '-translate-y-8'} group cursor-pointer`}>
                    
                    {/* Location Pin Style Node */}
                    <div className={`relative mb-3 flex flex-col items-center transition-transform group-hover:-translate-y-2`}>
                      <MapPin size={28} className={item.active ? 'text-[#d97706]' : 'text-[#78716c]'} fill={item.active ? '#fef3c7' : '#f5f5f4'} />
                    </div>
                    
                    {/* Month Label */}
                    <div className="font-['Playfair_Display',serif] font-bold text-lg text-[#1c1917] mb-1">{item.month}</div>
                    
                    {/* Text Label */}
                    <div className="text-xs font-semibold text-[#78716c] text-center max-w-[100px] leading-tight">
                      {item.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FOOTER --- */}
      <footer className="w-full bg-[#1c1917] text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Left */}
          <div className="font-['Caveat',cursive] text-2xl text-[#fcd34d] flex items-center gap-2 text-center lg:text-left">
            Every trip tells a story. Every person adds to it. <span className="text-red-500 text-3xl">♡</span>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2 opacity-50">
              <svg width="40" height="20" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10,40 L30,10 L50,30 L80,5 L90,40 Z" />
              </svg>
            </div>
            <h4 className="font-['Playfair_Display',serif] font-bold text-xl mb-1">The Journey Continues...</h4>
            <p className="text-sm text-[#a8a29e]">Let's keep exploring the world, together!</p>
          </div>

          {/* Right */}
          <button onClick={onExplore} className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-3 rounded-full font-semibold text-sm shadow-xl flex items-center gap-3 transition-transform hover:-translate-y-1">
            Explore Full Tenure Report →
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </div>
      </footer>

      {/* Global CSS enhancements for the scrapbook */}
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
