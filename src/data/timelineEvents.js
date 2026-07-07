import eventsData from './events';

// Map of months to display in our timeline
export const timelineMonths = [
  { id: '2025-08', label: 'Aug 2025', title: 'August 2025', summary: 'Nationwide Independence Week meetups across 12 cities.' },
  { id: '2025-09', label: 'Sep 2025', title: 'September 2025', summary: 'Teachers\' Day tribute, Orientation, Mewar Diaries, and Navrang 2.0 Raas celebrations.' },
  { id: '2025-10', label: 'Oct 2025', title: 'October 2025', summary: 'Navratri closures, Kalsubai high peak treks, and online scribble sessions.' },
  { id: '2025-11', label: 'Nov 2025', title: 'November 2025', summary: 'A colorful cultural experience in Rajasthan\'s camel fair and desert dunes.' },
  { id: '2025-12', label: 'Dec 2025', title: 'December 2025', summary: 'Winter expeditions through the mist, living root bridges, and riverside camping.' },
  { id: '2026-01', label: 'Jan 2026', title: 'January 2026', summary: 'Republic Day hikes, snowy Manali mountains, sacred Ganges, and backwater yacht yatras.' },
  { id: '2026-02', label: 'Feb 2026', title: 'February 2026', summary: 'Dense Vikarabad forest treks and misty valley sunrise walking trails.' },
  { id: '2026-03', label: 'Mar 2026', title: 'March 2026', summary: 'Women\'s Day Google Meet championships and royal sisterhood empowerment retreats.' },
  { id: '2026-04', label: 'Apr 2026', title: 'April 2026', summary: 'Refreshing spring escapes to Nainital lake viewpoints and campfire circles.' },
  { id: '2026-05', label: 'May 2026', title: 'May 2026', summary: 'Vast Western Ghats elephant camps, high forts, and kayaking Udupi coastal shores.' },
  { id: '2026-06', label: 'Jun 2026', title: 'June 2026', summary: 'Sun-kissed Goan beach excursions and Portuguese quarter heritage photowalks.' }
];

// Helper to determine the Month ID from a date string (e.g., "6 Aug 2025" -> "2025-08")
export const parseDateToMonthId = (dateStr) => {
  if (!dateStr) return null;
  const lower = dateStr.toLowerCase();
  
  let year = '2025';
  if (lower.includes('2026')) year = '2026';
  
  if (lower.includes('jan')) return `${year}-01`;
  if (lower.includes('feb')) return `${year}-02`;
  if (lower.includes('mar')) return `${year}-03`;
  if (lower.includes('apr')) return `${year}-04`;
  if (lower.includes('may')) return `${year}-05`;
  if (lower.includes('jun')) return `${year}-06`;
  if (lower.includes('jul')) return `${year}-07`;
  if (lower.includes('aug')) return `${year}-08`;
  if (lower.includes('sep')) return `${year}-09`;
  if (lower.includes('oct')) return `${year}-10`;
  if (lower.includes('nov')) return `${year}-11`;
  if (lower.includes('dec')) return `${year}-12`;
  
  return null;
};

