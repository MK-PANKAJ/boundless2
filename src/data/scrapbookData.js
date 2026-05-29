export const scrapbookNavLinks = [
  { label: 'Home', active: true },
  { label: 'Events', active: false },
  { label: 'Cities', active: false },
  { label: 'Trips', active: false },
  { label: 'Gallery', active: false },
  { label: 'About Us', active: false }
];

export const scrapbookStats = [
  { icon: 'group', value: '5200+', label: 'Members Connected' },
  { icon: 'diversity_1', value: '1200+', label: 'Female Members' },
  { icon: 'location_on', value: '40+', label: 'Cities Reached' },
  { icon: 'backpack', value: '110+', label: 'Core Members' }, // backpack might need to be customized or use 'work' or a similar icon
  { icon: 'handshake', value: 'Collabs', label: 'Across Societies' }
];

export const scrapbookEvents = [
  {
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400', 
    title: 'Tricolor Trails 2.0',
    subtitle: '12 Cities - Independence Week'
  },
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
    title: 'Trips & Expeditions',
    subtitle: 'Mountains - Lakes - More'
  },
  {
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
    title: 'City Meetups',
    subtitle: 'Connections - Fun - Friends'
  },
  {
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
    title: 'Events & Celebrations',
    subtitle: 'Moments that matter'
  }
];

export const scrapbookTimeline = [
  { month: 'August', text: 'Tricolor Trails 2.0', active: true },
  { month: 'September', text: 'Teachers\' Day & Meetups', active: false },
  { month: 'October', text: 'Orientation Sessions', active: false },
  { month: 'December', text: 'Shimoga Expedition', active: false },
  { month: 'January', text: 'Mewar Diaries', active: false },
  { month: 'Feb - May', text: 'City Meetups & More', active: false },
  { month: 'Upcoming', text: 'Goa Trip & Beyond', active: false }
];

// Approximate coordinates for the static map overlay (percentages: 0 to 100)
// Will need to fine-tune based on map image proportions, but this gives a solid starting map.
export const scrapbookMapCities = [
  { name: 'Delhi', x: 53, y: 30 },
  { name: 'Jaipur', x: 43, y: 40 },
  { name: 'Gorakhpur', x: 70, y: 38 },
  { name: 'Patna', x: 77, y: 42 },
  { name: 'Indore', x: 48, y: 55 },
  { name: 'Nagpur', x: 60, y: 62 },
  { name: 'Kolkata', x: 90, y: 58 },
  { name: 'Mumbai', x: 40, y: 68 },
  { name: 'Bhubaneshwar', x: 80, y: 65 },
  { name: 'Chennai', x: 60, y: 88 },
  { name: 'Jamshedpur', x: 80, y: 52 } 
];
