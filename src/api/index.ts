export interface CoverPhoto {
  url: string;
}

export interface WorkspaceProperty {
  id: string;
  slug: string;
  title: string;
  price: number;
  rooms: number; // Represents meeting rooms/collaborative spaces
  baths: number; // Represents private phone booths/amenity rooms
  coverPhoto: CoverPhoto;
  location: string;
  country: 'Nigeria' | 'US' | 'UK';
  workspaceType: 'Hot Desk' | 'Dedicated Desk' | 'Private Office' | 'Coliving Space';
  amenities: string[];
  description: string;
  rating: number;
  hostName: string;
  hostPhone: string;
}

export interface PropertiesResponse {
  hits: WorkspaceProperty[];
}

export const mockProperties: WorkspaceProperty[] = [
  {
    id: 'prop-1',
    slug: 'vanguard-tech-hub-lagos',
    title: 'Vanguard Tech Hub Coworking',
    price: 120,
    rooms: 3,
    baths: 2,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
    location: 'Lekki Phase 1, Lagos, Nigeria',
    country: 'Nigeria',
    workspaceType: 'Dedicated Desk',
    amenities: ['Generator Backup', 'Fiber Internet (150mbps)', 'Ergonomic Chairs', 'Soundproof Phone Booth', 'Complimentary Tea/Coffee', '24/7 Security'],
    description: 'A vibrant tech space located in the heart of Lekki. Equipped with seamless dual-line fiber internet, robust alternative power generators to beat outages, soundproof calling booths, and comfortable seating to support long coding sessions.',
    rating: 4.8,
    hostName: 'Chioma Nze',
    hostPhone: '+234 812 345 6789'
  },
  {
    id: 'prop-2',
    slug: 'nile-crest-coliving-abuja',
    title: 'Nile Crest Live-Work Coliving',
    price: 380,
    rooms: 5,
    baths: 4,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    },
    location: 'Maitama, Abuja, Nigeria',
    country: 'Nigeria',
    workspaceType: 'Coliving Space',
    amenities: ['Solar Power Backup', 'High-Speed Wi-Fi', 'Swimming Pool', 'Ergonomic Workstations', 'Shared Kitchen', 'Fitness Center'],
    description: 'Premium coliving space designed for remote professionals, expats, and tech builders visiting Abuja. Features a continuous solar battery backup, fully furnished workspace rooms, and a community lounge to sync with other developers.',
    rating: 4.9,
    hostName: 'Ibrahim Bello',
    hostPhone: '+234 901 234 5678'
  },
  {
    id: 'prop-3',
    slug: 'greenwich-foundry-london',
    title: 'The Greenwich Foundry Workspace',
    price: 290,
    rooms: 6,
    baths: 3,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    },
    location: 'Greenwich, London, UK',
    country: 'UK',
    workspaceType: 'Private Office',
    amenities: ['High-speed Wi-Fi (300mbps)', 'Dual Monitors', 'Standing Desks', 'Soundproof Pods', 'Roof Garden', 'Bicycle Storage'],
    description: 'Modern, high-comfort workspace overlooking the Thames. Offers premium standing desks, dual-monitor workstations, quiet soundproof focus pods, and a scenic rooftop to clear your mind between projects.',
    rating: 4.7,
    hostName: 'Sarah Jenkins',
    hostPhone: '+44 20 7946 0958'
  },
  {
    id: 'prop-4',
    slug: 'manhattan-suite-new-york',
    title: 'Manhattan Executive Coworking Suites',
    price: 490,
    rooms: 8,
    baths: 4,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    },
    location: 'Midtown Manhattan, New York, US',
    country: 'US',
    workspaceType: 'Private Office',
    amenities: ['Fiber Wi-Fi (500mbps)', 'Steelcase Ergonomic Chairs', 'Podcast Recording Studio', 'Premium Espresso Bar', 'Event Hall', 'Whiteboards'],
    description: 'Professional tech-oriented suites situated in Midtown. Benefit from high-speed gigabit Wi-Fi, premium ergonomic Steelcase chairs, a fully equipped podcasting/recording room, and unlimited handcrafted espresso.',
    rating: 4.9,
    hostName: 'David Miller',
    hostPhone: '+1 212 555 0199'
  },
  {
    id: 'prop-5',
    slug: 'harbour-view-desks-bristol',
    title: 'Harbour View Hot Desks',
    price: 180,
    rooms: 2,
    baths: 1,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    },
    location: 'Harbourside, Bristol, UK',
    country: 'UK',
    workspaceType: 'Hot Desk',
    amenities: ['Fast Wi-Fi', 'Quiet Working Zones', 'Kitchenette', 'Showers', 'Secure Lockers', 'Social Meetups'],
    description: 'A relaxed hot desking community ideal for freelance software developers and creative thinkers. Features quiet zones, clean shower rooms for active commuters, and regular community social hours.',
    rating: 4.6,
    hostName: 'Emma Watson',
    hostPhone: '+44 117 496 0233'
  },
  {
    id: 'prop-6',
    slug: 'silicon-valley-colive-sf',
    title: 'SOMA Live-Work Tech Colive',
    price: 750,
    rooms: 10,
    baths: 6,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1556761175-b813d53a962e?auto=format&fit=crop&w=800&q=80',
    },
    location: 'SOMA, San Francisco, US',
    country: 'US',
    workspaceType: 'Coliving Space',
    amenities: ['Gigabit Wi-Fi', 'Backup Batteries', 'Standing Desks', 'Meeting Rooms', 'Gym Access', 'Laundry Facility'],
    description: 'The ultimate live-work experience in San Francisco. Located in SOMA, this space features individual private bedroom capsules, standing desks, meeting rooms, gigabit fiber, and a full gym.',
    rating: 4.9,
    hostName: 'Marcus Chen',
    hostPhone: '+1 415 555 2671'
  }
];

export const getPropertiesData = async (): Promise<PropertiesResponse> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ hits: mockProperties });
    }, 400);
  });
};

export const getPropertyBySlug = async (slug: string): Promise<WorkspaceProperty | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prop = mockProperties.find((p) => p.slug === slug);
      resolve(prop);
    }, 200);
  });
};
