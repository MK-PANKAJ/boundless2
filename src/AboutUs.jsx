import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fcf7e7] text-[#4a1225] font-sans selection:bg-[#4a1225] selection:text-[#fcf7e7]">
      {/* Immersive Hero Header */}
      <header className="relative w-full h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#4a1225]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcf7e7] via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a1225]/80 to-[#4a1225]/20"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl font-black text-[#fffcf2] mb-6 tracking-tight drop-shadow-xl">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-[#fcf7e7]/90 max-w-2xl font-medium leading-relaxed">
            Boundless Travel Society at IITM BS is a vibrant community connecting explorers, celebrating diversity, and forging unforgettable memories.
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

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-16">
        
        {/* Mission Statement */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#d97706]/10 rounded-full blur-2xl"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#4a1225] relative">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-[#4a1225]/80 leading-relaxed font-medium">
              <p>
                Our mission is to organize memorable group travel experiences and cultural events that bring together individuals with a shared passion for exploration.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-[#d97706] mt-1 shrink-0" size={20} />
                  <span>Promote cultural exchange and educational opportunities through travel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-[#d97706] mt-1 shrink-0" size={20} />
                  <span>Encourage exploration of domestic and international destinations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-[#d97706] mt-1 shrink-0" size={20} />
                  <span>Organize city meetups, themed trips, and collaborations with other societies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-[#d97706] mt-1 shrink-0" size={20} />
                  <span>Foster personal development, networking, and meaningful connections.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="cream-glass-card p-4 relative z-10 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=983&auto=format&fit=crop" alt="Group of friends traveling" className="w-full h-auto rounded-xl object-cover" />
              <div className="tape"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-extrabold text-[#4a1225]">A Growing Community</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="cream-glass-card p-6 text-center hover:border-[#d97706]/30">
              <div className="text-3xl md:text-4xl font-black text-[#4a1225] mb-1">5200+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#4a1225]/60">Total Members</div>
            </div>
            <div className="cream-glass-card p-6 text-center hover:border-[#d97706]/30">
              <div className="text-3xl md:text-4xl font-black text-[#4a1225] mb-1">1200+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#4a1225]/60">Female Members</div>
            </div>
            <div className="cream-glass-card p-6 text-center hover:border-[#d97706]/30">
              <div className="text-3xl md:text-4xl font-black text-[#4a1225] mb-1">40+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#4a1225]/60">Cities Explored</div>
            </div>
            <div className="cream-glass-card p-6 text-center hover:border-[#d97706]/30">
              <div className="text-3xl md:text-4xl font-black text-[#4a1225] mb-1">110+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#4a1225]/60">Core Members</div>
            </div>
          </div>
        </section>

        {/* The Journey So Far */}
        <section className="relative">
          <div className="absolute inset-0 bg-[#4a1225]/5 rounded-3xl -z-10 transform -skew-y-2"></div>
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-heading font-extrabold text-[#4a1225] mb-8 text-center">The Journey So Far</h2>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              {/* Highlight 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-2xl font-bold font-editorial text-[#d97706]">Tricolor Trails 2.0 & 3.0</h3>
                  <p className="text-sm font-bold tracking-widest text-[#4a1225]/50 uppercase mt-2">Nationwide Network</p>
                </div>
                <div className="md:w-2/3 text-[#4a1225]/80 leading-relaxed">
                  <p>Our flagship multi-city initiative launched to celebrate the spirit of Independence Week and Republic Day. Conducted across 12+ cities in 11 states simultaneously, this series brought students together through cultural exploration, bonding, and patriotic celebration. From lakes and heritage museums to waterfalls and city parks, students across the nation celebrated the spirit of unity.</p>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4a1225]/10 to-transparent"></div>

              {/* Highlight 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-2xl font-bold font-editorial text-[#d97706]">Navrang Festival</h3>
                  <p className="text-sm font-bold tracking-widest text-[#4a1225]/50 uppercase mt-2">Pan-India Celebration</p>
                </div>
                <div className="md:w-2/3 text-[#4a1225]/80 leading-relaxed">
                  <p>One of the biggest pan-India celebrations organized by the Boundless Travel Society, bringing the festive spirit of Navratri to cities across the country. Expanding to 14 cities with over 350+ attendees, Navrang was more than just dancing—it was a celebration of culture, togetherness, and shared happiness spanning the entire IITM BS community.</p>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4a1225]/10 to-transparent"></div>

              {/* Highlight 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-2xl font-bold font-editorial text-[#d97706]">Epic Expeditions</h3>
                  <p className="text-sm font-bold tracking-widest text-[#4a1225]/50 uppercase mt-2">Meghalaya, Kerala & More</p>
                </div>
                <div className="md:w-2/3 text-[#4a1225]/80 leading-relaxed">
                  <p>From the misty hills and hidden waterfalls of Meghalaya, the historical lakes and forts of Mewar, to the serene backwaters of Kerala and the heights of Kalsubai Peak. Our expeditions are designed to blend nature, adventure, and spiritualism, creating unforgettable memories where strangers become lifelong friends.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Call to Action Footer */}
      <footer className="w-full bg-[#4a1225] text-[#fcf7e7] py-16 text-center relative overflow-hidden mt-12">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#d97706] to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-8">Ready to explore?</h2>
          <p className="text-lg text-white/70 mb-10">Every trip tells a story. Every person adds to it. Join our community and let's keep exploring the world, together.</p>
          <Link to="/timeline/2026-06" className="btn-primary px-8 py-4 text-sm bg-[#d97706] text-white hover:bg-[#b45309]">
            <span>View Upcoming Events</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
