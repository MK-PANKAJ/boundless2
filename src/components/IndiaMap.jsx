import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Interactive map coordinate database with real lat/lng and event mappings
const mapCities = [
  { name: 'Delhi', lat: 28.7041, lng: 77.1025, info: '40 participants • CP Meetup & Pacific Garba', eventId: 'tricolor-trails-2', subEventId: 'delhi' },
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777, info: '32 participants • Sanjay Gandhi National Park & Raas', eventId: 'tricolor-trails-2', subEventId: 'mumbai' },
  { name: 'Bengaluru', lat: 12.9716, lng: 77.5946, info: '30 participants • Bugle Rock Park Chapter', eventId: 'tricolor-trails-2', subEventId: 'bureau' },
  { name: 'Chennai', lat: 13.0827, lng: 80.2707, info: '25 participants • Dakshina Chitra & Vandalur', eventId: 'tricolor-trails-2', subEventId: 'chennai' },
  { name: 'Kolkata', lat: 22.5726, lng: 88.3639, info: '40 participants • Indian Museum & Durga Puja Raas', eventId: 'tricolor-trails-2', subEventId: 'kolkata' },
  { name: 'Hyderabad', lat: 17.3850, lng: 78.4867, info: '50 participants • SK Creations Garba Night', eventId: 'navrang-2', subEventId: 'hyderabad' },
  { name: 'Jaipur', lat: 26.9124, lng: 75.7873, info: '30 participants • Bhangarh Fort Trip & Raas', eventId: 'tricolor-trails-2', subEventId: 'jaipur' },
  { name: 'Udaipur', lat: 24.5854, lng: 73.7125, info: '30 participants • Sajjangarh Fort Monsoon Palace', eventId: 'tricolor-trails-3', subEventId: 'udaipur-meetup' },
  { name: 'Patna', lat: 25.5941, lng: 85.1376, info: '32 participants • Bodhgaya Mini-Trip & Raas', eventId: 'tricolor-trails-2', subEventId: 'patna' },
  { name: 'Nagpur', lat: 21.1458, lng: 79.0882, info: '25 participants • Zilpi Lake Outing & Raas', eventId: 'tricolor-trails-2', subEventId: 'nagpur' },
  { name: 'Indore', lat: 22.7196, lng: 75.8577, info: '25 participants • Tincha Waterfall road-trip & Raas', eventId: 'tricolor-trails-2', subEventId: 'indore' },
  { name: 'Coimbatore', lat: 11.0168, lng: 76.9558, info: '10 participants • Ooty Hill Station Expedition', eventId: 'tricolor-trails-3', subEventId: 'coimbatore' },
  { name: 'Nainital', lat: 29.3803, lng: 79.4636, info: '20 participants • Uttarakhand Misty Lakes', eventId: 'tricolor-trails-3', subEventId: 'nainital-meetup' },
  { name: 'Panjim (Goa)', lat: 15.4909, lng: 73.8278, info: '30 participants • Fontainhas Quarters Heritage Walk', eventId: 'goa-trip', subEventId: 'panjim-meetup' },
  { name: 'Vikarabad', lat: 17.3364, lng: 77.9048, info: '14 participants • Ananthagiri Hills Forest Trek', eventId: 'ananthagiri-trip', subEventId: 'vikarabad-meetup' }
];

