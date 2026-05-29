import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import eventsData from './data/events';

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extract all unique images from eventsData
  const galleryImages = useMemo(() => {
    const images = new Set();
    
    eventsData.forEach(event => {
      if (event.image) images.add(event.image);
      if (event.glimpses) {
        event.glimpses.forEach(img => images.add(img));
      }
      
      if (event.subEvents) {
        event.subEvents.forEach(sub => {
          if (sub.image) images.add(sub.image);
          if (sub.glimpses) {
            sub.glimpses.forEach(img => images.add(img));
          }
        });
      }
    });
    
    // Convert to array and shuffle for a random masonry look
    const arr = Array.from(images);
    return arr.sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fcf7e7] text-[#4a1225] font-sans selection:bg-[#4a1225] selection:text-[#fcf7e7]">
      {/* Immersive Hero Header */}
      <header className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#4a1225]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcf7e7] via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a1225]/80 to-[#4a1225]/20"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-8">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 shadow-xl">
             <Camera size={32} className="text-[#fcf7e7]" />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-black text-[#fffcf2] mb-4 tracking-tight drop-shadow-xl">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-[#fcf7e7]/90 max-w-2xl font-medium leading-relaxed">
            Moments, memories, and mountains captured across 40+ cities.
          </p>
        </div>

        {/* Floating Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white font-medium transition-colors border border-white/10">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Ripped Paper Transition */}
      <div className="relative w-full h-12 -mt-10 z-20" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\' fill=\'%23fcf7e7\'/%3E%3C/svg%3E")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'rotate(180deg)'
      }}></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        
        {/* CSS Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="break-inside-avoid relative group">
              <div className="cream-glass-card p-2 sm:p-3 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#d97706]/40">
                <div className="overflow-hidden rounded-xl bg-slate-200">
                  <img 
                    src={src} 
                    alt={`Boundless memory ${idx + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {/* Washi Tape Accent on some images */}
                {idx % 4 === 0 && (
                  <div className="tape scale-75 opacity-70"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {galleryImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-[#4a1225]/60 font-medium">No images found in the event archives yet.</p>
          </div>
        )}

      </main>
    </div>
  );
}