// Process and flatten the events data into chronological timeline items
export const getTimelineEvents = () => {
  const items = [];

  eventsData.forEach(mainEvent => {
    // For non-trip main events with sub-events, they can span multiple months.
    // We group their sub-events by month and push a timeline card for each unique month.
    if (mainEvent.subEvents && mainEvent.subEvents.length > 0 && mainEvent.category !== 'trip') {
      const monthsMap = {};
      
      mainEvent.subEvents.forEach(sub => {
        let mId = parseDateToMonthId(sub.date);
        // Hand-correct specific edge cases
        if (sub.id === 'nagpur') mId = '2025-10'; // Nagpur meetup is 8 Oct 2025
        if (sub.id === 'chennai-raas') mId = '2025-10'; // Chennai Raas is 1 Oct 2025
        
        if (mId) {
          if (!monthsMap[mId]) {
            monthsMap[mId] = [];
          }
          monthsMap[mId].push(sub);
        }
      });

      // Push a separate timeline item for each month this event was active
      Object.keys(monthsMap).forEach(mId => {
        const subsInMonth = monthsMap[mId];
        const dateRange = subsInMonth.length === 1 
          ? subsInMonth[0].date 
          : `${subsInMonth[0].date.split(' ')[0]} - ${subsInMonth[subsInMonth.length - 1].date}`;

        items.push({
          id: `${mainEvent.id}-${mId}`, // Unique ID per month instance
          parentEventId: mainEvent.id,
          title: mainEvent.title,
          monthId: mId,
          date: dateRange,
          location: mainEvent.category === 'online' 
            ? `${subsInMonth.length} Online Events` 
            : `${subsInMonth.length} City Meetups`,
          attendees: subsInMonth.reduce((acc, curr) => acc + (curr.attendees || 0), 0) || mainEvent.stats?.participants || 30,
          image: subsInMonth[0].image || mainEvent.image,
          summary: mainEvent.description,
          glimpses: mainEvent.glimpses || [],
          itinerary: [],
          category: mainEvent.category,
          tagline: mainEvent.tagline,
          mainEventTitle: mainEvent.title,
          subEventsCount: subsInMonth.length
        });
      });
    }

    // For standalone trips, we push them once under their specific month
    if (mainEvent.category === 'trip') {
      let monthId = '2025-08';
      let dateRange = '2025–2026';

      if (mainEvent.id === 'shimoga-trip') {
        monthId = '2026-05';
        dateRange = '14-17 May 2026';
      } else if (mainEvent.id === 'mewar-trip') {
        monthId = '2025-09';
        dateRange = '11-14 Sep 2025';
      } else if (mainEvent.id === 'meghalaya-trip') {
        monthId = '2025-10';
        dateRange = '16-19 Oct 2025';
      } else if (mainEvent.id === 'kalsubai-trek') {
        monthId = '2025-10';
        dateRange = '18-19 Oct 2025';
      } else if (mainEvent.id === 'pushkar-trip') {
        monthId = '2025-11';
        dateRange = '2 Nov 2025';
      } else if (mainEvent.id === 'meghalaya-2') {
        monthId = '2025-12';
        dateRange = '25-28 Dec 2025';
      } else if (mainEvent.id === 'kerala-yatra') {
        monthId = '2026-01';
        dateRange = '8-11 Jan 2026';
      } else if (mainEvent.id === 'ananthagiri-trip') {
        monthId = '2026-02';
        dateRange = '7-8 Feb 2026';
      } else if (mainEvent.id === 'girls-getaway') {
        monthId = '2026-03';
        dateRange = '18-21 Mar 2026';
      } else if (mainEvent.id === 'uttarakhand-trip') {
        monthId = '2026-04';
        dateRange = '16-18 Apr 2026';
      } else if (mainEvent.id === 'goa-trip') {
        monthId = '2026-06';
        dateRange = '5-8 Jun 2026';
      }

      items.push({
        id: mainEvent.id,
        parentEventId: mainEvent.id,
        title: mainEvent.title,
        monthId: monthId,
        date: dateRange,
        location: mainEvent.stats?.cities 
          ? `${mainEvent.stats.cities} destinations` 
          : 'Scenic Trails',
        attendees: mainEvent.stats?.participants || 30,
        image: mainEvent.image,
        summary: mainEvent.description,
        glimpses: mainEvent.glimpses || [],
        itinerary: mainEvent.itinerary || [],
        category: mainEvent.category,
        tagline: mainEvent.tagline,
        mainEventTitle: mainEvent.title,
        subEventsCount: mainEvent.subEvents?.length || 1
      });
    }
  });

  // Dynamic sorting: first by monthId chronologically, then by parsing the day from date if possible
  return items.sort((a, b) => {
    // Sort by monthId first
    if (a.monthId !== b.monthId) {
      return a.monthId.localeCompare(b.monthId);
    }
    
    // Sort by day number within the month if available
    const getDay = (dateStr) => {
      const match = dateStr.match(/^\d+/);
      return match ? parseInt(match[0], 10) : 99;
    };
    
    return getDay(a.date) - getDay(b.date);
  });
};

// Groups chronologically sorted events by monthId
export const getEventsByMonth = () => {
  const events = getTimelineEvents();
  const grouped = {};
  
  timelineMonths.forEach(m => {
    grouped[m.id] = events.filter(e => e.monthId === m.id);
  });
  
  return grouped;
};
