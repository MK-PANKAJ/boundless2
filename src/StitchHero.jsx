import React from 'react';
import IndiaMap from './components/IndiaMap';
import Timeline from './components/Timeline';
import hero_mountains from './assets/hero_mountains.png';

export default function StitchHero({ onExplore, events, activeMonthId, onMonthSelect, onCityClick }) {
  return (
    <>
      
<header className="relative min-h-screen pt-24 pb-xl flex flex-col justify-between overflow-hidden">

<div aria-label="A breathtaking panoramic photo of a golden hour sunrise over mist-covered mountains with silhouetted hikers on a ridge. High resolution, warm tones, immersive travel photography." className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero_mountains})` }}>

<div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/10 to-surface/90 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto px-lg w-full flex-grow flex flex-col justify-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">

<div className="lg:col-span-7 flex flex-col gap-md pt-xl lg:pt-0">
<div className="relative inline-block -rotate-2 w-max mb-sm z-20">
<span className="font-subheadline-script text-subheadline-script text-secondary drop-shadow-sm bg-surface-bright/80 px-4 py-2 rounded-sm transform origin-left">
                            A year of journeys, friendships &amp; endless memories.
                        </span>

<div className="washi-tape w-12 h-4 -top-2 left-4 -rotate-6"></div>
</div>
<h1 className="font-display-hero text-display-hero text-primary drop-shadow-md z-10 leading-tight">
                        Boundless 2025
                    </h1>
<p className="font-body-lg text-body-lg text-primary-container max-w-2xl mt-4 z-10 font-medium">
                        5200+ members. 40+ cities. One community. Countless stories.
                    </p>
<div className="flex flex-wrap gap-md mt-lg z-10">
<button className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-4 rounded-full font-label-caps text-label-caps shadow-md transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
                            Start Exploring
                        </button>
<button className="bg-surface/50 hover:bg-surface/80 backdrop-blur-md text-primary border border-primary/20 px-6 py-4 rounded-full font-label-caps text-label-caps shadow-sm transition-all flex items-center gap-2">
<span className="material-symbols-outlined" data-weight="fill" style={{}}>play_circle</span>
                            Watch Our Journey
                        </button>
</div>
</div>

<div className="lg:col-span-5 relative mt-xl lg:mt-0 h-[500px] hidden md:block">

<div className="absolute inset-0 rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] z-0 bg-surface">
  <IndiaMap events={events} onCityClick={onCityClick} />
</div>
</div>
</div>
</div>

<div className="relative z-20 max-w-container-max mx-auto px-lg w-full mt-xl mb-md">
<div className="bg-surface-bright/60 backdrop-blur-2xl border border-surface-variant rounded-xl p-md shadow-sm grid grid-cols-2 md:grid-cols-5 gap-sm md:gap-md divide-x divide-outline-variant/30 text-center">
<div className="flex flex-col items-center gap-xs px-2">
<span className="material-symbols-outlined text-secondary text-2xl">group</span>
<span className="font-body-md text-body-md text-primary-container font-medium">5200+</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Members Connected</span>
</div>
<div className="flex flex-col items-center gap-xs px-2">
<span className="material-symbols-outlined text-secondary text-2xl">diversity_1</span>
<span className="font-body-md text-body-md text-primary-container font-medium">1200+</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Female Members</span>
</div>
<div className="flex flex-col items-center gap-xs px-2">
<span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
<span className="font-body-md text-body-md text-primary-container font-medium">40+</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Cities Reached</span>
</div>
<div className="flex flex-col items-center gap-xs px-2">
<span className="material-symbols-outlined text-secondary text-2xl">stars</span>
<span className="font-body-md text-body-md text-primary-container font-medium">110+</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Core Members</span>
</div>
<div className="flex flex-col items-center gap-xs px-2 col-span-2 md:col-span-1">
<span className="material-symbols-outlined text-secondary text-2xl">handshake</span>
<span className="font-body-md text-body-md text-primary-container font-medium">Many</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Collabs Across Societies</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-16 bg-surface mask-image-torn-edge z-30 translate-y-1"></div>
</header>

<main className="relative bg-surface pb-xl px-lg">
<div className="max-w-container-max mx-auto pt-xl">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md -mt-32 relative z-40">
  {events.slice(0, 4).map((event, idx) => (
    <div key={idx} className={`bg-surface-bright rounded-lg p-sm shadow-[0_4px_20px_rgba(27,48,34,0.08)] transform hover:-translate-y-2 transition-transform duration-300 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-2'} relative border border-surface-variant/50 ${idx === 1 ? 'mt-4 md:mt-8' : idx === 3 ? 'mt-6 lg:mt-12' : 'mt-2'}`}>
      <div className={`washi-tape w-8 h-3 -top-1 left-1/2 -translate-x-1/2 ${idx % 2 === 0 ? '-rotate-3' : 'rotate-6'}`}></div>
      <div className="aspect-[4/3] rounded-DEFAULT bg-surface-container-highest mb-sm overflow-hidden relative">
        <img alt={event.name} className="w-full h-full object-cover" src={event.image || "placeholder"} />
      </div>
      <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary text-center pb-2">{event.title || event.name}</h3>
      <div className="flex justify-center text-label-caps text-secondary">
          <span className="material-symbols-outlined text-sm mr-1">location_on</span>
          {event.location}
      </div>
    </div>
  ))}
</div>

<section className="mt-xl pt-xl pb-lg relative">
<div className="text-center mb-xl">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Our Journey</h2>
<span className="font-subheadline-script text-subheadline-script text-secondary">A timeline of memories</span>
</div>
<div className="relative w-full mx-auto py-md">
  <Timeline activeMonthId={activeMonthId} onMonthSelect={onMonthSelect} />
</div>
</section>
</div>
</main>

<footer className="w-full relative mask-image-torn-edge bg-surface dark:bg-inverse-surface mt-xl">
<div className="w-full px-lg py-xl flex flex-col md:flex-row justify-between items-center gap-md max-w-container-max mx-auto">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">Boundless</span>
<p className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant text-center md:text-left">
                    © 2024 Boundless Travel Society. Curated for the wild at heart.
                </p>
</div>
<ul className="flex flex-wrap justify-center gap-md font-body-md text-body-md">
<li><a className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary underline underline-offset-4 transition-all duration-300" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary underline underline-offset-4 transition-all duration-300" href="#">Terms of Service</a></li>
<li><a className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary underline underline-offset-4 transition-all duration-300" href="#">Contact Us</a></li>
</ul>
</div>
</footer>

    </>
  );
}
