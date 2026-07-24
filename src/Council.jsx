import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ArrowRight } from 'lucide-react';
import sahilImg from "./assets/sahil.jpg";
import vidhiImg from "./assets/vidhi.jpg";

// 2025-26 Council Leadership — update names as needed
const COUNCIL_LEADS = [
  {
    role: "Secretary",
    name: "Sahil Kamble",
    image: sahilImg,
  },
  {
    role: "Deputy Secretary",
    name: "Vidhi Belani",
    image: vidhiImg,
  },
];

export default function Council() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load or re-process Instagram embed script
    const existing = document.getElementById('ig-embed-script');
    if (!existing) {
      const script = document.createElement('script');
      script.id = 'ig-embed-script';
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fcf7e7] text-[#4a1225] font-sans selection:bg-[#4a1225] selection:text-[#fcf7e7]">

      {/* Immersive Hero Header (Matches AboutUs layout and mountain background) */}
      <header className="relative w-full h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#4a1225]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcf7e7] via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a1225]/80 to-[#4a1225]/20"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl font-black text-[#fffcf2] mb-6 tracking-tight drop-shadow-xl uppercase">
            2025–26 Council
          </h1>
          <p className="text-lg md:text-xl text-[#fcf7e7]/90 max-w-2xl font-medium leading-relaxed">
            The official leadership team of the Boundless Travel Society during the 2025–26 term.
          </p>
        </div>

        {/* Floating Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white font-medium transition-colors border border-white/10"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        </div>
      </header>

      {/* Ripped Paper Transition (Matches AboutUs) */}
      <div className="relative w-full h-12 -mt-10 z-20" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\' fill=\'%23fcf7e7\'/%3E%3C/svg%3E")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'rotate(180deg)'
      }}></div>

      {/* ─── Main Content (Matches AboutUs layout container) ─── */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-16">

        {/* Instagram Embed + Context */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: text */}
          <div className="space-y-6 pt-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 border border-[#833ab4]/20 rounded-full px-4 py-2">
              <svg className="w-[13px] h-[13px] text-[#833ab4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#833ab4] uppercase">Tenure Retrospective</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#4a1225] leading-tight">
              The 2025–26<br />
              <span className="text-amber-600">Council Team</span>
            </h2>

            <p className="text-[#4a1225]/80 text-[15px] leading-[1.85] font-medium">
              The official leadership panel of the Boundless Travel Society during the 2025–26 term. This team coordinated our nationwide meetups, successfully executed seasonal expeditions, and managed collaborations across houses throughout the year.
            </p>
            <p className="text-[#4a1225]/80 text-[15px] leading-[1.85] font-medium">
              Check out the team announcement post on Instagram to see everyone who helped lead, manage, and build this community during this completed tenure.
            </p>

            <a
              href="https://www.instagram.com/boundless_iitmbs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/20"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              View Instagram Archive
            </a>
          </div>

          {/* Right: Instagram embed */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px]">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DaDjhdiiMEq/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '16px',
                  boxShadow: '0 8px 40px rgba(74,18,37,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: '100%',
                }}
              />
            </div>
          </div>
        </div>

        {/* ─── Leadership Grid (Matches AboutUs card layout) ─── */}
        <div className="space-y-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#e5d5b5]" />
            <h2 className="text-[#4a1225] font-black text-xl md:text-2xl tracking-tight uppercase whitespace-nowrap">Leadership Team</h2>
            <div className="h-px flex-1 bg-[#e5d5b5]" />
          </div>

          <div className="flex flex-wrap justify-center gap-7 lg:gap-8">
            {COUNCIL_LEADS.map((member, idx) => (
              <div
                key={idx}
                className="group flex min-h-[320px] w-full max-w-[300px] flex-col items-center justify-center rounded-[28px] border border-[#e7d3a8]/70 bg-gradient-to-br from-white/80 via-[#fff8e8]/75 to-[#f6e7c2]/45 px-8 py-9 text-center shadow-[0_18px_45px_-22px_rgba(74,18,37,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d97706]/35 hover:shadow-[0_28px_60px_-24px_rgba(74,18,37,0.42)] sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1.5rem)]"
              >
                <div className="mb-7 flex h-[124px] w-[124px] items-center justify-center rounded-full bg-[#d97706]/10 shadow-[0_18px_42px_-18px_rgba(217,119,6,0.75)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[118px] w-[118px] rounded-full border-[3px] border-[#ead6ad] object-cover shadow-[0_12px_26px_-14px_rgba(74,18,37,0.65)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#c56b06]">{member.role}</p>
                <h3 className="text-2xl font-black leading-tight text-[#4a1225]">{member.name}</h3>
                {(member.subtitle || member.house) && (
                  <p className="mt-5 inline-flex rounded-full bg-[#4a1225]/5 px-4 py-1.5 text-[11px] font-semibold text-[#4a1225]/65">
                    {member.subtitle || member.house}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Call to Action Footer (Matches AboutUs CTA Theme) */}
      <footer className="w-full bg-[#4a1225] text-[#fcf7e7] py-16 text-center relative overflow-hidden mt-12">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#d97706] to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Ready to explore?</h2>
          <p className="text-lg text-white/70 mb-8">Every trip tells a story. Every person adds to it. Join our community and let's keep exploring the world, together.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm bg-[#d97706] text-white hover:bg-[#b45309] rounded-full font-bold transition-all"
          >
            <span>Explore Our Journey</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </footer>

    </div>
  );
}
