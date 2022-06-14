import React from 'react';
import { Footer, Header, Navbar, Service } from '../components';
import { About, Features, Testimonial } from '../containers';
import useSticky from "../hooks/useSticky";

const LandingPage = () => {
  const { isSticky, element } = useSticky();

  return (
    <div className='container'>
      <Navbar sticky={isSticky} />
      <Header element={element} />
      <About />
      <Features />
      <Service />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
