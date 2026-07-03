import { Residential1, Residential2, Residential3 } from '../assets';
import { Review1, Review2, Review3, Dp1, Dp2, Dp3 } from '../assets';
import { Property, Research, Valuation } from '../assets';

export type StaticAsset = string | { src: string; height: number; width: number; blurDataURL?: string };

export interface WorkStep {
  img: StaticAsset;
  title: string;
  text: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface PropertyImage {
  img: StaticAsset;
}

export interface PropertyType {
  type: string;
  href: string;
}

export interface TestimonyItem {
  review: StaticAsset;
  text: string;
  dp: StaticAsset;
  name: string;
  city: string;
}

export const worksData: WorkStep[] = [
  {
    img: Research,
    title: 'Research Workspaces',
    text: 'Browse verified spaces tailored with premium work environments: sitting/standing desks, backup power generators, and quiet call booths.'
  },
  {
    img: Valuation,
    title: 'Book a Desk or Tour',
    text: "Schedule desk rentals, lock in dedicated private offices, or book visits to coliving properties seamlessly."
  },
  {
    img: Property,
    title: 'Enjoy Smart Working',
    text: 'Access modern spaces promoting high productivity with abundant natural light, super-fast internet, and a collaborative tech community.'
  }
];

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '/list' },
  { name: 'Service', href: '#service' },
  { name: 'Contact', href: '#contact' },
];

export const propertyData: PropertyImage[] = [
  {
    img: Residential1
  },
  {
    img: Residential2
  },
  {
    img: Residential3
  },
];

export const typeOfProperty: PropertyType[] = [
  {
    type: "All Workspaces",
    href: '/list'
  },
  {
    type: "Nigeria",
    href: '/list?country=Nigeria'
  },
  {
    type: "United States",
    href: '/list?country=US'
  },
  {
    type: "United Kingdom",
    href: '/list?country=UK'
  },
];

export const testimony: TestimonyItem[] = [
  {
    review: Review1,
    text: 'SmartSpace is simply the best place to be right now. Working in the same place with other professionals gives a sense of motivation.',
    dp: Dp1,
    name: 'Jane Cooper',
    city: 'Lagos, Nigeria'
  },
  {
    review: Review2,
    text: "SmartSpace is a community where everyone is welcome. It's where ideas happen. It's where people from all backgrounds come to work together.",
    dp: Dp2,
    name: 'Robert Fox',
    city: 'New York, NY'
  },
  {
    review: Review3,
    text: 'The absolute best remote work arrangement I have had. Robust power backups and lightning-fast fiber made my transition to Lagos flawless.',
    dp: Dp3,
    name: 'Leslie Alexander',
    city: 'London, UK'
  }
];
