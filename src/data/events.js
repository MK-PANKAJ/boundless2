const eventsData = [
  {
    id: 'tricolor-trails-2',
    title: 'Tricolor Trails 2.0',
    tagline: 'Independence Week nationwide multi-city series',
    description: 'To celebrate the spirit of Independence Week, Boundless launched Tricolor Trails 2.0 — a nationwide multi-city initiative conducted across 12 cities in 11 states. Held in collaboration with Nallamala and Sundarbans Houses, and supported by the IIT Madras BS Student Activity Fee, the series brought students together through heritage walks, local treks, historical explorations, and community gatherings, proudly culminating in singing the National Anthem at each meetup.',
    image: '/images/events/tricolor-trails2-banner.webp',
    stats: { cities: 12, participants: '300+' },
    category: 'multi-city',
    glimpses: [
      '/images/events/tricolor-trails2-banner.webp',
      '/images/events/tricolor-patna.webp',
      '/images/events/tricolor-delhi.webp',
      '/images/events/tricolor-bengaluru.webp',
    ],
    subEvents: [
      {
        id: 'patna',
        title: 'Patna Meetup',
        date: '6 Aug 2025',
        location: 'Gandhi Maidan → Bodhgaya',
        attendees: 25,
        image: '/images/events/tricolor-patna.webp',
        summary: 'Enthusiastic participation from students across Bihar. The group boarded a bus from Gandhi Maidan, Patna, beginning a lively road trip with icebreakers. The core highlights included a beautiful trek to Dungeshwari Hills to hoist the national flag, followed by spiritual explorations of the Mahabodhi Temple and peaceful monasteries in Bodhgaya.',
        glimpses: [
          '/images/events/tricolor-patna.webp'
        ]
      },
      {
        id: 'nagpur',
        title: 'Nagpur Meetup',
        date: '8 Oct 2025',
        location: 'Zilpi Lake & Siddhivinayak Mandir',
        attendees: 25,
        image: '/images/events/tricolor-nagpur.webp',
        summary: 'A refreshing one-day outing at the scenic Zilpi Lake. Students started the day with a lively bus ride full of music and introductions, followed by darshan at the peaceful Siddhivinayak Mandir. At the lakeside, they enjoyed bonding games and sang the National Anthem surrounded by calm waves.',
        glimpses: ['/images/events/tricolor-nagpur.webp']
      },
      {
        id: 'bhubaneswar',
        title: 'Bhubaneswar Meetup',
        date: '14 Aug 2025',
        location: 'Esplanade Mall, Bhubaneswar',
        attendees: 15,
        image: '/images/events/tricolor-bhubaneswar.webp',
        summary: 'Delayed by heavy rain for a week, the excitement was undiminished when students finally gathered on 14th August. The meetup began with warm introductions and singing the National Anthem. The group then enjoyed refreshments at Burger King, sharing academic experiences and building friendships.',
        glimpses: ['/images/events/tricolor-bhubaneswar.webp']
      },
      {
        id: 'mumbai',
        title: 'Mumbai Meetup',
        date: '14 Aug 2025',
        location: 'Sanjay Gandhi National Park & Kanheri Caves',
        attendees: 25,
        image: '/images/events/tricolor-mumbai.webp',
        summary: 'An adventure combining heritage and nature. The day kicked off with cheerful icebreakers in the lush surrounding of SGNP. The group hiked to the historic Kanheri Caves, sharing stories and taking photos, before participating in a thrilling and competitive treasure hunt that sparked grand teamwork and laughter.',
        glimpses: ['/images/events/tricolor-mumbai.webp']
      },
      {
        id: 'delhi',
        title: 'Delhi Meetup',
        date: '10 Aug 2025',
        location: 'Central Park, Connaught Place',
        attendees: 40,
        image: '/images/events/tricolor-delhi.webp',
        summary: 'A heartwarming gathering of 40 students in the heart of Delhi. Gathered at Central Park, CP, the group introduced themselves and stood together to proud-sing the National Anthem. Afterward, they moved to Haldiram’s for snacks and concluded the day in the park with acoustic music, poetry, and shared stories.',
        glimpses: ['/images/events/tricolor-delhi.webp']
      },
      {
        id: 'bureau',
        title: 'Bengaluru Meetup',
        date: '10 Aug 2025',
        location: 'Bugle Rock Park & Bull Temple',
        attendees: 30,
        image: '/images/events/tricolor-bengaluru.webp',
        summary: 'Rain could not dampen the spirits! The meetup began at Domino’s Basavanagudi with pizza and interactive games like Pass the Story. Once the sky cleared, students walked through Bugle Rock Park, climbed the giant rocks, sang the National Anthem, and concluded with visits to the iconic Bull and Ganapathi Temples.',
        glimpses: ['/images/events/tricolor-bengaluru.webp']
      },
      {
        id: 'kolkata',
        title: 'Kolkata Meetup',
        date: '10 Aug 2025',
        location: 'BITM & Quest Mall',
        attendees: 40,
        image: '/images/events/tricolor-kolkata.webp',
        summary: 'A day combining learning and leisure. The group thoroughly explored the Birla Industrial & Technological Museum, enjoying the interactive 3D and Coal Mine shows. Afterward, they stood outside BITM to sing the National Anthem before heading to Quest Mall Burger King for refreshments and deep conversation.',
        glimpses: ['/images/events/tricolor-kolkata.webp']
      },
      {
        id: 'gorakhpur',
        title: 'Gorakhpur Meetup',
        date: '10 Aug 2025',
        location: 'Gorakhnath Temple & Café',
        attendees: 20,
        image: '/images/events/tricolor-gorakhpur.webp',
        summary: 'Blending spirituality and community bonding. The participants met at the sacred Gorakhnath Temple for introductions and absorbed the serene, calm atmosphere. They then headed to a nearby cozy café for snacks, playing engaging group games and discussing life as IITM students.',
        glimpses: ['/images/events/tricolor-gorakhpur.webp']
      },
      {
        id: 'jamshedpur',
        title: 'Jamshedpur Meetup',
        date: '10 Aug 2025',
        location: 'Tata Steel Zoological Park',
        attendees: 15,
        image: '/images/events/tricolor-jamshedpur.webp',
        summary: 'A joyful meetup surrounded by green landscapes and wildlife. Sponsored by the BS Student Activity Fee, the event opened with warm introductions and singing the National Anthem. The students explored the zoological park, enjoying the peace of nature and planning future community chapter meetups.',
        glimpses: ['/images/events/tricolor-jamshedpur.webp']
      },
      {
        id: 'indore',
        title: 'Indore Meetup',
        date: '13 Aug 2025',
        location: 'Ralamandal Sanctuary → Tincha Waterfall',
        attendees: 25,
        image: '/images/events/tricolor-indore.webp',
        summary: 'A nature getaway starting with Ralamandal Wildlife Sanctuary for introductions and the National Anthem. The group then embarked on a fun road trip to Tincha Waterfall. The misty breeze and flowing waters provided the perfect landscape to relax, chat, and form lasting friendships.',
        glimpses: ['/images/events/tricolor-indore.webp']
      },
      {
        id: 'jaipur',
        title: 'Jaipur Meetup',
        date: '14 Aug 2025',
        location: 'Bhangarh Fort, Rajasthan',
        attendees: 25,
        image: '/images/events/tricolor-jaipur.webp',
        summary: 'An adventure-filled outing starting with a music-filled bus ride. Upon reaching the historic Bhangarh Fort, students were welcomed with traditional dhol beats. They explored the ruins, recorded playful ghost-prank videos, danced, and concluded the day with local Rajasthani food and ice cream.',
        glimpses: ['/images/events/tricolor-jaipur.webp']
      },
      {
        id: 'chennai',
        title: 'Chennai Meetup',
        date: '14 Aug 2025',
        location: 'Dakshina Chitra Museum',
        attendees: 25,
        image: '/images/events/tricolor-chennai.webp',
        summary: 'A culturally enriching experience at Dakshina Chitra. BS students admired the traditional architectural styles and art forms representing South India. After a photogenic walk in the museum, they transitioned to a local café to connect over food and share learning journeys.',
        glimpses: ['/images/events/tricolor-chennai.webp']
      }
    ]
  },
  {
    id: 'navrang-2',
    title: 'Navrang 2.0',
    tagline: 'Pan-India festive Navratri celebrations',
    description: 'Navrang 2.0 marked one of the grandest pan-India celebrations organized by the Boundless Travel Society, bringing the festive spirit of Navratri to 14+ cities across the country between 23 Sept – 1 Oct 2025. Hosted in collaboration with Sundarbans, Nallamala, Corbett, Pravaha, Synapse, and Jarvis societies, over 350+ students dressed in vibrant traditional attire gathered to celebrate culture, dance in energetic Garba circles, and enjoy shared moments of happiness.',
    image: '/images/events/navrang2-cover.webp',
    stats: { cities: 14, participants: '350+' },
    category: 'multi-city',
    glimpses: [
      '/images/events/navrang-mumbai.webp',
      '/images/events/navrang-hyderabad.webp',
      '/images/events/navrang-kolkata.webp',
      '/images/events/navrang-delhi.webp',
    ],
    subEvents: [
      {
        id: 'mumbai-raas',
        title: 'Mumbai Raas',
        date: '23 Sep 2025',
        time: '8:00 PM onwards',
        location: 'Kora Kendra Ground, Borivali',
        attendees: 22,
        image: '/images/events/navrang-mumbai.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'Mumbai set the perfect tone for Navrang 2.0 at Kora Kendra Ground. Students enjoyed warm introductions before diving into massive Garba circles. The energetic festive crowd blended with student enthusiasm, culminating in a beautiful night of photography, laughter, and complimentary goodies.',
        glimpses: ['/images/events/navrang-mumbai.webp']
      },
      {
        id: 'patna-raas',
        title: 'Patna Raas',
        date: '27 Sep 2025',
        time: '7:30 PM onwards',
        location: 'Patliputra Community Hall, Patna',
        attendees: 32,
        image: '/images/events/navrang-patna.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'Patna blended traditional Garba beats with localized Bhojpuri energy at Patliputra Community Hall. Students kicked off with icebreakers, recorded dynamic reels, and danced in a joyous fusion circle. The evening was completed with local snacks, gift hampers, and tight-knit community bonding.',
        glimpses: ['/images/events/navrang-patna.webp']
      },
      {
        id: 'jaipur-raas',
        title: 'Jaipur Raas',
        date: '27 Sep 2025',
        time: '8:00 PM onwards',
        location: 'LBS College, Raja Park, Jaipur',
        attendees: 30,
        image: '/images/events/navrang-jaipur.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'Jaipur glowed with traditional Pink City elegance at LBS College. Dressed in gorgeous ethnic wear, students shared laughs, warm introductions, and synced steps in Garba circles. The evening concluded with delicious food, gift hampers, and deep conversations.',
        glimpses: ['/images/events/navrang-jaipur.webp']
      },
      {
        id: 'hyderabad-raas',
        title: 'Hyderabad Raas',
        date: '27 Sep 2025',
        time: '8:00 PM onwards',
        location: 'SK Creations, Hyderabad',
        attendees: 50,
        image: '/images/events/navrang-hyderabad.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'One of the largest gatherings of Navrang 2.0. Dressed in colorful attire, 50 students lit up the dance floor at SK Creations with high-energy Garba tracks. The room was filled with laughter, followed by delicious refreshments, photo ops, and memorable student interactions.',
        glimpses: ['/images/events/navrang-hyderabad.webp']
      },
      {
        id: 'ahmedabad-escape',
        title: 'Ahmedabad Raas',
        date: '27 Sep 2025',
        time: '8:00 PM onwards',
        location: 'Green Place, Ahmedabad',
        attendees: 7,
        image: '/images/events/navrang-ahmedabad.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'Ahmedabad delivered an intimate, deeply authentic Garba night. Dancing to classic Gujarati tunes at Green Place, the small group created a cozy, warm, and highly engaging vibe, capturing scenic aesthetic photos and bonding deeply over shared stories.',
        glimpses: ['/images/events/navrang-ahmedabad.webp']
      },
      {
        id: 'lucknow-raas',
        title: 'Lucknow Raas',
        date: '28 Sep 2025',
        time: '7:30 PM onwards',
        location: 'Janeshwar Mishra Park, Lucknow',
        attendees: 35,
        image: '/images/events/navrang-lucknow.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'Lucknow brought poise and historical charm as 35 students met at Janeshwar Mishra Park. The lush gardens provided a refreshing backdrop as students danced in organized Garba circles, wrapping up with cozy park chats, traditional snacks, and custom gift boxes.',
        glimpses: ['/images/events/navrang-lucknow.webp']
      },
      {
        id: 'nagpur-raas',
        title: 'Nagpur Raas',
        date: '28 Sep 2025',
        time: '8:00 PM onwards',
        location: 'Trimurti Nagar Durga Pandal, Nagpur',
        attendees: 17,
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'Hosted under the beautiful glowing lights of Trimurti Nagar Durga Pandal, 17 Nagpur students enjoyed a vibrant evening. They recorded candid reels, danced under the pandal canopy, and shared dinner to discuss future local events.',
        glimpses: []
      },
      {
        id: 'delhi-raas',
        title: 'Delhi Raas',
        date: '28 Sep 2025',
        time: '8:00 PM onwards',
        location: 'Pacific Garba Night, Tagore Garden, Delhi',
        attendees: 35,
        image: '/images/events/navrang-delhi.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'Grand celebration under the electrifying neon lights of Pacific Garba Night. Dressed in spectacular traditional attire, students clicked group pictures, swapped study experiences, danced late into the night, and enjoyed street food.',
        glimpses: ['/images/events/navrang-delhi.webp']
      },
      {
        id: 'kolkata-raas',
        title: 'Kolkata Raas',
        date: '29 Sep 2025',
        time: '8:00 PM onwards',
        location: 'Salt Lake IB Block Durga Puja, Kolkata',
        attendees: 30,
        image: '/images/events/navrang-kolkata.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'A magnificent cultural fusion. The event began with a beautiful guided tour of the massive Salt Lake pandal, admiring traditional clay art. Soon, the group transitioned into Garba mode, dancing in the lit courtyard and sharing festive sweets.',
        glimpses: ['/images/events/navrang-kolkata.webp']
      },
      {
        id: 'gorakhpur-raas',
        title: 'Gorakhpur Raas',
        date: '27 Sep 2025',
        time: '8:00 PM onwards',
        location: 'Maharana Pratap Inter College, Gorakhpur',
        attendees: 15,
        image: '/images/events/navrang-gorakhpur.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'A cozy, heartfelt meetup of 15 students. They gathered in the college grounds, kicking off with lively introductions and dhol beats before forming simple, synchronized dance circles. Wrapped up with shared hampers and home-style sweets.',
        glimpses: ['/images/events/navrang-gorakhpur.webp']
      },
      {
        id: 'jamshedpur-raas',
        title: 'Jamshedpur Raas',
        date: '28 Sep 2025',
        time: '8:00 PM onwards',
        location: 'Kasidih Durga Puja Pandal, Jamshedpur',
        attendees: 11,
        image: '/images/events/navrang-jamshedpur.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'Under the beautiful canopy of Kasidih Durga Puja Pandal, students gathered for light-hearted chats. They danced Garba to traditional tracks, took festive photographs, and bonded over local street food.',
        glimpses: ['/images/events/navrang-jamshedpur.webp']
      },
      {
        id: 'indore-raas',
        title: 'Indore Raas',
        date: '28 Sep 2025',
        time: '8:00 PM onwards',
        location: 'Sheraton Grand Palace, Indore',
        attendees: 18,
        image: '/images/events/navrang-indore.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'A premium, late-night festive celebration. Gathering at the grand Sheraton Palace, the group shared a luxurious dinner, followed by dynamic and highly rhythmic Garba circles. The elegant setup made it a truly memorable night.',
        glimpses: ['/images/events/navrang-indore.webp']
      },
      {
        id: 'chennai-raas',
        title: 'Chennai Raas',
        date: '1 Oct 2025',
        time: '10:00 PM onwards',
        location: 'Ampa Skyone Mall, Chennai',
        attendees: 11,
        image: '/images/events/navrang-chennai.webp',
        associations: 'Boundless x Sundarbans x Nallamala x Corbett x Pravaha x Synapse x Jarvis',
        summary: 'The perfect closing chapter to Navrang 2.0. Eleven Chennai-based students gathered at Ampa Skyone Mall, opening with casual café chats and creative photos. The Garba session, though intimate, radiated high energy and concluded with festive goodbyes.',
        glimpses: ['/images/events/navrang-chennai.webp']
      }
    ]
  },
  {
    id: 'tricolor-trails-3',
    title: 'Tricolor Trails 3.0',
    tagline: 'Republic Day nationwide celebration series',
    description: 'To commemorate the 77th Republic Day of India, Boundless, in collaboration with Nallamala House, launched Tricolor Trails 3.0. This massive nationwide series of offline meetups and adventure trips connected BS students in major cities and remote landscapes across North, South, East, and West India. Each event was designed to celebrate patriotism, foster student friendships outside classrooms, and reflect the rich cultural diversity of India, concluding with standing for the National Anthem.',
    image: '/images/events/tricolor-trails3-cover.webp',
    stats: { cities: 12, participants: '250+' },
    category: 'multi-city',
    glimpses: [
      '/images/events/tt3-kolkata.webp',
      '/images/events/tt3-himachal.webp',
      '/images/events/tt3-vrindavan.webp',
      '/images/events/tt3-chennai.webp',
    ],
    subEvents: [
      {
        id: 'kanpur',
        title: 'Kanpur Diaries',
        date: '10 Jan 2026 (Saturday)',
        location: 'Allen Forest Zoo, Kanpur',
        attendees: 18,
        image: '/images/events/tt3-kanpur.webp',
        summary: 'Gathered at the historic Allen Forest Zoo under pleasant winter skies. 18 students began with energetic introductions, walked through the zoological paths, played bonding games, shared home-cooked snacks, and proudly concluded by singing the National Anthem.',
        glimpses: ['/images/events/tt3-kanpur.webp']
      },
      {
        id: 'siliguri',
        title: 'Siliguri Diaries',
        date: '21 Jan 2026 (Wednesday)',
        location: 'Coronation Bridge & EWAM Monastery',
        attendees: 8,
        image: '/images/events/tt3-siliguri.webp',
        summary: 'An intimate, serene meetup in the hills. Eight students explored the Coronation Bridge and visited the peaceful EWAM India Buddhist Monastery. The calm environment was perfect for academic discussions, followed by lunch and singing the National Anthem.',
        glimpses: ['/images/events/tt3-siliguri.webp']
      },
      {
        id: 'kolkata-diaries',
        title: 'Kolkata Diaries',
        date: '24 Jan 2026 (Sunday)',
        location: 'Indian Museum, Kolkata',
        attendees: 31,
        image: '/images/events/tt3-kolkata.webp',
        summary: 'A day packed with cultural learning. 31 students explored the galleries of the iconic Indian Museum, viewing ancient statues, historical remains, and fossils. Over a cozy lunch, they connected deeply and stood for the National Anthem in the museum courtyard.',
        glimpses: ['/images/events/tt3-kolkata.webp']
      },
      {
        id: 'chennai-diaries',
        title: 'Chennai Diaries',
        date: '25 Jan 2026 (Sunday)',
        location: 'Arignar Anna Zoological Park (Vandalur)',
        attendees: 23,
        image: '/images/events/tt3-chennai.webp',
        summary: 'A dynamic outdoor meetup at Vandalur Zoo. 23 students started with early introductions before embarking on a highly fun cycling session through green pathways. The day finished with a delicious pizza gathering and standing together to sing the National Anthem.',
        glimpses: ['/images/events/tt3-chennai.webp']
      },
      {
        id: 'rishikesh',
        title: 'Rishikesh Diaries',
        date: '25 Jan 2026 (Sunday)',
        location: 'Janki Setu & Holy Ganges',
        attendees: 19,
        image: '/images/events/tt3-rishikesh.webp',
        summary: 'A soulful gathering along the sacred Ganges. 19 students shared stories, visited riverside temples, and walked across the architectural marvel Janki Setu. They concluded this serene experience by standing together to proud-sing the National Anthem.',
        glimpses: ['/images/events/tt3-rishikesh.webp']
      },
      {
        id: 'vrindavan',
        title: 'Vrindavan Diaries',
        date: '10-11 Jan 2026 (Saturday-Sunday)',
        location: 'Mathura & Prem Mandir, Vrindavan',
        attendees: 18,
        image: '/images/events/tt3-vrindavan.webp',
        summary: 'A spiritually enriching 2-day trip. Dressed in traditional clothes, 18 students began with the National Anthem in Mathura. The main highlight was visiting the grand Prem Mandir at night, illuminated in colorful lights, before a peaceful dinner near the ghats.',
        glimpses: ['/images/events/tt3-vrindavan.webp']
      },
      {
        id: 'parasnath',
        title: 'Parasnath Diaries',
        date: '10-11 Jan 2026 (Saturday-Sunday)',
        location: 'Parasnath Trek, Madhuban, Jharkhand',
        attendees: 13,
        image: '/images/events/tt3-parasnath.webp',
        summary: 'A challenging, overnight mountain trek. 13 participants assembled late at night at Madhuban and hiked under a starry sky, arriving at the summit just in time for a beautiful sunrise over Parasnath Temple. Completed with a celebratory lunch.',
        glimpses: ['/images/events/tt3-parasnath.webp']
      },
      {
        id: 'coimbatore',
        title: 'Coimbatore Diaries',
        date: '26 Jan 2026 (Monday)',
        location: 'Mettupalayam → Ooty Hill Station',
        attendees: 10,
        image: '/images/events/tt3-coimbatore.webp',
        summary: 'An adventure in the "Queen of Hill Stations." Ten students met at Mettupalayam and drove up the misty hills of Ooty. They explored the surroundings, shared a warm lunch, and stood together in the cool mountain air to sing the National Anthem.',
        glimpses: ['/images/events/tt3-coimbatore.webp']
      },
      {
        id: 'rajgir',
        title: 'Rajgir & Nalanda Diaries',
        date: '18 Jan 2026 (Sunday)',
        location: 'Vishwa Shanti Stupa & Nalanda Ruins',
        attendees: 25,
        image: '/images/events/tt3-rajgir.webp',
        summary: 'A journey through history and peace. 25 students gathered in Patna and traveled to Rajgir to hike up the Vishwa Shanti Stupa. They then visited the historical ruins of Nalanda University, enjoying an educational exploration and a pride-filled anthem moment.',
        glimpses: ['/images/events/tt3-rajgir.webp']
      },
      {
        id: 'mahabaleshwar',
        title: 'Mahabaleshwar Diaries',
        date: '18-20 Jan 2026 (Sunday-Tuesday)',
        location: 'Mahabaleshwar & Lingmala Trek',
        attendees: 16,
        image: '/images/events/tt3-mahabaleshwar.webp',
        summary: 'A scenic 3-day trip into the foggy Western Ghats. 16 students experienced early morning forest treks, stunning panoramic views, and bonded over a sponsored group lunch and a moving National Anthem moment together.',
        glimpses: ['/images/events/tt3-mahabaleshwar.webp']
      },
      {
        id: 'udaipur-diaries',
        title: 'Udaipur Diaries',
        date: '18-20 Jan 2026 (Sunday-Tuesday)',
        location: 'Ambrai Ghat, City Palace & Mount Abu',
        attendees: 25,
        image: '/images/events/tt3-udaipur.webp',
        summary: 'A magnificent 3-day royal getaway. 25 students met at Ambrai Ghat, explored the grand courtyards of City Palace, stood for the National Anthem, shopped in the local markets, and finished with a scenic drive and trek up Mount Abu.',
        glimpses: ['/images/events/tt3-udaipur.webp']
      },
      {
        id: 'himachal',
        title: 'Himachal Diaries',
        date: '29 Jan – 1 Feb 2026 (Thursday-Sunday)',
        location: 'Manali, Solang Valley, Kasol & Kullu',
        attendees: 40,
        image: '/images/events/tt3-himachal.webp',
        summary: 'An incredible winter trip in collaboration with Synapse. 40 students explored Manali\'s snow-capped mountains, experienced thrilling adventures in Solang Valley, hiked quiet trails in Kasol, and bonded around the Kullu river.',
        glimpses: ['/images/events/tt3-himachal.webp']
      },
      {
        id: 'ananthagiri-diaries',
        title: 'Ananthagiri Hills Diaries',
        date: '7-8 Feb 2026 (Saturday-Sunday)',
        location: 'Ananthagiri Hills, Vikarabad',
        attendees: 14,
        image: '/images/events/tt3-ananthagiri.webp',
        summary: 'As part of Tricolor Trails 3.0, the Boundless Chapter organized Ananthagiri Hills Diaries, a student trip that brought BS students together for an adventurous, refreshing, and truly unforgettable experience. Ventured through dense forest trails, walking together along scenic paths, building teamwork, sharing laughter, and appreciating the tranquil landscape.',
        glimpses: ['/images/events/tt3-ananthagiri.webp']
      }
    ]
  },
  {
    id: 'shimoga-trip',
    title: 'Shimoga Expedition',
    tagline: 'Expedition through the Western Ghats & Udupi Coast',
    description: 'This legendary three-day expedition through Karnataka offered 30 travelers a perfect blend of rich nature, mountain adventure, coastal culture, and spiritualism. The journey took explorers from the deep elephant camps of Shimoga to the highest peak treks in the Western Ghats, culminating along the golden coastal shores of Udupi.',
    image: '/images/events/shimoga-cover.webp',
    stats: { cities: 4, participants: 30 },
    category: 'trip',
    date: '5-7 Sep 2025',
    glimpses: [
      '/images/events/shimoga-trip.webp',
      '/images/events/shimoga-cover.webp',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Wildlife, Poetry, and History',
        description: 'Began with a close-up encounter with rescued gentle giants at the Sakrebyle Elephant Camp. The group then traveled to Kuppalli to explore Kavimane, the heritage museum home of poet Kuvempu, and enjoyed lunch at the rocky Kavishaila monument. Concluded with a sunset trek atop the historic Nagara Fort ruins.'
      },
      {
        day: 'Day 2',
        title: 'Mountain Peaks & Campfires',
        description: 'Dedicated to the raw beauty of the Western Ghats. Students boarded rugged off-road jeeps to climb the steep terrain of Kodachadri, hiking to the panoramic summit. After a traditional homestay lunch, they hiked to a hidden forest waterfall, ending the night with a warm campfire under a starry sky.'
      },
      {
        day: 'Day 3',
        title: 'Temples, Kayaking & Coastal Vistas',
        description: 'Began with darshan at the holy Mookambika Temple in Kollur. Traveled to Maravanthe Beach to witness the sea on one side and river on the other, enjoyed a thrilling kayaking session in Saligrama, and wrapped up with sunset, chats, and coastal food at Malpe Beach in Udupi.'
      }
    ],
    subEvents: []
  },
  {
    id: 'mewar-trip',
    title: 'Mewar Diaries',
    tagline: 'Royal history, lakeside luxury, and high-altitude sunsets',
    description: 'A grand four-day royal expedition exploring Udaipur (the City of Lakes), Mount Abu (Rajasthan\'s scenic hill station), and the historic Chittorgarh. The trip, themed "Padharo Mhare Desh," provided 30 participants an immersive educational and cultural experience, highlighting architectural marvels, spiritual temples, traditional dances, and lakeside pool bonding sessions.',
    image: '/images/events/mewar-cover.webp',
    stats: { cities: 3, participants: 'Details not specified' },
    category: 'trip',
    date: '12th - 15th September 2025',
    glimpses: [
      '/images/events/mewar-trip.webp',
      '/images/events/mewar-cover.webp',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Grand Arrival in Udaipur',
        description: 'Immersed in Rajput history at the majestic City Palace and Jagdish Temple. Enjoyed a lunch overlooking Lake Pichola, took a boat ride to Jag Mandir, caught a folk dance show at Bagore Ki Haveli, and bonded during a memorable evening rooftop pool party.'
      },
      {
        day: 'Day 2',
        title: 'Lakeside Leisure & Monsoon Palace Sunset',
        description: 'Walked through Saheliyon Ki Bari gardens and फतेह सागर (Fateh Sagar) Lake with a warm coffee at Jheel. Drove up the Aravalli hills to the high-altitude Sajjangarh Fort (Monsoon Palace) to catch an unforgettable panoramic sunset over Udaipur, concluding with souvenir shopping at Hathi Pol.'
      },
      {
        day: 'Day 3',
        title: 'Aravalli Hikes in Mount Abu',
        description: 'Scenic drive to Rajasthan\'s only hill station. Trekked to the Aravalli\'s highest peak, Guru Shikhar, enjoying local Rajasthani Dal Baati Churma. Concluded with boat rides and an elegant sunset walk around Nakki Lake and local bazaar shopping.'
      },
      {
        day: 'Day 4',
        title: 'Chittorgarh: Bravery & Departure',
        description: 'Dedicated to the grand UNESCO-listed Chittorgarh Fort. Explored the soaring Vijay Stambh, Kirti Stambh, and historic Padmini Palace. Made a brief afternoon wildlife sighting at Sita Mata Sanctuary before heading to Chittaurgarh Junction for departure.'
      }
    ],
    subEvents: [
      {
        id: 'udaipur-meetup',
        title: 'Udaipur Meetup',
        date: '13 Sep 2025',
        location: 'Sajjangarh Fort, Udaipur',
        attendees: 30,
        image: '/images/events/udaipur-meetup.webp',
        summary: 'Boundless, in collaboration with Nallamala, organized a special meetup at the iconic Sajjangarh Fort (Monsoon Palace) in Udaipur on 13th September as a key highlight of the Mewar Trip. Set atop the Aravalli hills, the location offered an inspiring blend of scenic beauty, calm winds, and panoramic views-making it a perfect venue for community bonding. The meetup began at 3:00 PM as the group reached the fort viewpoint. Fun group activities, storytelling moments, and light-hearted interactions made the session highly memorable.',
        glimpses: ['/images/events/udaipur-meetup.webp', '/images/events/udaipur-meetup-cover.webp']
      }
    ]
  },
  {
    id: 'meghalaya-trip',
    title: 'Meghalaya Diaries 1.0',
    tagline: 'Misty hills, living root bridges, and turquoise waters',
    description: 'A magical four-day expedition winding through the Khasi Hills, roaring plunge waterfalls, limestone caverns, and clean forest villages of Meghalaya. Thirty students started as strangers at Guwahati station and returned as a boundless family, carrying memories of trekking under the rain and gliding across crystal rivers.',
    image: '/images/events/meghalaya1-cover.webp',
    stats: { cities: 4, participants: 30 },
    category: 'trip',
    date: '28 Nov 2025-01 Dec 2025',
    glimpses: [
      '/images/events/meghalaya1-cover.webp',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Lakes, Cherry Blossoms & Vast Canyons',
        description: 'Began at Umiam Lake for a peaceful lakeside breakfast. Walked around Ward\'s Lake in Shillong to admire pink cherry blossoms, climbed to Shillong Peak, and spent the late afternoon at Laitlum Canyon watching majestic clouds drift through steep cliffs before checking in Sohra.'
      },
      {
        day: 'Day 2',
        title: 'Plunge Waterfalls & Limestone Caverns',
        description: 'Visited the towering Nohkalikai Falls viewpoint. Trekked down the steep forest path to the hidden, multi-tiered Wei Sawdong Falls for a dip, explored limestone formations in Arwah Caves, and finished at Seven Sisters Falls with an evening bonfire story circle.'
      },
      {
        day: 'Day 3',
        title: 'Crystal Rivers & Ancient Living Bridges',
        description: 'Drove through Khasi Hills to Dawki to glide on the famous glass-like Umngot River. Explored the ancient Riwai Living Root Bridge, built over generations, and spent the afternoon in Mawlynnong (Asia\'s cleanest village) to enjoy local Khasi hospitality.'
      },
      {
        day: 'Day 4',
        title: 'The Final Cascade',
        description: 'Hiked deep to the gorgeous Phe Phe Falls, sitting by the quiet turquoise pool to reflect on the trip. Shared a lakeside picnic lunch before returning to Guwahati station for warm departures.'
      }
    ],
    subEvents: []
  },
  {
    id: 'meghalaya-2',
    title: 'Meghalaya Diaries 2.0',
    tagline: 'Winter expedition through the clouds',
    description: 'A spectacular winter edition of our Meghalaya diaries held between 25–28 December. With 20 adventurous students, the trip focused on cool winter mountain hikes, self-cooking outdoor sessions, exploring deep limestone caves, and sleeping under canvas inside the Snongpdeng riverside campsite in Dawki.',
    image: '/images/events/meghalaya2-cover.webp',
    stats: { cities: 4, participants: 20 },
    category: 'trip',
    date: '25-28 Dec 2025',
    exclusions: ['Lunch meals', 'Entry fees', 'Optional activity charges', 'Personal expenses'],
    glimpses: [
      '/images/events/meghalaya2-trip.webp',
      '/images/events/meghalaya2-cover.webp',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Umiam Lake & Self-Cooking Dinners',
        description: 'Met at Guwahati, stopping at the scenic Umiam Lake. Visited Shillong Peak and Laitlum Canyon for sunset. Upon reaching Sohra in the evening, the group bonded during a highly interactive self-cooking dinner session.'
      },
      {
        day: 'Day 2',
        title: 'Waterfalls & Arwah Caves',
        description: 'Spent the day exploring Sohra\'s cascades: Nohkalikai viewpoint, trekking to Wei Sawdong multi-tiered falls, swimming at Lyngksiar waterfall, exploring limestone passages of Mawsmai Caves, and stopping at Seven Sisters.'
      },
      {
        day: 'Day 3',
        title: 'Root Bridges & Dawki Riverside Camping',
        description: 'Walked across the Riwai Living Root Bridge and had local meals in Mawlynnong. Traveled past the Indo-Bangladesh border to Dawki to enjoy boating on the crystal Umngot River, staying overnight at Snongpdeng riverside camps.'
      },
      {
        day: 'Day 4',
        title: 'Cliff Jumping & Departures',
        description: 'Started early with sunrise from the Snongpdeng suspension bridge. Students did optional kayaking, boating, and cliff jumping in the river, returning to Guwahati after lunch.'
      }
    ],
    subEvents: []
  },
  {
    id: 'kerala-yatra',
    title: 'Kerala Yatra (Varkala Diaries)',
    tagline: 'Backwaters, giant sculptures, and coastal cliffs of Varkala',
    description: 'An unforgettable 4-day trip exploring the diverse heritage, tranquil backwaters, and grand cliffside beaches of "God\'s Own Country" between 8–11 January 2026. Dressed in traditional attire, 23 students sailed on luxury houseboats in Alleppey, explored historical Fort Kochi, hiked the giant bird sculpture at Jatayu, and watched golden sunsets over the Arabian Sea from Varkala Cliff.',
    image: '/images/events/kerala-cover.webp',
    stats: { cities: 4, participants: 23 },
    category: 'trip',
    date: '8 – 11 January 2026',
    cost: '₹5300 per person',
    exclusions: ['Lunch meals', 'Entry fees for attractions', 'Optional activity charges', 'Personal expenses and shopping'],
    glimpses: [
      '/images/events/kerala-cover.webp',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Kochi: Colonial Heritage & Water Metro',
        description: 'Arrived in Kochi to explore Fort Kochi, Chinese fishing nets at Vasco Square, and Jew Street antique shops. Rode the futuristic Kochi Water Metro and enjoyed a sunset walk along Marine Drive.'
      },
      {
        day: 'Day 2',
        title: 'Alleppey: Luxury Houseboat Cruise',
        description: 'Traveled to Alleppey and checked into a traditional Kerala houseboat. Cruised the vast Vembanad Lake and narrow canals, enjoying authentic Kerala meals served onboard. Visited Alleppey Beach at sunset before driving to Kollam.'
      },
      {
        day: 'Day 3',
        title: 'Jatayu Earth Centre & Varkala Cliffs',
        description: 'Hiked to Jatayu Earth\'s Centre to marvel at the world\'s largest bird sculpture. Drove to Varkala to relax on Papanasam Beach, concluding with dinner and shopping at the vibrant cliffside cafés.'
      },
      {
        day: 'Day 4',
        title: 'Varkala: Temples, Aquariums & Departure',
        description: 'Visited the ancient Janardhana Swami Temple and took spectacular photos at Varkala Cliff overlooking the Arabian Sea. Visited the local aquarium before departures.'
      }
    ],
    subEvents: []
  },
  {
    id: 'girls-getaway',
    title: 'Rajasthan Girls Getaway',
    tagline: 'The very first all-girls trip — freedom, friendship, and royal Rajasthan',
    description: 'Boundless proudly organized Rajasthan Girls Getaway, the very first all-girls trip hosted by the community — a milestone that became one of the biggest and most beautiful achievements in Boundless history. More than just a trip, it was a celebration of freedom, friendship, confidence, and unforgettable memories across Jaipur and Jodhpur between 18–21 March 2026. Filled with laughter, late-night conversations, vibrant culture, and endless energy, the getaway quickly became known as one of the best trips Boundless has ever organized.',
    image: '/images/events/girls-getaway.webp',
    stats: { cities: 2, participants: 14 },
    category: 'trip',
    date: '18-21 March 2026',
    glimpses: [
      '/images/events/girls-getaway.webp',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Jaipur: Heritage & First Impressions',
        description: 'The journey began in Jaipur with check-in and group bonding. The first evening included visits to the iconic Hawa Mahal and Jantar Mantar, where participants admired the beautiful architecture, clicked endless photographs, and experienced the lively energy of Jaipur. Walking through colorful streets together instantly brought warmth and bonding within the group.'
      },
      {
        day: 'Day 2',
        title: 'Forts, Views & Royal Rajasthan',
        description: 'A full day exploring Rajasthan\'s royal beauty. The group visited Jal Mahal, admired the grandeur of Amber Fort, and explored the scenic surroundings of Jaipur. The day\'s highlight was Nahargarh Fort, where breathtaking panoramic sunset views became one of the most beautiful moments of the trip. The evening ended with a visit to Albert Hall Museum followed by dinner together.'
      },
      {
        day: 'Day 3',
        title: 'Journey to Jodhpur & Blue City Vibes',
        description: 'The group checked out from Jaipur and journeyed to Jodhpur — the bus ride itself became legendary, filled with music, dancing, storytelling, and nonstop chaos. After check-in, participants explored Toorji Ka Jhalra, the iconic Clock Tower, and shopped at the vibrant Sadar Market. Local food, colorful shops, and endless conversations made the evening unforgettable.'
      },
      {
        day: 'Day 4',
        title: 'Mehrangarh & Farewell',
        description: 'The final day began with a visit to the majestic Mehrangarh Fort, walking through historic corridors and admiring panoramic city views. The group also visited Jaswant Thada and the Umaid Bhawan Palace Museum. As evening approached, participants gathered near the sunset viewpoint around Mehrangarh Fort for their final moments together before the trip concluded.'
      }
    ],
    subEvents: []
  },
  {
    id: 'kalsubai-trek',
    title: 'Kalsubai Peak Trek (Kalsubai Diaries)',
    tagline: 'Climbing under the stars to Maharashtra\'s highest point',
    description: 'What started as a simple meetup for Boundless Mumbai Chapter students turned into a legendary overnight trek to Kalsubai Peak, the highest point in Maharashtra (1,646 meters). Supported by the IITM Student Activity Fee, 17 participants hiked under a starry night sky, slept in mountain tents, and witnessed a breathtaking golden sunrise over the Sahyadri range.',
    image: '/images/events/kalsubai-cover.webp',
    stats: { cities: 1, participants: 17 },
    category: 'trip',
    date: '5 Dec 2025',
    glimpses: [
      '/images/events/kalsubai-cover.webp',
    ],
    itinerary: [
      {
        day: 'Overnight',
        title: 'Trekking Under the Stars',
        description: 'Met at Thane/Kasara Station and traveled by local bus to the base village. Began the steep climb around sunset, ascending through forest patches, rocky ladders, and metal stairs under a starry sky. Reached the high campsite for campfire stories, songs, and stargazing.'
      },
      {
        day: 'Morning',
        title: 'Magical Golden Summit Sunrise',
        description: 'Woke up before dawn to complete the final climb. Stood at Kalsubai Summit to witness the spectacular sunrise painting the Sahyadri range in gold. Walked down to the base for hot village breakfast, returning to Kasara Station.'
      }
    ],
    subEvents: []
  },
  {
    id: 'interactive-online',
    title: 'Online Theme Events',
    tagline: 'Fostering gratitude, creativity, and empowerment virtually',
    description: 'Fostering deep community bonds even across distance, Boundless Travel Society hosted a series of highly successful virtual interactive events on Google Meet. Ranging from national tributes to teachers, structural orientation sessions, creative scribble nights, and national women\'s championships, these sessions connected hundreds of students from their homes.',
    image: '/images/events/teachers-day.webp',
    stats: { cities: 'Pan-India', participants: '300+' },
    category: 'online',
    glimpses: ['/images/events/teachers-day.webp', '/images/events/scribble-night.webp', '/images/events/womens-day.webp'],
    subEvents: [
      {
        id: 'teachers-day',
        title: 'Teachers\' Day Tribute',
        date: '5 Sep 2025',
        location: 'Online Google Meet',
        attendees: 120,
        image: '/images/events/teachers-day.webp',
        summary: 'A heartfelt session with Beloved Kothai Ma\'am, celebrated by 120+ students. The event transformed into a warm evening of introductions, gratitude wishes in the chat, student-led tribute messages, an interactive Q&A, and a custom gratitude montage prepared by the core team.',
        glimpses: ['/images/events/teachers-day.webp']
      },
      {
        id: 'orientation',
        title: 'Society Orientation',
        date: '7 Sep 2025',
        location: 'Online Google Meet',
        attendees: 120,
        image: '/images/events/teachers-day.webp',
        summary: 'Introduced the structure of the Boundless Travel Society to new students. The core members explained the chapter layout, upcoming plans for trips, and instructions on how to leverage the Student Activity Fee to host city meetups.'
      },
      {
        id: 'scribble-night',
        title: 'Girls Scribble Night',
        date: '12 Oct 2025',
        location: 'Online Google Meet',
        attendees: 15,
        image: '/images/events/scribble-night.webp',
        summary: 'An engaging, girls-only creative session. Participants enjoyed themed drawing challenges, rapid-fire doodling, and shared artwork on screen. The relaxed, comfortable environment encouraged free expression, laughter, and personal bonding.',
        glimpses: ['/images/events/scribble-night.webp']
      },
      {
        id: 'womens-day',
        title: 'Women\'s Day Championship',
        date: '7-8 Mar 2026',
        location: 'Online Google Meet',
        attendees: 50,
        image: '/images/events/womens-day.webp',
        summary: 'Boundless celebrated Women\'s Day 2026 with great enthusiasm through the Women\'s Day Championship, an engaging interactive online event on Google Meet that brought together 50+ BS students from across the country. The session began with a warm welcome, setting a positive and inclusive tone. Participants actively engaged in a variety of fun and interactive activities that encouraged creativity, collaboration, and expression. The competitive yet friendly environment kept energy high, with students showcasing their talents and ideas. The event featured interactive competitions, participant engagement through discussions and chats, and a celebration of creativity, talent, and expression. The chat box was filled with encouragement, appreciation, and lively interactions, making the experience feel warm and connected despite being virtual.',
        glimpses: []
      },
      {
        id: 'the-pink-verdict',
        title: 'The Pink Verdict',
        date: '30 May 2026',
        location: 'Online Google Meet',
        attendees: 50,
        image: '/images/events/pink-verdict.webp',
        summary: 'Boundless organized The Pink Verdict on 30th May, an exciting girls-only online event filled with debates, opinions, laughter, and creativity. Designed as an interactive "Guilty or Not Guilty" game, the event brought together participants for lively debates, ending with a chill session of singing, dancing, poetry, and spontaneous performances.',
      },
    ]
  },
  {
    id: 'pushkar-trip',
    title: 'Pushkar Mela Trip',
    tagline: 'Vibrant colors, desert dunes, and sunset ghats of Pushkar Mela',
    description: 'The Pushkar Meetup, held on 2nd November 2025, was one of the most vibrant one-day trips organized by Boundless in collaboration with Nallamala House. With 30 enthusiastic participants joining the journey, the meetup turned into a perfect blend of culture, exploration, bonding, and unforgettable experiences at the iconic Pushkar Mela. Students explored the fairgrounds, visited Pushkar Lake & serene ghats, local handicraft bazaars, and folk performances, concluding with a peaceful sunset near the ghats.',
    image: '/images/events/pushkar-cover.webp',
    stats: { cities: 1, participants: 30 },
    category: 'trip',
    glimpses: ['/images/events/pushkar-cover.webp'],
    itinerary: [
      {
        day: '11:00 AM',
        title: 'Assembly & Fairground Exploration',
        description: 'The group assembled at Pushkar Mela, greeted by the colorful festival backdrop, lively sounds, and decorated camel fair stalls.'
      },
      {
        day: '1:00 PM',
        title: 'Pushkar Lake & Bazaars',
        description: 'Visited the serene Pushkar Lake & ghats for quiet views and photographs, followed by a walk through local handicraft bazaars to explore traditional Rajasthani art.'
      },
      {
        day: '3:00 PM',
        title: 'Cultural Shows & Reflections',
        description: 'Immersed in Rajasthani folk dances, traditional camel parades, and held a circle of reflection with 30 members of the IITM BS community, concluding with a scenic sunset.'
      }
    ],
    subEvents: []
  },

  {
    id: 'uttarakhand-trip',
    title: 'Uttarakhand Trip',
    tagline: 'A refreshing mountain escape through the peaceful hills of Devbhoomi Nainital',
    description: 'Boundless organized the Uttarakhand Trip, a refreshing mountain escape that brought BS students together for a beautiful experience amidst the peaceful hills of Nainital, in the heart of Devbhoomi. Filled with scenic landscapes, calm lakes, fun adventures, and meaningful connections, the trip became a perfect blend of relaxation, exploration, and unforgettable memories between 16–18 April 2026.',
    image: '/images/events/uttarakhand-cover.webp',
    stats: { cities: 1, participants: 20 },
    category: 'trip',
    date: '16-18 April 2026',
    glimpses: ['/images/events/uttarakhand-cover.webp'],
    itinerary: [
      {
        day: 'Day 0',
        title: 'Arrival at Nainital',
        description: 'Participants arrived in Nainital from different cities, carrying excitement and anticipation for the days ahead. The cool mountain breeze, winding hill roads, and mist-covered views instantly created a refreshing atmosphere. As everyone gathered at the hotel, introductions slowly turned into conversations, laughter, and instant bonding within the group.'
      },
      {
        day: 'Day 1',
        title: 'Exploring Nainital',
        description: 'The first full day was dedicated to exploring the beauty and charm of Nainital. The group visited the peaceful Naina Devi Temple, followed by Eco Cave Gardens and the famous Nainital Zoo. In the evening, participants enjoyed boating at Naini Lake surrounded by calm waters and beautiful sunset views. Later, the group explored Mall Road, trying street food, café hopping, and enjoying fun late-night walks together.'
      },
      {
        day: 'Day 2',
        title: 'Lakes, Peaks & Devbhoomi Vibes',
        description: 'Participants visited the famous Kainchi Dham, where the calm spiritual atmosphere added a unique experience. The group then explored Bhimtal Lake and continued toward Sattal for trekking and nature exploration. Surrounded by forests and mountain views, the trek became one of the highlights of the trip. The journey further continued toward Naina Peak for stunning panoramic views of the hills and valleys.'
      },
      {
        day: 'Day 3',
        title: 'Farewell to the Hills',
        description: 'Participants spent their final moments together capturing photographs, revisiting memories, and soaking in the peaceful beauty of Uttarakhand one last time. The return journey felt emotional yet fulfilling, filled with sleepy smiles, laughter, and reflections on the unforgettable moments shared throughout the trip.'
      }
    ],
    subEvents: []
  },
  {
    id: 'gaya-escape',
    title: 'Gaya Escape',
    tagline: 'A memorable journey through the cultural and spiritual beauty of Gaya Ji',
    description: 'Boundless organized Gaya Escape on 22nd March, a refreshing mini trip/meetup that brought BS students together for a memorable journey through the cultural and spiritual beauty of Gaya Ji. The journey began around 8:00 AM as participants gathered in Patna with excitement and enthusiasm. Travel itself became lively and enjoyable, filled with introductions, music, conversations, and bonding. Upon reaching Gaya Ji, the group explored iconic locations including the famous Mahabodhi Temple, Gaya Temple, and various nearby attractions. Walking through the streets, exploring temples, trying local food, capturing photographs, and spending time together made the meetup feel much more than just a casual gathering. The peaceful environment, combined with the cheerful energy of the group, created a perfect balance of relaxation, exploration, and togetherness.',
    image: '/images/events/gaya-escape.webp',
    stats: { cities: 1, participants: 25 },
    category: 'meetup',
    date: '22 March 2026',
    glimpses: [],
    itinerary: [],
    subEvents: []
  },
  {
    id: 'ahmedabad-escape-may',
    title: 'Ahmedabad Escape',
    tagline: 'Exploration, bonding, and exciting experiences at Science City',
    description: 'Boundless, in collaboration with Sundarbans, organized Ahmedabad Escape (Meetup) on 17th May — a fun and refreshing gathering that brought 24 BS students together for a memorable day at Science City, Ahmedabad. The meetup began early in the morning as participants gathered with excitement and enthusiasm. One of the major highlights was the visit to Science City, where participants explored interactive exhibits, innovative displays, and engaging science-based attractions. After exploring Science City, the group enjoyed pizza together, turning the meetup into an even more lively and cheerful experience. Sitting together over food, conversations, and laughter created a comfortable and friendly atmosphere that strengthened the bond among participants. Filled with exploration, fun, food, and togetherness, the meetup became a truly memorable experience for everyone involved.',
    image: '/images/events/ahmedabad-escape-may.webp',
    stats: { cities: 1, participants: 24 },
    category: 'meetup',
    date: '17 May 2026',
    associations: 'Boundless x Sundarbans',
    glimpses: [],
    itinerary: [],
    subEvents: []
  },
  {
    id: 'ranchi-escape',
    title: 'Ranchi Escape',
    tagline: 'Fun, bonding, games, and food at Mall of Ranchi',
    description: 'Boundless, in collaboration with Nallamala, organized Ranchi Escape Meetup on 17th May — a fun and lively gathering that brought 17 BS students together for a memorable day at Mall of Ranchi. The meetup began with participants gathering with excitement, introductions quickly turning into engaging conversations, laughter, and instant bonding. Participants explored Mall of Ranchi together, visiting stores, capturing photographs, and simply enjoying each other\'s company. One of the most enjoyable parts was the fun games and activities shared by the group, which filled the day with energy, laughter, and endless entertainment. The group later gathered to enjoy burgers and food together, turning simple moments into some of the most memorable parts of the day. As the meetup concluded, participants carried back new friendships, unforgettable memories, and moments filled with joy and togetherness.',
    image: '/images/events/ranchi-escape.webp',
    stats: { cities: 1, participants: 17 },
    category: 'meetup',
    date: '17 May 2026',
    associations: 'Boundless x Nallamala',
    glimpses: [],
    itinerary: [],
    subEvents: []
  },
  {
    id: 'nepal-trip',
    title: 'Nepal Trip',
    tagline: 'Adventure, spirituality, and scenic beauty across Kathmandu, Pokhara, and Lumbini',
    description: 'Boundless organized the Nepal Trip, an unforgettable international journey that brought BS students together for an experience filled with adventure, spirituality, scenic beauty, and unforgettable memories across the beautiful landscapes of Nepal. From peaceful temples and mountain views to vibrant markets and lakeside nights, the trip became a perfect blend of exploration, bonding, and once-in-a-lifetime experiences.',
    image: '/images/events/nepal-trip.webp',
    stats: { cities: 3, participants: 44 },
    category: 'trip',
    date: '22 May - 26 May 2026',
    glimpses: [],
    itinerary: [
      {
        day: 'Day 0',
        title: 'Journey Begins from Gorakhpur',
        description: 'The journey officially began as participants gathered at the stay in Gorakhpur on 22nd May. By evening, the group departed for Kathmandu, beginning an overnight journey filled with music, fun conversations, snacks, and endless excitement.'
      },
      {
        day: 'Day 1',
        title: 'Temples, Culture & Kathmandu Vibes',
        description: 'Explored Kathmandu\'s iconic spiritual locations including Pashupatinath Temple, Swayambhunath Mahachaitya, Guhyeshwari Shaktipeeth Temple, Bagalamukhi Temple, and Durbar Square. The evening was spent exploring the lively streets of Thamel Market.'
      },
      {
        day: 'Day 2',
        title: 'Manokamna to Pokhara',
        description: 'Traveled to Manokamna Temple, enjoying a thrilling ropeway ride with breathtaking mountain views. After darshan, the journey continued to Pokhara to explore the beautiful lakeside area by evening.'
      },
      {
        day: 'Day 3',
        title: 'Lakes, Waterfalls & Pokhara Adventures',
        description: 'Enjoyed boating at Phewa Lake and visited Tal Barahi Temple. Later explored Davis Falls and Gupteshwor Mahadev Cave. The evening was spent relaxing with music and laughter around Pokhara\'s lakeside.'
      },
      {
        day: 'Day 4',
        title: 'Lumbini & Farewell',
        description: 'Traveled to Lumbini to explore the Maya Devi Temple, Lumbini Monastic Zone, and the Peace Pagoda. Concluded the trip with the return bus journey toward Gorakhpur.'
      }
    ],
    subEvents: [
      {
        id: 'lumbini-meetup',
        title: 'Lumbini Meetup',
        date: '26 May 2026',
        location: 'Lumbini, Nepal',
        attendees: 44,
        image: '/images/events/lumbini-meetup.webp',
        associations: 'Boundless x Nallamala',
        summary: 'As part of the Nepal journey, Boundless in collaboration with Nallamala House organized the Lumbini Meetup on 26th May — a peaceful and memorable gathering held in the spiritual city of Lumbini, the birthplace of Gautam Buddha. Participants explored the beautiful monastery areas and the Lumbini Monastic Zone, admiring the architecture, peaceful surroundings, and cultural beauty of the place. Walking together through the serene pathways allowed students to slow down, connect with each other, and truly experience the peaceful essence of Lumbini. The meetup also included a relaxing lunch at a nearby restaurant, where participants gathered over food, conversations, and shared laughter. Filled with calm moments, meaningful conversations, and unforgettable memories, the Lumbini Meetup added a special touch to the final day of the Nepal trip.',
        glimpses: []
      }
    ]
  },
  {
    id: 'himachal-trip',
    title: 'Himachal Diaries',
    tagline: 'Snowy peaks, Solang adventures, and quiet Kasol trails',
    description: 'An incredible winter trip in collaboration with Synapse. 40 students explored Manali\'s snow-capped mountains, experienced thrilling adventures in Solang Valley, hiked quiet trails in Kasol, and bonded around the Kullu river between 29 Jan – 1 Feb 2026.',
    image: '/images/events/tt3-himachal.webp',
    stats: { cities: 4, participants: 40 },
    category: 'trip',
    date: '29 Jan – 1 Feb 2026',
    glimpses: ['/images/events/tt3-himachal.webp'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Manali Arrival & Kasol Exploration',
        description: 'Met and driven up the scenic valley to Kasol. Explored local café culture, hiked quiet forest paths, and bonded around bonfire sessions by the Parvati River.'
      },
      {
        day: 'Day 2',
        title: 'Solang Valley Adventures',
        description: 'Traveled to Solang Valley for thrilling snow activities: paragliding, zorbing, and walking through snowy trails before returning to Manali.'
      },
      {
        day: 'Day 3',
        title: 'Manali Sightseeing & Old Manali Cafés',
        description: 'Visited the historic Hadimba Temple, Mall Road, and local Tibetan monasteries, sharing a warm community dinner in the evening.'
      },
      {
        day: 'Day 4',
        title: 'Kullu River Rafting & Farewell',
        description: 'Experienced river rafting in Kullu and explored local handicraft centers before driving back to the station/airport for departures.'
      }
    ],
    subEvents: []
  },
  {
    id: 'kerala-trip-2',
    title: 'Kerala 2.0',
    tagline: 'Return to God\'s Own Country — backwaters, beaches, and beyond',
    description: 'Boundless returns to Kerala for a second chapter of exploration across God\'s Own Country. Stay tuned for full details.',
    image: '/images/events/kerala2-cover.webp',
    stats: { cities: 0, participants: 0 },
    category: 'trip',
    date: '5 - 8 June 2026',
    glimpses: [],
    itinerary: [],
    subEvents: []
  },
  {
    id: 'pondicherry-trip',
    title: 'Pondicherry Trip',
    tagline: 'French Riviera of the East — coastal charm, cafés, and culture',
    description: 'Boundless heads to Pondicherry for a coastal expedition through the French Quarter, beachside promenades, and serene Auroville. Full details coming soon.',
    image: '/images/events/pondicherry-cover.webp',
    stats: { cities: 0, participants: 0 },
    category: 'trip',
    date: '14 - 17 June 2026',
    glimpses: [],
    itinerary: [],
    subEvents: []
  },
  {
    id: 'post-paradox-trip',
    title: 'Post Paradox Trip',
    tagline: 'A post-event student adventure — destination to be revealed',
    description: 'A special Boundless trip planned in the aftermath of Paradox, bringing students together for one more unforgettable journey. Full details coming soon.',
    image: '/images/events/post-paradox-cover.webp',
    stats: { cities: 0, participants: 0 },
    category: 'trip',
    date: '15 - 18 June 2026',
    glimpses: [],
    itinerary: [],
    subEvents: []
  }
];

export function setDynamicEvents(newData) {
  eventsData.length = 0;
  eventsData.push(...newData);
}

export default eventsData;