export default function IndiaMap({ onCityClick }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // --- 1. Style Definitions Injection ---
    const styleId = 'india-map-editorial-styles';
    if (!document.getElementById(styleId)) {
      const styleSheet = document.createElement('style');
      styleSheet.id = styleId;
      styleSheet.innerText = `
        .leaflet-container {
          background: transparent !important;
          outline: none;
        }
        
        /* Custom Waving Flag Pointer styles */
        .custom-flag-pointer {
          position: relative;
          width: 38px;
          height: 72px;
          cursor: pointer;
        }

        .flag-pole {
          position: absolute;
          left: 18px;
          top: 10px;
          width: 2px;
          height: 46px;
          background: var(--color-burgundy);
          box-shadow: 1px 1px 2px rgba(0,0,0,0.15);
          border-radius: 1px;
          z-index: 5;
          
          /* Hidden by default, slide up on hover */
          opacity: 0;
          transform: translateY(12px) scaleY(0.7);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flag-cloth {
          position: absolute;
          left: 20px;
          top: 10px;
          width: 28px;
          height: 18px;
          background: linear-gradient(to bottom, #FF671F 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #046A38 66.6%);
          border: 0.5px solid rgba(74, 18, 37, 0.2);
          box-shadow: 0 2px 4px rgba(74, 18, 37, 0.15);
          border-radius: 1.5px;
          transform-origin: left center;
          z-index: 4;
          
          /* Hidden by default, slide up on hover */
          opacity: 0;
          transform: translateY(12px) scaleX(0.5);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Navy Blue Ashoka Chakra SVG spokes in the middle of white stripe */
        .ashoka-chakra {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 4.5px;
          height: 4.5px;
          border-radius: 50%;
          background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='navy' stroke-width='2.5'><circle cx='12' cy='12' r='10'/><path d='M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M5 19 L19 5 M8.5 12 L15.5 12 M12 8.5 L12 15.5'/></svg>");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          z-index: 5;
        }

        .flag-pulse-base {
          position: absolute;
          left: 13px;
          top: 52px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--color-burgundy);
          border: 2px solid var(--color-sand);
          box-shadow: 0 2px 5px rgba(74, 18, 37, 0.3);
          z-index: 6;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flag-pulse-ring {
          position: absolute;
          left: 4px;
          top: 43px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1.5px solid var(--color-gold);
          opacity: 0;
          animation: flagPulse 2s infinite ease-out;
          pointer-events: none;
          z-index: 3;
        }

        /* --- Elegant Hover Reveal triggers --- */
        .leaflet-marker-icon:hover .flag-pole,
        .custom-flag-pointer:hover .flag-pole {
          opacity: 1;
          transform: translateY(0) scaleY(1);
        }

        .leaflet-marker-icon:hover .flag-cloth,
        .custom-flag-pointer:hover .flag-cloth {
          opacity: 1;
          transform: translateY(0) scaleX(1);
          animation: waveFlag 1.8s ease-in-out infinite alternate;
        }

        .leaflet-marker-icon:hover .flag-pulse-base,
        .custom-flag-pointer:hover .flag-pulse-base {
          background: var(--color-gold);
          transform: scale(1.25);
          box-shadow: 0 3px 8px rgba(217, 119, 6, 0.4);
        }

        @keyframes waveFlag {
          0% { transform: skewY(-4deg) rotate(-2deg); }
          100% { transform: skewY(4deg) rotate(2deg); }
        }

        @keyframes flagPulse {
          0% { transform: scale(0.4); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        /* Editorial Map Tooltip overrides */
        .leaflet-tooltip {
          font-family: var(--font-sans) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          color: var(--color-burgundy) !important;
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
          border: 1px solid rgba(74, 18, 37, 0.15) !important;
          box-shadow: 0 4px 15px rgba(74, 18, 37, 0.08) !important;
          border-radius: 8px !important;
          padding: 6px 10px !important;
          letter-spacing: 0.02em;
          pointer-events: none !important; /* Prevents tooltip overlay from stealing hover and causing toggles */
        }

        .leaflet-tooltip.state-label {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          color: rgba(74, 18, 37, 0.22) !important;
          font-size: 9px !important;
          font-weight: 700 !important;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          pointer-events: none;
        }

        .leaflet-tooltip.city-tooltip {
          padding: 8px 12px !important;
        }

        .tooltip-city-title {
          font-family: var(--font-heading) !important;
          font-weight: 800 !important;
          color: var(--color-burgundy) !important;
          font-size: 11px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          margin-bottom: 2px !important;
        }

        .tooltip-city-info {
          font-size: 10px !important;
          color: var(--text-muted) !important;
          font-weight: 400 !important;
        }
      `;
      document.head.appendChild(styleSheet);
    }

    // --- 2. Map Initialization ---
    const map = L.map(mapContainerRef.current, {
      center: [22.8, 80.0],
      zoom: 4.7,
      minZoom: 3.5,
      maxZoom: 7,
      attributionControl: false,
      zoomControl: false,
      scrollWheelZoom: false, // Prevent map zoom from hijacking page scroll
      doubleClickZoom: true,
      dragging: !L.Browser.mobile, // Disable on mobile to prevent layout touch hijacking
      background: 'transparent'
    });

    mapInstanceRef.current = map;

    // Create custom states pane on top of standard vector base layer
    map.createPane('statesPane');
    const statesPane = map.getPane('statesPane');
    if (statesPane) {
      statesPane.style.zIndex = '450';
    }

    const svgRenderer = L.svg({ padding: 0.5 });
    const canvasRenderer = L.canvas({ padding: 0.5, pane: 'statesPane' });

    // --- 3. Fetch Base Layer (Unified India Outline) ---
    fetch('https://raw.githubusercontent.com/datameet/maps/master/Country/india-soi.geojson')
      .then(res => {
        if (!res.ok) throw new Error("Unified India GeoJSON failed to load");
        return res.json();
      })
      .then(data => {
        if (!isMounted) return;
        let multiPolygonCoordinates = [];
        data.features.forEach(feature => {
          if (feature.geometry.type === 'Polygon') {
            multiPolygonCoordinates.push(feature.geometry.coordinates);
          } else if (feature.geometry.type === 'MultiPolygon') {
            feature.geometry.coordinates.forEach(polyCoords => {
              multiPolygonCoordinates.push(polyCoords);
            });
          }
        });

        const unifiedFeature = {
          "type": "Feature",
          "properties": {},
          "geometry": { "type": "MultiPolygon", "coordinates": multiPolygonCoordinates }
        };

        const indiaLayer = L.geoJSON(unifiedFeature, {
          renderer: svgRenderer,
          style: {
            fillColor: 'url(#india-flag-gradient)',
            fillOpacity: 1,
            color: 'rgba(74, 18, 37, 0.15)',
            weight: 1.5
          }
        }).addTo(map);

        const bounds = indiaLayer.getBounds();
        map.fitBounds(bounds, { padding: [20, 20] });
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading Unified India geoJSON base layer:", err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      });

    // --- 4. Fetch Overlay Layer (Translucent States Pane) ---
    fetch('https://raw.githubusercontent.com/datameet/maps/master/website/docs/data/geojson/states.geojson')
      .then(res => res.json())
      .then(data => {
        if (!isMounted) return;
        L.geoJSON(data, {
          renderer: canvasRenderer,
          style: {
            fillColor: 'transparent',
            fillOpacity: 0,
            color: "rgba(74, 18, 37, 0.08)",
            weight: 1
          }
        }).addTo(map);
      })
      .catch(err => console.error("Error loading States geoJSON overlay layer:", err));

    // --- 5. Add Custom Markers for Society Cities ---
    mapCities.forEach(city => {
      const htmlStr = `
        <div class="custom-flag-pointer">
          <div class="flag-pole"></div>
          <div class="flag-cloth">
            <div class="ashoka-chakra"></div>
          </div>
          <div class="flag-pulse-base"></div>
          <div class="flag-pulse-ring"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-video-icon',
        html: htmlStr,
        iconSize: [38, 72],
        iconAnchor: [19, 58] // Perfectly center anchor around flagpole base
      });

      const marker = L.marker([city.lat, city.lng], { icon: customIcon }).addTo(map);

      // Tooltip content
      const tooltipHtml = `
        <div class="tooltip-city-title">${city.name}</div>
        <div class="tooltip-city-info">${city.info}</div>
      `;
      marker.bindTooltip(tooltipHtml, {
        permanent: false,
        direction: 'top',
        className: 'city-tooltip',
        offset: [0, -68]
      });

      // Interactive routing callback on click
      marker.on('click', () => {
        if (onCityClick) {
          onCityClick(city);
        }
      });
    });

    // Cleanup Leaflet instance
    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [onCityClick]);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-burgundy/10 bg-white/25 backdrop-blur-md shadow-sm" style={{ height: '480px' }}>
      {/* SVG Gradient Definition */}
      <svg style={{ height: 0, width: 0, position: 'absolute' }} aria-hidden="true" focusable={false}>
        <defs>
          <linearGradient id="india-flag-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF9933', stopOpacity: 0.25 }} />
            <stop offset="33.33%" style={{ stopColor: '#FF9933', stopOpacity: 0.18 }} />
            <stop offset="33.33%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.2 }} />
            <stop offset="66.66%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.2 }} />
            <stop offset="66.66%" style={{ stopColor: '#138808', stopOpacity: 0.18 }} />
            <stop offset="100%" style={{ stopColor: '#138808', stopOpacity: 0.25 }} />
          </linearGradient>
        </defs>
      </svg>

      {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#fcf7e7]/65 backdrop-blur-md space-y-3">
          <div className="w-8 h-8 rounded-full border-4 border-burgundy border-t-transparent animate-spin"></div>
          <div className="font-mono text-xs uppercase tracking-wider text-burgundy font-bold">Assembling Editorial Map Database...</div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#fcf7e7] backdrop-blur-md p-6 text-center space-y-4">
          <div className="text-3xl">🗺️</div>
          <h4 className="font-heading text-lg font-bold text-burgundy">Interactive Portal Offline</h4>
          <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
            Could not fetch standard GeoJSON datasets. Please check your internet connection to access the high-performance Leaflet database.
          </p>
        </div>
      )}

      <div ref={mapContainerRef} style={{ height: '100%', width: '100%', zIndex: 10 }} />
    </div>
  );
}
