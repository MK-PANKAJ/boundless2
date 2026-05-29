import React, { useState } from 'react';
import {
  MapPin,
  ArrowRight,
  Play,
  ChevronDown,
  CheckCircle2,
  Navigation,
  Users,
  Menu,
  X,
  ArrowUpRight,
  Compass,
  Backpack,
  Handshake
} from 'lucide-react';
import StitchHero from './StitchHero';
import ScrapbookHome from './ScrapbookHome';
import Map from './components/Map';

// Inline ImageWithFallback to fix the import error and ensure single-file
const ImageWithFallback = ({ src, alt, className, ...props }) => {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80' : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
};

const STATS = [
  { icon: <Users className="w-8 h-8 lg:w-10 lg:h-10 text-blue-500 mb-0" />, label: 'Members\nConnected', value: '5200+' },
  { icon: <Users className="w-8 h-8 lg:w-10 lg:h-10 text-pink-500 mb-0" />, label: 'Female\nMembers', value: '1200+' },
  { icon: <MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-green-500 mb-0" />, label: 'Cities\nReached', value: '40+' },
  { icon: <Backpack className="w-8 h-8 lg:w-10 lg:h-10 text-orange-500 mb-0" />, label: 'Core\nMembers', value: '110+' },
  { icon: <Handshake className="w-8 h-8 lg:w-10 lg:h-10 text-purple-500 mb-0" />, label: 'Across\nSocieties', value: 'Collabs' }
];

const CARDS = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',
    title: 'Tricolor Trails 2.0',
    desc: '12 Cities - Independence Week',
    color: 'text-orange-500',
    flag: true
  },
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
    title: 'Trips & Expeditions',
    desc: 'Mountains . Lakes - More',
    color: 'text-green-500'
  },
  {
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
    title: 'City Meetups',
    desc: 'Connections . Fun - Friends',
    color: 'text-blue-500'
  },
  {
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    title: 'Events & Celebrations',
    desc: 'Moments that matter',
    color: 'text-purple-500'
  }
];

