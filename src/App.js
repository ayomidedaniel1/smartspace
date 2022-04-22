import React from 'react';
import { Footer, Header, Navbar, Service } from './components';
import { About, Features, Testimonial } from './containers';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <About />
      <Features />
      <Service />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
