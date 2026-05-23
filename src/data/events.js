const eventsData = [
  {
    id: 'tricolor-trails-2',
    title: 'Tricolor Trails 2.0',
    tagline: 'Independence Week nationwide multi-city series',
    description: 'To celebrate the spirit of Independence Week, Boundless launched Tricolor Trails 2.0 — a nationwide multi-city initiative conducted across 12 cities in 11 states. Held in collaboration with Nallamala and Sundarbans Houses, and supported by the IIT Madras BS Student Activity Fee, the series brought students together through heritage walks, local treks, historical explorations, and community gatherings, proudly culminating in singing the National Anthem at each meetup.',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 12, participants: '300+' },
    category: 'multi-city',
    glimpses: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600'
    ],
    subEvents: [
      {
        id: 'patna',
        title: 'Patna Meetup',
        date: '6 Aug 2025',
        location: 'Gandhi Maidan → Bodhgaya',
        attendees: 25,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600',
        summary: 'Enthusiastic participation from students across Bihar. The group boarded a bus from Gandhi Maidan, Patna, beginning a lively road trip with icebreakers. The core highlights included a beautiful trek to Dungeshwari Hills to hoist the national flag, followed by spiritual explorations of the Mahabodhi Temple and peaceful monasteries in Bodhgaya.',
        glimpses: [
          'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=400',
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
        ]
      },
      {
        id: 'nagpur',
        title: 'Nagpur Meetup',
        date: '8 Oct 2025',
        location: 'Zilpi Lake & Siddhivinayak Mandir',
        attendees: 25,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600',
        summary: 'A refreshing one-day outing at the scenic Zilpi Lake. Students started the day with a lively bus ride full of music and introductions, followed by darshan at the peaceful Siddhivinayak Mandir. At the lakeside, they enjoyed bonding games and sang the National Anthem surrounded by calm waves.',
        glimpses: []
      },
      {
        id: 'bhubaneswar',
        title: 'Bhubaneswar Meetup',
        date: '14 Aug 2025',
        location: 'Esplanade Mall, Bhubaneswar',
        attendees: 15,
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=600',
        summary: 'Delayed by heavy rain for a week, the excitement was undiminished when students finally gathered on 14th August. The meetup began with warm introductions and singing the National Anthem. The group then enjoyed refreshments at Burger King, sharing academic experiences and building friendships.',
        glimpses: []
      },
      {
        id: 'mumbai',
        title: 'Mumbai Meetup',
        date: '14 Aug 2025',
        location: 'Sanjay Gandhi National Park & Kanheri Caves',
        attendees: 25,
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=600',
        summary: 'An adventure combining heritage and nature. The day kicked off with cheerful icebreakers in the lush surrounding of SGNP. The group hiked to the historic Kanheri Caves, sharing stories and taking photos, before participating in a thrilling and competitive treasure hunt that sparked grand teamwork and laughter.',
        glimpses: []
      },
      {
        id: 'delhi',
        title: 'Delhi Meetup',
        date: '10 Aug 2025',
        location: 'Central Park, Connaught Place',
        attendees: 40,
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600',
        summary: 'A heartwarming gathering of 40 students in the heart of Delhi. Gathered at Central Park, CP, the group introduced themselves and stood together to proud-sing the National Anthem. Afterward, they moved to Haldiram’s for snacks and concluded the day in the park with acoustic music, poetry, and shared stories.',
        glimpses: []
      },
      {
        id: 'bureau',
        title: 'Bengaluru Meetup',
        date: '10 Aug 2025',
        location: 'Bugle Rock Park & Bull Temple',
        attendees: 30,
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=600',
        summary: 'Rain could not dampen the spirits! The meetup began at Domino’s Basavanagudi with pizza and interactive games like Pass the Story. Once the sky cleared, students walked through Bugle Rock Park, climbed the giant rocks, sang the National Anthem, and concluded with visits to the iconic Bull and Ganapathi Temples.',
        glimpses: []
      },
      {
        id: 'kolkata',
        title: 'Kolkata Meetup',
        date: '10 Aug 2025',
        location: 'BITM & Quest Mall',
        attendees: 40,
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=600',
        summary: 'A day combining learning and leisure. The group thoroughly explored the Birla Industrial & Technological Museum, enjoying the interactive 3D and Coal Mine shows. Afterward, they stood outside BITM to sing the National Anthem before heading to Quest Mall Burger King for refreshments and deep conversation.',
        glimpses: []
      },
      {
        id: 'gorakhpur',
        title: 'Gorakhpur Meetup',
        date: '10 Aug 2025',
        location: 'Gorakhnath Temple & Café',
        attendees: 20,
        image: 'https://images.unsplash.com/photo-1596700684784-0a35928f6459?auto=format&fit=crop&q=80&w=600',
        summary: 'Blending spirituality and community bonding. The participants met at the sacred Gorakhnath Temple for introductions and absorbed the serene, calm atmosphere. They then headed to a nearby cozy café for snacks, playing engaging group games and discussing life as IITM students.',
        glimpses: []
      },
      {
        id: 'jamshedpur',
        title: 'Jamshedpur Meetup',
        date: '10 Aug 2025',
        location: 'Tata Steel Zoological Park',
        attendees: 15,
        image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=600',
        summary: 'A joyful meetup surrounded by green landscapes and wildlife. Sponsored by the BS Student Activity Fee, the event opened with warm introductions and singing the National Anthem. The students explored the zoological park, enjoying the peace of nature and planning future community chapter meetups.',
        glimpses: []
      },
      {
        id: 'indore',
        title: 'Indore Meetup',
        date: '13 Aug 2025',
        location: 'Ralamandal Sanctuary → Tincha Waterfall',
        attendees: 25,
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600',
        summary: 'A nature getaway starting with Ralamandal Wildlife Sanctuary for introductions and the National Anthem. The group then embarked on a fun road trip to Tincha Waterfall. The misty breeze and flowing waters provided the perfect landscape to relax, chat, and form lasting friendships.',
        glimpses: []
      },
      {
        id: 'jaipur',
        title: 'Jaipur Meetup',
        date: '14 Aug 2025',
        location: 'Bhangarh Fort, Rajasthan',
        attendees: 25,
        image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&q=80&w=600',
        summary: 'An adventure-filled outing starting with a music-filled bus ride. Upon reaching the historic Bhangarh Fort, students were welcomed with traditional dhol beats. They explored the ruins, recorded playful ghost-prank videos, danced, and concluded the day with local Rajasthani food and ice cream.',
        glimpses: []
      },
      {
        id: 'chennai',
        title: 'Chennai Meetup',
        date: '14 Aug 2025',
        location: 'Dakshina Chitra Museum',
        attendees: 25,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600',
        summary: 'A culturally enriching experience at Dakshina Chitra. BS students admired the traditional architectural styles and art forms representing South India. After a photogenic walk in the museum, they transitioned to a local café to connect over food and share learning journeys.',
        glimpses: []
      }
    ]
  },
  {
    id: 'navrang-2',
    title: 'Navrang 2.0',
    tagline: 'Pan-India festive Navratri celebrations',
    description: 'Navrang 2.0 marked one of the grandest pan-India celebrations organized by the Boundless Travel Society, bringing the festive spirit of Navratri to 14+ cities across the country between 23 Sept – 1 Oct 2025. Hosted in collaboration with Sundarbans, Nallamala, Corbett, Pravaha, Synapse, and Jarvis societies, over 350+ students dressed in vibrant traditional attire gathered to celebrate culture, dance in energetic Garba circles, and enjoy shared moments of happiness.',
    image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 14, participants: '350+' },
    category: 'multi-city',
    glimpses: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600'
    ],
    subEvents: [
      {
        id: 'mumbai-raas',
        title: 'Mumbai Raas',
        date: '23 Sep 2025',
        location: 'Kora Kendra Ground, Borivali',
        attendees: 32,
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600',
        summary: 'Mumbai set the perfect tone for Navrang 2.0 at Kora Kendra Ground. Students enjoyed warm introductions before diving into massive Garba circles. The energetic festive crowd blended with student enthusiasm, culminating in a beautiful night of photography, laughter, and complimentary goodies.',
        glimpses: []
      },
      {
        id: 'patna-raas',
        title: 'Patna Raas',
        date: '27 Sep 2025',
        location: 'Patliputra Community Hall, Patna',
        attendees: 32,
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600',
        summary: 'Patna blended traditional Garba beats with localized Bhojpuri energy at Patliputra Community Hall. Students kicked off with icebreakers, recorded dynamic reels, and danced in a joyous fusion circle. The evening was completed with local snacks, gift hampers, and tight-knit community bonding.',
        glimpses: []
      },
      {
        id: 'jaipur-raas',
        title: 'Jaipur Raas',
        date: '27 Sep 2025',
        location: 'LBS College, Raja Park, Jaipur',
        attendees: 30,
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600',
        summary: 'Jaipur glowed with traditional Pink City elegance at LBS College. Dressed in gorgeous ethnic wear, students shared laughs, warm introductions, and synced steps in Garba circles. The evening concluded with delicious food, gift hampers, and deep conversations.',
        glimpses: []
      },
      {
        id: 'hyderabad-raas',
        title: 'Hyderabad Raas',
        date: '27 Sep 2025',
        location: 'SK Creations, Hyderabad',
        attendees: 50,
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600',
        summary: 'One of the largest gatherings of Navrang 2.0. Dressed in colorful attire, 50 students lit up the dance floor at SK Creations with high-energy Garba tracks. The room was filled with laughter, followed by delicious refreshments, photo ops, and memorable student interactions.',
        glimpses: []
      },
      {
        id: 'ahmedabad-raas',
        title: 'Ahmedabad Raas',
        date: '27 Sep 2025',
        location: 'Green Place, Ahmedabad',
        attendees: 7,
        image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0f64?auto=format&fit=crop&q=80&w=600',
        summary: 'Ahmedabad delivered an intimate, deeply authentic Garba night. Dancin to classic Gujarati tunes at Green Place, the small group created a cozy, warm, and highly engaging vibe, capturing scenic aesthetic photos and bonding deeply over shared stories.',
        glimpses: []
      },
      {
        id: 'lucknow-raas',
        title: 'Lucknow Raas',
        date: '28 Sep 2025',
        location: 'Janeshwar Mishra Park, Lucknow',
        attendees: 35,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600',
        summary: 'Lucknow brought poise and historical charm as 35 students met at Janeshwar Mishra Park. The lush gardens provided a refreshing backdrop as students danced in organized Garba circles, wrapping up with cozy park chats, traditional snacks, and custom gift boxes.',
        glimpses: []
      },
      {
        id: 'nagpur-raas',
        title: 'Nagpur Raas',
        date: '28 Sep 2025',
        location: 'Trimurti Nagar Durga Pandal, Nagpur',
        attendees: 17,
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600',
        summary: 'Hosted under the beautiful glowing lights of Trimurti Nagar Durga Pandal, 17 Nagpur students enjoyed a vibrant evening. They recorded candid reels, danced under the pandal canopy, and shared dinner to discuss future local events.',
        glimpses: []
      },
      {
        id: 'delhi-raas',
        title: 'Delhi Raas',
        date: '28 Sep 2025',
        location: 'Pacific Garba Night, Tagore Garden, Delhi',
        attendees: 35,
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600',
        summary: 'Grand celebration under the electrifying neon lights of Pacific Garba Night. Dressed in spectacular traditional attire, students clicked group pictures, swapped study experiences, danced late into the night, and enjoyed street food.',
        glimpses: []
      },
      {
        id: 'kolkata-raas',
        title: 'Kolkata Raas',
        date: '29 Sep 2025',
        location: 'Salt Lake IB Block Durga Puja, Kolkata',
        attendees: 30,
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=600',
        summary: 'A magnificent cultural fusion. The event began with a beautiful guided tour of the massive Salt Lake pandal, admiring traditional clay art. Soon, the group transitioned into Garba mode, dancing in the lit courtyard and sharing festive sweets.',
        glimpses: []
      },
      {
        id: 'gorakhpur-raas',
        title: 'Gorakhpur Raas',
        date: '27 Sep 2025',
        location: 'Maharana Pratap Inter College, Gorakhpur',
        attendees: 15,
        image: 'https://images.unsplash.com/photo-1596700684784-0a35928f6459?auto=format&fit=crop&q=80&w=600',
        summary: 'A cozy, heartfelt meetup of 15 students. They gathered in the college grounds, kicking off with lively introductions and dhol beats before forming simple, synchronized dance circles. Wrapped up with shared hampers and home-style sweets.',
        glimpses: []
      },
      {
        id: 'jamshedpur-raas',
        title: 'Jamshedpur Raas',
        date: '28 Sep 2025',
        location: 'Kasidih Durga Puja Pandal, Jamshedpur',
        attendees: 11,
        image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&q=80&w=600',
        summary: 'Under the beautiful canopy of Kasidih Durga Puja Pandal, students gathered for light-hearted chats. They danced Garba to traditional tracks, took festive photographs, and bonded over local street food.',
        glimpses: []
      },
      {
        id: 'indore-raas',
        title: 'Indore Raas',
        date: '28 Sep 2025',
        location: 'Sheraton Grand Palace, Indore',
        attendees: 18,
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600',
        summary: 'A premium, late-night festive celebration. Gathering at the grand Sheraton Palace, the group shared a luxurious dinner, followed by dynamic and highly rhythmic Garba circles. The elegant setup made it a truly memorable night.',
        glimpses: []
      },
      {
        id: 'chennai-raas',
        title: 'Chennai Raas',
        date: '1 Oct 2025',
        location: 'Ampa Skyone Mall, Chennai',
        attendees: 11,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600',
        summary: 'The perfect closing chapter to Navrang 2.0. Eleven Chennai-based students gathered at Ampa Skyone Mall, opening with casual café chats and creative photos. The Garba session, though intimate, radiated high energy and concluded with festive goodbyes.',
        glimpses: []
      }
    ]
  },
  {
    id: 'tricolor-trails-3',
    title: 'Tricolor Trails 3.0',
    tagline: 'Republic Day nationwide celebration series',
    description: 'To commemorate the 77th Republic Day of India, Boundless, in collaboration with Nallamala House, launched Tricolor Trails 3.0. This massive nationwide series of offline meetups and adventure trips connected BS students in major cities and remote landscapes across North, South, East, and West India. Each event was designed to celebrate patriotism, foster student friendships outside classrooms, and reflect the rich cultural diversity of India, concluding with standing for the National Anthem.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 12, participants: '250+' },
    category: 'multi-city',
    glimpses: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600'
    ],
    subEvents: [
      {
        id: 'kanpur',
        title: 'Kanpur Diaries',
        date: '10 Jan 2026',
        location: 'Allen Forest Zoo, Kanpur',
        attendees: 18,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
        summary: 'Gathered at the historic Allen Forest Zoo under pleasant winter skies. 18 students began with energetic introductions, walked through the zoological paths, played bonding games, shared home-cooked snacks, and proudly concluded by singing the National Anthem.',
        glimpses: []
      },
      {
        id: 'siliguri',
        title: 'Siliguri Diaries',
        date: '21 Jan 2026',
        location: 'Coronation Bridge & EWAM Monastery',
        attendees: 8,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600',
        summary: 'An intimate, serene meetup in the hills. Eight students explored the Coronation Bridge and visited the peaceful EWAM India Buddhist Monastery. The calm environment was perfect for academic discussions, followed by lunch and singing the National Anthem.',
        glimpses: []
      },
      {
        id: 'kolkata-diaries',
        title: 'Kolkata Diaries',
        date: '24 Jan 2026',
        location: 'Indian Museum, Kolkata',
        attendees: 31,
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=600',
        summary: 'A day packed with cultural learning. 31 students explored the galleries of the iconic Indian Museum, viewing ancient statues, historical remains, and fossils. Over a cozy lunch, they connected deeply and stood for the National Anthem in the museum courtyard.',
        glimpses: []
      },
      {
        id: 'chennai-diaries',
        title: 'Chennai Diaries',
        date: '25 Jan 2026',
        location: 'Arignar Anna Zoological Park (Vandalur)',
        attendees: 23,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600',
        summary: 'A dynamic outdoor meetup at Vandalur Zoo. 23 students started with early introductions before embarking on a highly fun cycling session through green pathways. The day finished with a delicious pizza gathering and standing together to sing the National Anthem.',
        glimpses: []
      },
      {
        id: 'rishikesh',
        title: 'Rishikesh Diaries',
        date: '25 Jan 2026',
        location: 'Janki Setu & Holy Ganges',
        attendees: 19,
        image: 'https://images.unsplash.com/photo-1548680373-ab6d4a5b48d7?auto=format&fit=crop&q=80&w=600',
        summary: 'A soulful gathering along the sacred Ganges. 19 students shared stories, visited riverside temples, and walked across the architectural marvel Janki Setu. They concluded this serene experience by standing together to proud-sing the National Anthem.',
        glimpses: []
      },
      {
        id: 'vrindavan',
        title: 'Vrindavan Diaries',
        date: '10-11 Jan 2026',
        location: 'Mathura & Prem Mandir, Vrindavan',
        attendees: 18,
        image: 'https://images.unsplash.com/photo-1616038242814-a6eac7845d88?auto=format&fit=crop&q=80&w=600',
        summary: 'A spiritually enriching 2-day trip. Dressed in traditional clothes, 18 students began with the National Anthem in Mathura. The main highlight was visiting the grand Prem Mandir at night, illuminated in colorful lights, before a peaceful dinner near the ghats.',
        glimpses: []
      },
      {
        id: 'parasnath',
        title: 'Parasnath Diaries',
        date: '10-11 Jan 2026',
        location: 'Parasnath Trek, Madhuban, Jharkhand',
        attendees: 13,
        image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=600',
        summary: 'A challenging, overnight mountain trek. 13 participants assembled late at night at Madhuban and hiked under a starry sky, arriving at the summit just in time for a beautiful sunrise over Parasnath Temple. Completed with a celebratory lunch.',
        glimpses: []
      },
      {
        id: 'coimbatore',
        title: 'Coimbatore Diaries',
        date: '26 Jan 2026',
        location: 'Mettupalayam → Ooty Hill Station',
        attendees: 10,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600',
        summary: 'An adventure in the "Queen of Hill Stations." Ten students met at Mettupalayam and drove up the misty hills of Ooty. They explored tea gardens, shared a warm lunch, and stood together in the cold mountain air to sing the National Anthem.',
        glimpses: []
      },
      {
        id: 'rajgir',
        title: 'Rajgir & Nalanda Diaries',
        date: '18 Jan 2026',
        location: 'Vishwa Shanti Stupa & Nalanda Ruins',
        attendees: 25,
        image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600',
        summary: 'A journey through history and peace. 25 students gathered in Patna and traveled to Rajgir to hike up the Vishwa Shanti Stupa. They then visited the historical ruins of Nalanda University, enjoying an educational exploration and a pride-filled anthem moment.',
        glimpses: []
      },
      {
        id: 'mahabaleshwar',
        title: 'Mahabaleshwar Diaries',
        date: '18-20 Jan 2026',
        location: 'Mahabaleshwar & Lingmala Trek',
        attendees: 16,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600',
        summary: 'A scenic 3-day trip into the foggy Western Ghats. 16 students experienced early morning forest treks, strawberry tasting, and viewpoints, bonding over a sponsored group lunch and standing together for a patriotic National Anthem.',
        glimpses: []
      },
      {
        id: 'udaipur-diaries',
        title: 'Udaipur Diaries',
        date: '18-20 Jan 2026',
        location: 'Ambrai Ghat, City Palace & Mount Abu',
        attendees: 25,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600',
        summary: 'A magnificent 3-day royal getaway. 25 students met at Ambrai Ghat, explored the grand courtyards of City Palace, stood for the National Anthem, shopped in the local markets, and finished with a scenic drive and trek up Mount Abu.',
        glimpses: []
      },
      {
        id: 'himachal',
        title: 'Himachal Diaries',
        date: '29 Jan – 1 Feb 2026',
        location: 'Manali, Solang Valley, Kasol & Kullu',
        attendees: 40,
        image: 'https://images.unsplash.com/photo-1548680373-ab6d4a5b48d7?auto=format&fit=crop&q=80&w=600',
        summary: 'An incredible winter trip in collaboration with Synapse. 40 students explored Manali\'s snow-capped mountains, experienced thrilling adventures in Solang Valley, hiked quiet trails in Kasol, and bonded around a glowing bonfire beside the Kullu river.',
        glimpses: []
      },
      {
        id: 'chopta',
        title: 'Chopta Trek',
        date: '26 Jan 2026',
        location: 'Chopta, Tungnath & Chandrashila Peak',
        attendees: 15,
        image: 'https://images.unsplash.com/photo-1548680373-ab6d4a5b48d7?auto=format&fit=crop&q=80&w=600',
        summary: 'A breathtaking winter trek to Tungnath, the highest Shiva temple in the world, and further up to Chandrashila Peak. The group climbed through snow-laden forest paths under clear blue skies, proudly hoisting the national flag at the summit.',
        glimpses: []
      }
    ]
  },
  {
    id: 'shimoga-trip',
    title: 'Shimoga Expedition',
    tagline: 'Expedition through the Western Ghats & Udupi Coast',
    description: 'This legendary three-day expedition through Karnataka offered 30 travelers a perfect blend of rich nature, mountain adventure, coastal culture, and spiritualism. The journey took explorers from the deep elephant camps of Shimoga to the highest peak treks in the Western Ghats, culminating along the golden coastal shores of Udupi.',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 4, participants: 30 },
    category: 'trip',
    glimpses: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=600'
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
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 3, participants: 30 },
    category: 'trip',
    glimpses: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600'
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
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600',
        summary: 'Boundless, in collaboration with Nallamala, organized a special meetup at the iconic Sajjangarh Fort (Monsoon Palace) in Udaipur on 13th September as a key highlight of the Mewar Trip. Set atop the Aravalli hills, the location offered an inspiring blend of scenic beauty, calm winds, and panoramic views-making it a perfect venue for community bonding. The meetup began at 3:00 PM as the group reached the fort viewpoint. Fun group activities, storytelling moments, and light-hearted interactions made the session highly memorable.',
        glimpses: []
      }
    ]
  },
  {
    id: 'meghalaya-trip',
    title: 'Meghalaya Diaries 1.0',
    tagline: 'Misty hills, living root bridges, and turquoise waters',
    description: 'A magical four-day expedition winding through the Khasi Hills, roaring plunge waterfalls, limestone caverns, and clean forest villages of Meghalaya. Thirty students started as strangers at Guwahati station and returned as a boundless family, carrying memories of trekking under the rain and gliding across crystal rivers.',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 4, participants: 30 },
    category: 'trip',
    glimpses: [
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600'
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
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 4, participants: 20 },
    category: 'trip',
    glimpses: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600'
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
    title: 'Kerala Yatra',
    tagline: 'Backwaters, giant sculptures, and coastal cliffs of Varkala',
    description: 'An unforgettable 4-day trip exploring the diverse heritage, tranquil backwaters, and grand cliffside beaches of "God\'s Own Country" between 8–11 January 2026. Dressed in traditional attire, 23 students sailed on luxury houseboats in Alleppey, explored historical Fort Kochi, hiked the giant bird sculpture at Jatayu, and watched golden sunsets over the Arabian Sea from Varkala Cliff.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 4, participants: 23 },
    category: 'trip',
    glimpses: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600'
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
    tagline: 'Vibrant culture, female empowerment, and desert exploration',
    description: 'An exclusive four-day trip designed for 14 female BS students to explore the colorful royal heritage of Rajasthan between 18–21 March 2026. Supported by the IIT Madras Student Activity Fee, the trip focused on historical exploration, female empowerment, confidence building, and forming close-knit lifelong friendships.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 2, participants: 14 },
    category: 'trip',
    glimpses: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & Royal Welcome',
        description: 'The group gathered in Rajasthan, welcomed with local folk music. They enjoyed a cozy dinner circle, sharing introductions and travel expectations.'
      },
      {
        day: 'Day 2',
        title: 'Fort Exploration & Photo Walks',
        description: 'Spent the day exploring grand palaces, walking through colorful royal streets, capturing aesthetic pictures, and learning about the royal history.'
      },
      {
        day: 'Day 3',
        title: 'Traditional Bazaars & Late-Night Bonding',
        description: 'Shopped for local handicrafts and jewelry in traditional bazaars. The evening wrapped up with a late-night music circle, sharing personal stories.'
      },
      {
        day: 'Day 4',
        title: 'Empowerment Reflection & Departure',
        description: 'Gathered for a reflection circle, discussing student life and building a strong sisterhood network. Departures in the afternoon.'
      }
    ],
    subEvents: []
  },
  {
    id: 'kalsubai-trek',
    title: 'Kalsubai Peak Trek',
    tagline: 'Climbing under the stars to Maharashtra\'s highest point',
    description: 'What started as a simple meetup for Boundless Mumbai Chapter students turned into a legendary overnight trek to Kalsubai Peak, the highest point in Maharashtra (1,646 meters). Supported by the IITM Student Activity Fee, 17 participants hiked under a starry night sky, slept in mountain tents, and witnessed a breathtaking golden sunrise over the Sahyadri range.',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 1, participants: 17 },
    category: 'trip',
    glimpses: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=600'
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
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 'Pan-India', participants: '300+' },
    category: 'online',
    glimpses: [],
    subEvents: [
      {
        id: 'teachers-day',
        title: 'Teachers\' Day Tribute',
        date: '5 Sep 2025',
        location: 'Online Google Meet',
        attendees: 120,
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
        summary: 'A heartfelt session with Beloved Kothai Ma\'am, celebrated by 120+ students. The event transformed into a warm evening of introductions, gratitude wishes in the chat, student-led tribute messages, an interactive Q&A, and a custom gratitude montage prepared by the core team.'
      },
      {
        id: 'orientation',
        title: 'Society Orientation',
        date: '7 Sep 2025',
        location: 'Online Google Meet',
        attendees: 120,
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
        summary: 'Introduced the structure of the Boundless Travel Society to new students. The core members explained the chapter layout, upcoming plans for trips, and instructions on how to leverage the Student Activity Fee to host city meetups.'
      },
      {
        id: 'scribble-night',
        title: 'Girls Scribble Night',
        date: '12 Oct 2025',
        location: 'Online Google Meet',
        attendees: 15,
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600',
        summary: 'An engaging, girls-only creative session. Participants enjoyed themed drawing challenges, rapid-fire doodling, and shared artwork on screen. The relaxed, comfortable environment encouraged free expression, laughter, and personal bonding.'
      },
      {
        id: 'womens-day',
        title: 'Women\'s Day Championship',
        date: '7-8 Mar 2026',
        location: 'Online Google Meet',
        attendees: 50,
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
        summary: 'Celebrated the strength and talent of women in our community. Over 50 students participated in interactive competitions, creative showcases, and open discussion panels, filling the chat with support and empowerment.'
      }
    ]
  },
  {
    id: 'pushkar-trip',
    title: 'Pushkar Mela Trip',
    tagline: 'Vibrant colors, desert dunes, and sunset ghats of Pushkar Mela',
    description: 'The Pushkar Meetup, held on 2nd November 2025, was one of the most vibrant one-day trips organized by Boundless in collaboration with Nallamala House. With 30 enthusiastic participants joining the journey, the meetup turned into a perfect blend of culture, exploration, bonding, and unforgettable experiences at the iconic Pushkar Mela. Students explored the fairgrounds, visited Pushkar Lake & serene ghats, local handicraft bazaars, and folk performances, concluding with a peaceful sunset near the ghats.',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 1, participants: 30 },
    category: 'trip',
    glimpses: [],
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
    id: 'ananthagiri-trip',
    title: 'Ananthagiri Hills Diaries',
    tagline: 'Trekking through lush green forest trails and dense Vikarabad valley',
    description: 'A nature-filled escape from daily routines, surrounded by lush forest greenery and fresh mountain air on 7–8 February 2026. Supported by the IIT Madras BS Student Activity Fee, 14 participants ventured through Vikarabad forest trails, building teamwork, sharing laughter, and appreciating the tranquil landscape before concluding with a memorable sunrise trek.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 1, participants: 14 },
    category: 'trip',
    glimpses: [],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Forest Trek & Nature Trail',
        description: 'Arrived at Ananthagiri Hills in Vikarabad. Ventured through dense forest trails under tranquil surroundings, engaging in icebreakers and teamwork exercises among 14 participants.'
      },
      {
        day: 'Day 2',
        title: 'Sunrise Walk & Reflections',
        description: 'Began early with a scenic sunrise trek overlooking the misty Vikarabad valley, followed by a local breakfast and a community circle of reflection.'
      }
    ],
    subEvents: []
  },
  {
    id: 'uttarakhand-trip',
    title: 'Uttarakhand Diaries',
    tagline: 'A serene and refreshing lakeside escape in Devbhoomi Nainital',
    description: 'A three-day student escape into the misty mountains of Nainital, Devbhoomi between 16–18 April 2026. Walking along the serene Naini Lake, enjoying the cool mountain breeze, and sharing cozy evening campfire chats strengthened student bonding and created lasting memories for 20 adventurous explorers.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 1, participants: 20 },
    category: 'trip',
    glimpses: [],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Scenic Arrival in Nainital',
        description: 'Began with a gorgeous winding drive into the mist-covered hills of Uttarakhand. Explored Nainital lakeside and enjoyed the refreshing cool mountain breeze.'
      },
      {
        day: 'Day 2',
        title: 'Lake Exploration & Viewpoints',
        description: 'Soaked in the tranquility of Nainital, walking along Naini Lake and exploring nearby viewpoints. Evenings were filled with warm community bonding and campfire games.'
      },
      {
        day: 'Day 3',
        title: 'Morning Calm & Departures',
        description: 'Woke up to the unique morning calm of Nainital. Had a relaxed lakeside breakfast and took final group photos before heading to the departure points.'
      }
    ],
    subEvents: []
  },
  {
    id: 'goa-trip',
    title: 'Goa Summer Expedition',
    tagline: 'Sun-kissed beaches, historic forts, and colorful Portuguese quarters',
    description: 'A planned flagship summer getaway to Goa in June 2026. This trip connects students through heritage walks in Panjim, water adventures on the sun-kissed beaches, and sunset circle bonding sessions at historic fort ruins, creating a bounding family outside classroom screens.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600',
    stats: { cities: 1, participants: 30 },
    category: 'trip',
    glimpses: [],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & Beach Sunset',
        description: 'Gather at Goa\'s sun-kissed coast. Meet fellow travelers and enjoy a scenic sunset circle bonding session on the beach.'
      },
      {
        day: 'Day 2',
        title: 'Panjim Cultural Meetup',
        description: 'Explore the Portuguese Latin Quarter, Fontainhas, and St. Sebastian Chapel. Capture colorful historical houses, photo walks, and cafe catchups.'
      },
      {
        day: 'Day 3',
        title: 'Historic Fort Walks & Water Sports',
        description: 'Visit historic fort ruins for panoramic sea views. Engage in water adventures on the beach and enjoy a final night bonfire circle.'
      }
    ],
    subEvents: [
      {
        id: 'panjim-meetup',
        title: 'Panjim Meetup',
        date: 'June 2026',
        location: 'Fontainhas & St. Sebastian Chapel, Panjim',
        attendees: 30,
        image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=600',
        summary: 'Held on the second day of the Goa trip, the Panjim Meetup was a cultural and social experience thoughtfully curated in the heart of Goa’s Latin Quarter. The event began with a peaceful gathering at the St. Sebastian Chapel, offering a calm and reflective start. From there, participants took a relaxed stroll through the Fontainhas Quarters, famous for their colorful Portuguese-style houses and old-world charm, capturing the essence of what it means to travel together.',
        glimpses: []
      }
    ]
  }
];

export default eventsData;
