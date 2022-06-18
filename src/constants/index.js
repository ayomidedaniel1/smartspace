import { Residential1, Residential2, Residential3 } from '../assets';
import { Review1, Review2, Review3, Dp1, Dp2, Dp3 } from '../assets';

import { Property, Research, Valuation } from '../assets';

export const worksData = [
  {
    img: Research,
    title: 'Research Suburbs',
    text: 'Custom made desks, mix of sitting and standing workspaces, state-of-the-art AC system, top notch location.'
  },
  {
    img: Valuation,
    title: 'Instant Valuation',
    text: "Access to community's online member network, conference room bookings. Actual office space that promotes productivity."
  },
  {
    img: Property,
    title: 'Track Property',
    text: 'Beautiful setting, abundant natural light, amazing comfort, super-fast internet, industrial style interior.'
  }
];

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Service', href: '#service' },
  { name: 'Contact', href: '#contact' },
];

export const propertyData = [
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

export const typeOfProperty = [
  {
    type: "Residential Property",
    href: '/'
  },
  {
    type: "Commercial Property",
    href: '/'
  },
  {
    type: "Agriculture Property",
    href: '/'
  },
  {
    type: "Industrial Property",
    href: '/'
  },
];

export const testimony = [
  {
    review: Review1,
    text: 'SmartSpace is simply the best place to be right now. Working in the same place with other professionals gives a sense of motivation',
    dp: Dp1,
    name: 'Jane Cooper',
    city: 'Los Angeles, CA'
  },
  {
    review: Review2,
    text: "SmartSpace is a community where everyone is welcome. It's where ideas happen. It's where people from all backgrounds come to work together.",
    dp: Dp2,
    name: 'Robert Fox',
    city: 'New York City, NY'
  },
  {
    review: Review3,
    text: 'Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet.',
    dp: Dp3,
    name: 'Leslie Alexander',
    city: 'Buffalo, NJ'
  }
];
