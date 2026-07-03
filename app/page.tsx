import React from 'react';
import Header from '@/src/components/Header';
import About from '@/src/containers/About';
import Features from '@/src/containers/Features';
import Service from '@/src/components/Service';
import Testimonial from '@/src/containers/Testimonial';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <About />
      <Features />
      <Service />
      <Testimonial />
    </div>
  );
}
