import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ className }) => {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (!mapContainerRef.current || mapInstanceRef.current) return;

        const map = L.map(mapContainerRef.current, {
            center: [22.5, 82.0],
            zoom: 5,
            minZoom: 4,
            attributionControl: false,
            zoomControl: false, 
            scrollWheelZoom: false,
            dragging: false, // Prevent dragging to keep it looking like a fixed graphic
            touchZoom: false,
            doubleClickZoom: false,
        });

        map.getContainer().style.background = 'transparent';
        mapInstanceRef.current = map;

        const styleId = 'india-map-styles';
        if (!document.getElementById(styleId)) {
            const styleSheet = document.createElement('style');
            styleSheet.id = styleId;
            styleSheet.innerText = `
        .leaflet-container { background: transparent !important; outline: none; }
        .leaflet-marker-icon.custom-video-icon { background: transparent; border: none; }
        .state-label { background: transparent; border: none; box-shadow: none; font-weight: bold; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.8); }
        .city-label { background: transparent; border: none; box-shadow: none; font-weight: 800; font-family: serif; font-style: italic; color: #1e293b; text-shadow: 1.5px 1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px -1.5px 0 #fff, 0px 2px 3px rgba(0,0,0,0.3); font-size: 14px; }
      `;
            document.head.appendChild(styleSheet);
        }

        map.createPane('statesPane');
        map.getPane('statesPane').style.zIndex = '450';

        const svgRenderer = L.svg({ padding: 0.5 });
        const canvasRenderer = L.canvas({ padding: 0.5, pane: 'statesPane' });

        const svgGradient = `
      <svg style="height: 0; width: 0; position: absolute;" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="india-flag" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#FF671F;stop-opacity:1" />
            <stop offset="33.33%" style="stop-color:#FF671F;stop-opacity:1" />
            <stop offset="33.33%" style="stop-color:#FFFFFF;stop-opacity:1" />
            <stop offset="66.66%" style="stop-color:#FFFFFF;stop-opacity:1" />
            <stop offset="66.66%" style="stop-color:#046A38;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#046A38;stop-opacity:1" />
          </linearGradient>
          <filter id="drop-shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.5"/>
          </filter>
        </defs>
      </svg>
    `;
        const defsContainer = document.createElement('div');
        defsContainer.innerHTML = svgGradient;
        mapContainerRef.current.appendChild(defsContainer);

        // Render India Base with Tricolor Gradient and Drop Shadow
        fetch('https://raw.githubusercontent.com/datameet/maps/master/Country/india-soi.geojson')
            .then(res => res.json())
            .then(data => {
                let multiPolygonCoordinates = [];
                data.features.forEach((feature) => {
                    if (feature.geometry.type === 'Polygon') {
                        multiPolygonCoordinates.push(feature.geometry.coordinates);
                    } else if (feature.geometry.type === 'MultiPolygon') {
                        feature.geometry.coordinates.forEach((polyCoords) => {
                            multiPolygonCoordinates.push(polyCoords);
                        });
                    }
                });

                const unifiedFeature = {
                    "type": "Feature", "properties": {},
                    "geometry": { "type": "MultiPolygon", "coordinates": multiPolygonCoordinates }
                };

                const indiaLayer = L.geoJSON(unifiedFeature, {
                    renderer: svgRenderer,
                    style: { 
                        fillColor: 'url(#india-flag)', 
                        fillOpacity: 0.7, 
                        color: "white", 
                        weight: 2.5,
                        filter: "url(#drop-shadow)" // Apply nice drop shadow to the border
                    }
                });
                
                if (mapInstanceRef.current === map) {
                    indiaLayer.addTo(map);
                    const bounds = indiaLayer.getBounds();
                    map.fitBounds(bounds, { padding: [30, 30] });
                    map.options.minZoom = map.getZoom() - 1;
                }
            })
            .catch(e => console.error(e));

        // State outlines
        fetch('https://raw.githubusercontent.com/datameet/maps/master/website/docs/data/geojson/states.geojson')
            .then(res => res.json())
            .then(data => {
                const statesLayer = L.geoJSON(data, {
                    renderer: canvasRenderer,
                    style: { fillColor: 'transparent', fillOpacity: 0, color: "white", weight: 1, opacity: 0.6, dashArray: "3 4" },
                });
                if (mapInstanceRef.current === map) {
                    statesLayer.addTo(map);
                }
            })
            .catch(e => console.error(e));

        function addCityMarker(lat, lng, locationName) {
            const htmlStr = `
              <div class="relative w-6 h-6 flex items-center justify-center group cursor-pointer transition-transform hover:scale-125 z-50">
                <svg viewBox="0 0 24 24" class="w-6 h-6 drop-shadow-md z-10 relative">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#f97316" stroke="white" stroke-width="1.5" />
                  <circle cx="12" cy="9" r="3" fill="white" />
                </svg>
                <div class="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30 pointer-events-none -z-10"></div>
              </div>
            `;
            const icon = L.divIcon({
                className: 'custom-video-icon',
                html: htmlStr,
                iconSize: [24, 24],
                iconAnchor: [12, 24],
                tooltipAnchor: [12, -18]
            });
            const marker = L.marker([lat, lng], { icon: icon }).addTo(map);
            marker.bindTooltip(locationName, { permanent: false, direction: "right", className: 'city-label', offset: [5, 0] });
        }

        const mapPins = [
          { lat: 28.7041, lng: 77.1025, label: 'Delhi' },
          { lat: 19.0760, lng: 72.8777, label: 'Mumbai' },
          { lat: 12.9716, lng: 77.5946, label: 'Bengaluru' },
          { lat: 13.0827, lng: 80.2707, label: 'Chennai' },
          { lat: 22.5726, lng: 88.3639, label: 'Kolkata' },
          { lat: 17.3850, lng: 78.4867, label: 'Hyderabad' },
          { lat: 26.9124, lng: 75.7873, label: 'Jaipur' },
          { lat: 24.5854, lng: 73.7125, label: 'Udaipur' },
          { lat: 25.5941, lng: 85.1376, label: 'Patna' },
          { lat: 21.1458, lng: 79.0882, label: 'Nagpur' },
          { lat: 22.7196, lng: 75.8577, label: 'Indore' },
          { lat: 26.7606, lng: 83.3732, label: 'Gorakhpur' },
          { lat: 22.8046, lng: 86.2029, label: 'Jamshedpur' },
          { lat: 20.2961, lng: 85.8245, label: 'Bhubaneswar' },
          { lat: 26.8467, lng: 80.9462, label: 'Lucknow' },
          { lat: 23.0225, lng: 72.5714, label: 'Ahmedabad' },
          { lat: 11.0168, lng: 76.9558, label: 'Coimbatore' },
          { lat: 29.3803, lng: 79.4636, label: 'Nainital' },
          { lat: 15.4909, lng: 73.8278, label: 'Panjim (Goa)' },
          { lat: 17.3364, lng: 77.9048, label: 'Vikarabad' },
          { lat: 26.4499, lng: 80.3319, label: 'Kanpur' },
          { lat: 26.7271, lng: 88.3953, label: 'Siliguri' },
          { lat: 30.0869, lng: 78.2676, label: 'Rishikesh' },
          { lat: 27.5650, lng: 77.7008, label: 'Vrindavan' },
          { lat: 23.9782, lng: 86.1158, label: 'Parasnath' },
          { lat: 25.0300, lng: 85.4150, label: 'Rajgir' },
          { lat: 17.9258, lng: 73.6586, label: 'Mahabaleshwar' },
          { lat: 32.2396, lng: 77.1887, label: 'Manali' },
          { lat: 26.4897, lng: 74.5511, label: 'Pushkar' },
          { lat: 13.9299, lng: 75.5681, label: 'Shimoga' },
          { lat: 19.6012, lng: 73.7126, label: 'Kalsubai Peak' },
          { lat: 25.5788, lng: 91.8831, label: 'Shillong' },
          { lat: 9.9312, lng: 76.2673, label: 'Kochi' },
          { lat: 26.2389, lng: 73.0243, label: 'Jodhpur' }
        ];

        // Sort pins by longitude to draw a clean flowing path
        const sortedPins = [...mapPins].sort((a, b) => a.lng - b.lng);
        const routeCoords = sortedPins.map(pin => [pin.lat, pin.lng]);
        routeCoords.push(routeCoords[0]); // Loop back to start
        
        L.polyline(routeCoords, {
          color: '#1e293b',
          weight: 1.5,
          dashArray: '5, 8',
          opacity: 0.9,
          lineJoin: 'round'
        }).addTo(map);

        mapPins.forEach(pin => {
          addCityMarker(pin.lat, pin.lng, pin.label);
        });

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div className={`relative w-full max-w-[650px] aspect-square animate-in fade-in duration-1000 drop-shadow-2xl z-10 ${className || ''}`}>
            <div ref={mapContainerRef} className="absolute inset-0 w-full h-full z-10" />
        </div>
    );
};

export default Map;
