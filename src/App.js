import React from 'react';
import { Navbar, Header, Service, Footer } from './components';
import { About, Testimonial, Features } from './containers';

function App () {
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
}

export default App;