const TIMELINE = [
  { month: 'August', title: 'Tricolor Trails\n2.0', color: 'bg-orange-500', iconColor: 'text-orange-500' },
  { month: 'September', title: 'Teachers\' Day\n& Meetups', color: 'bg-blue-500', iconColor: 'text-blue-500' },
  { month: 'October', title: 'Orientation\nSessions', color: 'bg-green-500', iconColor: 'text-green-500' },
  { month: 'December', title: 'Shimoga\nExpedition', color: 'bg-purple-500', iconColor: 'text-purple-500' },
  { month: 'January', title: 'Mewar\nDiaries', color: 'bg-pink-500', iconColor: 'text-pink-500' },
  { month: 'Feb - May', title: 'City Meetups\n& More', color: 'bg-orange-500', iconColor: 'text-orange-500' },
  { month: 'Upcoming', title: 'Goa Trip\n& Beyond', color: 'bg-blue-500', iconColor: 'text-blue-500' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-amber-100 overflow-x-hidden relative">
      
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80"
          alt="Background Mountains"
          className="w-full h-full object-cover"
        />
        {/* Warm overlay gradient for the sunset feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-orange-200/30 to-amber-100/40 mix-blend-multiply"></div>
      </div>

      {/* Ripped paper edge overlay at the top (optional, for effect) */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white/20 backdrop-blur-sm z-40" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 95% 100%, 90% 85%, 85% 100%, 80% 80%, 75% 100%, 70% 85%, 65% 100%, 60% 80%, 55% 100%, 50% 85%, 45% 100%, 40% 80%, 35% 100%, 30% 85%, 25% 100%, 20% 80%, 15% 100%, 10% 85%, 5% 100%, 0 80%)' }}></div>

      <nav className="fixed w-full z-50 top-4 px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto relative rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#e5d5b5]/50 overflow-hidden group">
          {/* Paper Background with Texture */}
          <div className="absolute inset-0 bg-[#F4EBD9]"></div>
          <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
          {/* Inner shadow for vintage paper feel */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(100,60,20,0.1)] pointer-events-none rounded-full"></div>
          
          <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 relative z-10">
            {/* Left side: Logo and Title */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Detailed Logo Badge */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[#0f172a] rounded-full flex items-center justify-center border-2 border-amber-500 shadow-md shrink-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80')] bg-cover opacity-50 mix-blend-overlay rounded-full"></div>
                {/* Curved Text SVG */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-amber-500 animate-[spin_20s_linear_infinite]">
                  <path id="textPathNav" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className="text-[10.5px] font-bold fill-current uppercase tracking-[0.2em]">
                    <textPath href="#textPathNav" startOffset="0%">BOUNDLESS TRAVEL SOCIETY •</textPath>
                  </text>
                </svg>
                {/* Inner Icon */}
                <div className="relative z-10 text-white flex flex-col items-center justify-center pt-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current" stroke="currentColor" strokeWidth="1">
                    <path d="M12 3L4 14h16L12 3z" />
                    <path d="M12 10l-4 6h8l-4-6z" fill="#f59e0b" />
                  </svg>
                </div>
              </div>
              
              {/* Title & Paper Plane Graphic */}
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-slate-900 tracking-tight shrink-0">Boundless Travel Society</span>
                
                {/* Paper airplane with dotted trail */}
                <div className="hidden xl:block relative w-24 h-12 -ml-1 overflow-visible">
                  <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible opacity-80">
                    <path d="M 0,40 Q 15,45 25,35 Q 35,20 45,30 Q 55,40 65,25" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                    <g transform="translate(68, 23) rotate(-20)">
                      <path d="M0,0 L16,-6 L4,10 Z" fill="none" stroke="#0f172a" strokeWidth="1.5" />
                      <path d="M0,0 L6,3 L4,10" fill="none" stroke="#0f172a" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
              {['Home', 'Events', 'Cities', 'Trips', 'Gallery', 'About Us'].map((item, i) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className={`text-[15px] font-bold transition-all relative group ${
                    i === 0 
                      ? 'text-[#c2410c]' 
                      : 'text-slate-700 hover:text-[#c2410c]'
                  }`}
                >
                  {item}
                  {/* Underline for active state */}
                  {i === 0 && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-[#c2410c] rounded-full"></span>
                  )}
                  {/* Hover underline for other items */}
                  {i !== 0 && (
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-[#c2410c] rounded-full transition-all group-hover:w-full"></span>
                  )}
                </a>
              ))}
            </div>

            {/* Explore Button */}
            <button className="hidden md:flex items-center gap-2 bg-[#0a0f1c] text-white px-5 sm:px-6 py-2.5 rounded-full hover:bg-black transition-all transform hover:scale-105 active:scale-95 shadow-md border border-slate-800 shrink-0">
              <span className="text-sm font-bold tracking-wide">Explore Journey</span>
              <Compass className="w-4 h-4 text-[#ea580c]" />
            </button>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-slate-800 hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-4 right-4 bg-[#F4EBD9] rounded-2xl shadow-xl border border-[#e5d5b5]/80 p-4 flex flex-col gap-4 animate-in slide-in-from-top-4 z-50">
            {/* Paper texture for dropdown */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none rounded-2xl"></div>
            
            <div className="relative z-10 flex flex-col gap-2">
              {['Home', 'Events', 'Cities', 'Trips', 'Gallery', 'About Us'].map((item, i) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className={`font-bold p-3 rounded-lg transition-colors ${
                    i === 0 ? 'text-[#c2410c] bg-orange-900/5' : 'text-slate-700 hover:bg-black/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-[#0a0f1c] text-white px-5 py-3.5 rounded-xl mt-2 font-bold flex items-center justify-center gap-2 shadow-md">
                Explore Journey
                <Compass className="w-4 h-4 text-[#ea580c]" />
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Hero Text */}
          <div className="space-y-6 pt-4 lg:pt-10">
            <div className="space-y-2 relative">
               {/* Decorative Plane Path SVG */}
              <div className="absolute -top-12 -right-10 w-48 h-32 opacity-60 pointer-events-none hidden md:block">
                  <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,90 Q50,20 150,10" stroke="#333" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                    <path d="M150,10 L140,5 L145,15 Z" fill="#333" />
                  </svg>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-[#111] tracking-tight leading-[1.1] drop-shadow-md">
                Boundless <span className="font-sans font-normal tracking-normal">2025</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-serif italic text-amber-900/90 max-w-lg leading-snug drop-shadow-sm">
                A year of journeys, friendships & endless memories. ✨
              </p>
            </div>

            <div className="flex flex-col gap-1 text-gray-800 font-medium border-l-4 border-amber-500 pl-4 py-1">
              <p className="text-lg">5200+ members. 40+ cities.</p>
              <p className="text-lg">One community. Countless stories.</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg shadow-gray-900/30 group">
                Start Exploring 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/60 backdrop-blur-md hover:bg-white text-gray-900 px-6 py-3.5 rounded-full font-medium transition-all flex items-center gap-3 border border-gray-300/50 shadow-sm hover:shadow-md">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center border border-red-200">
                  <Play className="w-4 h-4 text-red-600 ml-0.5 fill-red-600" />
                </div>
                Watch Our Journey
              </button>
            </div>
          </div>

          {/* Right Column - Map & Polaroids */}
          <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">
             
            {/* Map Container */}
            <Map />

            {/* Floating Polaroids */}
            <div className="absolute top-12 lg:top-20 right-0 sm:-right-8 lg:-right-16 rotate-6 hover:rotate-0 transition-transform cursor-pointer hover:z-30 z-20">
              <div className="bg-[#fcfbf9] p-2 pb-8 rounded-sm shadow-2xl border border-gray-200/60 max-w-[180px] sm:max-w-[220px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1523580494112-071dcb849ea4?auto=format&fit=crop&q=80" 
                  alt="Group photo mountains" 
                  className="w-full aspect-[4/3] object-cover mb-2 border border-gray-100"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#e3d5c8] rotate-3 shadow-sm border border-[#d3c5b8]/50 rounded-[1px] mix-blend-multiply opacity-90"></div>
              </div>
            </div>

            <div className="absolute top-64 lg:top-80 right-4 sm:-right-12 lg:-right-24 -rotate-6 hover:rotate-0 transition-transform cursor-pointer hover:z-30 z-20 group">
              {/* Polaroid Photo */}
              <div className="bg-[#fcfbf9] p-2 pb-2 rounded-sm shadow-2xl border border-gray-200/60 max-w-[160px] sm:max-w-[200px]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80" 
                  alt="Group photo beach" 
                  className="w-full aspect-[4/3] object-cover border border-gray-100 filter sepia-[0.1]"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#e3d5c8] -rotate-3 shadow-sm border border-[#d3c5b8]/50 rounded-[1px] mix-blend-multiply opacity-90"></div>
              </div>
              
              {/* Pinned Parchment Note */}
              <div className="absolute -bottom-10 -left-10 sm:-left-16 rotate-6 group-hover:rotate-3 transition-transform z-30 drop-shadow-xl">
                 <div 
                   className="relative bg-[#F4EBD9] p-4 pt-6 pb-5 rounded-sm border border-[#e5d5b5]/50" 
                   style={{ clipPath: 'polygon(0% 4%, 5% 0%, 15% 3%, 25% 0%, 35% 4%, 45% 0%, 55% 4%, 65% 0%, 75% 3%, 85% 0%, 95% 4%, 100% 1%, 100% 95%, 95% 100%, 85% 97%, 75% 100%, 65% 96%, 55% 100%, 45% 97%, 35% 100%, 25% 96%, 15% 100%, 5% 97%, 0% 100%)' }}
                 >
                   {/* Paper texture overlay */}
                   <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
                   
                   {/* Text Content */}
                   <div className="relative z-10 text-center font-sans font-bold text-sm sm:text-base text-slate-700 leading-tight flex flex-col gap-0.5 transform -rotate-2">
                     <p>40+ Cities</p>
                     <p>12 States</p>
                     <p>Countless</p>
                     <p className="flex items-center justify-center gap-1">Memories <span className="text-red-500 text-lg sm:text-xl font-serif">♡</span></p>
                   </div>
                 </div>
                 
                 {/* Golden Pin */}
                 <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-40">
                   <div className="relative">
                     {/* Pin shadow */}
                     <div className="absolute top-1 left-1 w-5 h-5 bg-black/40 rounded-full blur-[2px]"></div>
                     {/* Pin head */}
                     <div className="relative w-5 h-5 bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-700 rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3)] border border-amber-800/40">
                       {/* Highlight */}
                       <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/70 rounded-full blur-[0.5px]"></div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
            
            {/* Bottom left stats polaroid style box */}
            <div className="absolute bottom-0 left-0 md:-left-12 -rotate-2 hover:rotate-0 transition-transform cursor-pointer z-20 hidden md:block">
              <div className="bg-[#fcfbf9] p-3 rounded-sm shadow-2xl border border-gray-200/60 max-w-[150px]">
                <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-600"/>
                    <span className="font-bold text-gray-900">5200+</span>
                </div>
                <p className="text-xs text-gray-600 font-medium leading-tight">Members Connected</p>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-[#e3d5c8] rotate-2 shadow-sm border border-[#d3c5b8]/50 rounded-[1px] mix-blend-multiply opacity-90"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Half: Stats & Event Cards side-by-side */}
        <div className="mt-8 lg:-mt-6 flex flex-col lg:flex-row gap-4 lg:gap-6 items-end relative z-20 w-full px-2 lg:px-4">
          
          {/* Stats Section */}
          <div style={{ flex: '1.4' }} className="w-full lg:w-auto bg-[#F4EBD9] border-[3px] border-white/40 rounded-[2.5rem] p-4 lg:p-5 shadow-[0_12px_40px_rgb(0,0,0,0.15)] shrink-0 relative hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start divide-x divide-[#e2d5bd]">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-start flex-1 px-1 text-center group cursor-pointer">
                  <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-none mb-1.5">{stat.value}</h3>
                  <p className="text-[10px] lg:text-[11px] xl:text-[12px] text-gray-700 font-semibold leading-[1.2] whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Polaroids Grid Section */}
          <div style={{ flex: '1' }} className="w-full lg:w-auto flex gap-2 lg:gap-3 justify-between items-end">
            {CARDS.map((card, idx) => {
              const rotations = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-3'];
              // Safely map colors for Tailwind JIT
              const colorMap = {
                'text-orange-500': 'bg-orange-500',
                'text-green-500': 'bg-green-500',
                'text-blue-500': 'bg-blue-500',
                'text-purple-500': 'bg-purple-500'
              };
              const bgColor = colorMap[card.color] || 'bg-gray-500';
              
              return (
              <div key={idx} className={`shrink-0 flex-1 min-w-0 bg-[#FDF9F1] rounded-[14px] p-1.5 lg:p-2 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 border-[3px] border-[#E8DCC4] relative ${rotations[idx]} hover:rotate-0 hover:z-30 cursor-pointer flex flex-col`}>
                 {/* Tape element */}
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 lg:w-10 h-4 bg-[#DDBB8E] -rotate-3 shadow-sm rounded-sm z-10"></div>
                 
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2 shadow-sm border border-[#E8DCC4]">
                  <ImageWithFallback 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  {/* Optional flag graphic for specific cards */}
                  {card.flag && (
                      <div className="absolute top-1 left-1 flex gap-[1px] shadow-sm overflow-hidden rounded-sm border border-white/50">
                          <div className="w-3 h-2 bg-orange-500"></div>
                          <div className="w-3 h-2 bg-white"></div>
                          <div className="w-3 h-2 bg-green-500"></div>
                      </div>
                  )}
                </div>
                <div className="px-1 pb-1 flex-1 flex flex-col justify-end">
                  <h3 className="font-bold text-gray-900 text-[11px] lg:text-[12px] xl:text-[13px] leading-tight mb-1 truncate font-serif">{card.title}</h3>
                  <div className="flex items-end justify-between gap-1 mt-auto">
                    <p className="text-[8px] lg:text-[9px] xl:text-[10px] text-gray-600 font-medium leading-[1.1] max-w-[80%]">{card.desc}</p>
                    <div className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center shrink-0 shadow-sm text-white ${bgColor}`}>
                      <ArrowRight className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>

        </div>
      </main>

      {/* Timeline Section with Horizontal Parchment Ripped Edge */}
      <section className="relative z-20 mt-32 pb-16 shadow-2xl">
         {/* Ripped edge SVG Top (outside overflow-hidden so it's visible) */}
        <div className="absolute top-0 left-0 w-full h-8 -mt-7 z-10 text-[#F4EBD9]">
             <svg viewBox="0 0 1200 50" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_-3px_3px_rgba(0,0,0,0.2)] text-[#F4EBD9]">
                <defs>
                  <pattern id="torn-edge-top" width="60" height="50" patternUnits="userSpaceOnUse">
                    {/* Fills BOTTOM, waves on TOP */}
                    <path d="M0,50 L0,30 Q15,15 30,35 Q45,55 60,30 L60,50 Z" fill="currentColor" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="1200" height="50" fill="url(#torn-edge-top)" />
             </svg>
        </div>

        {/* Ripped Paper Background Layer */}
        <div className="absolute inset-0 bg-[#F4EBD9] -z-10 shadow-xl overflow-hidden">
             {/* Paper texture overlay */}
            <div className="absolute inset-0 opacity-50 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
            {/* Edge burn/shadow effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(100,60,20,0.15)] pointer-events-none"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto relative py-6 lg:py-8 overflow-x-auto custom-scrollbar">
          <div className="flex items-center min-w-[1000px] w-full px-4 relative">
            
            {/* Title Block (Left) */}
            <div className="flex items-center gap-6 z-10 w-[380px] shrink-0 pl-2">
               {/* Compass Graphic */}
              <div className="relative">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.5)] border-[3px] border-[#927855] z-10 relative">
                     <ImageWithFallback src="https://images.unsplash.com/photo-1549487532-35805542a198?auto=format&fit=crop&q=80" alt="Compass" className="w-full h-full object-cover saturate-[1.2] sepia-[0.2]" />
                  </div>
                  {/* Compass ring loop */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 border-[3px] border-[#927855] rounded-full z-0 drop-shadow-md"></div>
              </div>
              
              <div className="relative">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#111] flex items-center gap-2">
                  Our Journey
                  <svg viewBox="0 0 100 100" className="w-8 h-8 opacity-70 mt-1">
                      {/* Dotted line loop to pin */}
                      <path d="M10,80 Q30,80 50,60 T70,30" fill="none" stroke="#444" strokeWidth="2.5" strokeDasharray="3 3"/>
                      <path d="M70,30 A 8 8 0 1 0 86,30 A 8 8 0 1 0 70,30 Z" fill="none" stroke="#444" strokeWidth="2"/>
                      <circle cx="78" cy="30" r="3" fill="#444"/>
                  </svg>
                </h2>
                <div className="relative mt-1 pl-1">
                  <p className="text-lg lg:text-xl font-serif italic text-[#333]">A timeline of memories</p>
                  {/* Orange brush stroke */}
                  <div className="absolute -bottom-1 left-0 w-[90%] h-1.5 bg-orange-400 rounded-full opacity-80" style={{ clipPath: 'polygon(0 40%, 100% 0, 95% 100%, 5% 80%)' }}></div>
                </div>
              </div>
            </div>

            {/* Timeline Nodes Container */}
            <div className="relative flex-1 flex justify-between items-center px-4">
              
              {/* Wavy Timeline Path (SVG) behind pins */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-24 pointer-events-none z-0">
                   <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full overflow-visible opacity-70">
                      {/* Generative wavy path, passing near nodes */}
                      <path d="M-50,50 Q20,20 80,45 T220,60 T360,40 T500,55 T640,40 T780,55 T950,25" fill="none" stroke="#333" strokeWidth="1.5" strokeDasharray="4 4" />
                      {/* Paper plane at end */}
                      <g transform="translate(950, 25) rotate(-15)">
                        <path d="M0,0 L20,-10 L5,15 Z" fill="#b45309" stroke="#78350f" strokeWidth="1"/>
                      </g>
                   </svg>
              </div>
              
              {/* Nodes */}
              {TIMELINE.map((item, idx) => {
                // Determine vertical offset for wavy look (up and down alternately)
                const yOffsets = ['-translate-y-4', 'translate-y-3', '-translate-y-3', 'translate-y-2', '-translate-y-2', 'translate-y-3', '-translate-y-5'];
                
                return (
                  <div key={idx} className={`relative z-10 flex flex-col items-center text-center group w-[100px] ${yOffsets[idx % yOffsets.length]}`}>
                    <div className="relative mb-1">
                      <MapPin className={`w-8 h-8 lg:w-9 lg:h-9 drop-shadow-md group-hover:-translate-y-1 transition-transform duration-300 ${item.iconColor} fill-current`} />
                      <div className="absolute top-[6px] lg:top-[8px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col gap-0.5 items-center mt-1">
                      <span className="text-xs lg:text-sm font-bold text-gray-900 leading-tight">{item.month}</span>
                      <span className="text-[10px] lg:text-[11px] text-gray-700 font-medium whitespace-pre-line leading-tight">{item.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trees Illustration (Bottom Right) */}
            <div className="absolute bottom-2 right-4 opacity-70 pointer-events-none z-10">
                <svg viewBox="0 0 100 80" className="w-20 h-16 lg:w-28 lg:h-20">
                   {/* Pine Tree 1 */}
                   <path d="M20,80 L35,40 L50,80 Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                   <path d="M25,60 L35,30 L45,60 Z" fill="none" stroke="#333" strokeWidth="1"/>
                   <path d="M35,80 L35,40" stroke="#333" strokeWidth="1.5"/>
                   {/* Pine Tree 2 */}
                   <path d="M10,80 L20,50 L30,80 Z" fill="none" stroke="#333" strokeWidth="1"/>
                   <path d="M20,80 L20,50" stroke="#333" strokeWidth="1"/>
                   {/* Pine Tree 3 */}
                   <path d="M60,80 L75,20 L90,80 Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                   <path d="M65,55 L75,10 L85,55 Z" fill="none" stroke="#333" strokeWidth="1"/>
                   <path d="M75,80 L75,20" stroke="#333" strokeWidth="1.5"/>
                   <path d="M75,50 L95,80" stroke="#333" strokeWidth="1"/>
                   <path d="M75,40 L55,80" stroke="#333" strokeWidth="1"/>
                   {/* Mountain */}
                   <path d="M40,80 L55,35 L70,80" fill="none" stroke="#333" strokeWidth="1.5"/>
                   <path d="M50,50 L55,35 L60,50 L55,55 Z" fill="none" stroke="#333" strokeWidth="1"/>
                </svg>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Section with Transparent Background and Dotted Path */}
      <footer className="relative bg-transparent text-white pt-24 z-30 flex flex-col">
         {/* Top Ripped edge SVG (Beige paper tearing downwards) */}
        <div className="absolute -top-[1px] left-0 w-full h-12 z-10 text-[#F4EBD9]">
             <svg viewBox="0 0 1200 50" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] text-[#F4EBD9]">
                <defs>
                  <pattern id="torn-edge-bottom" width="60" height="50" patternUnits="userSpaceOnUse">
                    {/* Fills TOP, waves on BOTTOM */}
                    <path d="M0,0 L0,20 Q15,40 30,20 Q45,0 60,20 L60,0 Z" fill="currentColor" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="1200" height="50" fill="url(#torn-edge-bottom)" />
             </svg>
        </div>

        {/* Dotted Flight Path */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="w-full h-full opacity-60" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 300">
            {/* Wavy looping flight path */}
            <path d="M 1250,50 C 1100,250 950,-50 800,100 C 650,250 450,50 200,150" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" />
            {/* Paper plane icon */}
            <g transform="translate(1120, 80) rotate(-25)">
              <path d="M0,0 L24,-12 L6,18 Z" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M6,18 L10,6 L24,-12" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
            </g>
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16 lg:px-8">
            
            {/* Left Column: Script Text & Heart */}
            <div className="flex items-center gap-4 lg:gap-6 text-center lg:text-left">
              <h3 className="font-caveat text-3xl lg:text-[40px] text-[#EBD08B] leading-[1.2] drop-shadow-md font-medium">
                Every trip tells a story.<br/>
                Every person adds to it.
              </h3>
              {/* Hand-drawn open heart */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EBD08B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-12 drop-shadow-sm -mt-6">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35" fill="none" strokeDasharray="50" strokeDashoffset="5" />
              </svg>
            </div>

            {/* Middle Column: Title & Subtitle */}
            <div className="text-center space-y-2 flex flex-col items-center">
              <h2 className="text-[28px] lg:text-[34px] font-serif font-bold text-white flex items-center justify-center gap-3 tracking-wide drop-shadow-md">
                The Journey Continues...
                 {/* Small mountain graphic */}
                 <svg width="36" height="18" viewBox="0 0 40 20" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block">
                    <path d="M5,20 L15,5 L20,12 L30,2 L38,20" />
                 </svg>
              </h2>
              <p className="text-gray-200 font-medium tracking-wide text-sm lg:text-base drop-shadow-md">Let's keep exploring the world, together!</p>
              {/* Orange brush stroke underline */}
              <div className="w-24 h-1.5 bg-[#d97706] rounded-full mt-2 opacity-90" style={{ clipPath: 'polygon(0 0, 100% 20%, 95% 100%, 5% 80%)' }}></div>
            </div>

            {/* Right Column: Button */}
            <div className="relative group shrink-0 mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-[#b45309] rounded-full blur opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <button className="relative bg-[#a5520e] hover:bg-[#8d4409] text-white px-7 py-3.5 rounded-full font-medium transition-colors flex items-center gap-3 border border-[#d97706]/50 shadow-lg text-sm lg:text-base">
                Explore Full Tenure Report
                <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Footer Bottom Links - Full Width Solid Background */}
        <div className="w-full bg-[#111111] relative z-10 mt-12 sm:mt-16">
          <div className="flex flex-col items-center justify-center gap-3 text-[13px] text-gray-300 py-6 px-4">
            <p className="flex items-center gap-2">
                © 2025 Boundless Travel Society. 
                <Navigation className="w-3.5 h-3.5 -rotate-45 text-gray-400" />
            </p>
            <div className="flex gap-8 font-medium">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}