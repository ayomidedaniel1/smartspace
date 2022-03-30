import React from 'react';
import { About, Navbar, Header, Feature, Service, Testimonial, Footer } from './components';

function App () {
  return (
    <div>
      <Navbar />
      <Header />
      <div>
        <About />
        <Feature />
        <Service />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default App;
