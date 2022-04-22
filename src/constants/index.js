import { Residential1, Residential2, Residential3 } from '../assets';
import { Review1, Review2, Review3, Dp1, Dp2, Dp3 } from '../assets';

import { Property, Research, Valuation } from '../assets';

export const worksData = [
  {
    img: Research,
    title: 'Research Suburbs',
    text: 'Wonder twenty hunted and put income set desire expect. Am cottage calling.'
  },
  {
    img: Valuation,
    title: 'Instant Valuation',
    text: 'Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.'
  },
  {
    img: Property,
    title: 'Track Property',
    text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.'
  }
];

export const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Service', href: '/service' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
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
    text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.',
    dp: Dp1,
    name: 'Jane Cooper',
    city: 'Los Angeles, CA'
  },
  {
    review: Review2,
    text: 'The and collecting motionless difficulty son. His hearing staying ten colonel met. Sex drew six easy four dear cold',
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
