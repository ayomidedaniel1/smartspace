import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage, List, Details } from './pages';
import useSticky from './hooks/useSticky';

import { getPropertiesData } from './api';
import { Footer, Navbar } from './components';

const App = () => {
  const { isSticky, element } = useSticky();

  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPropertiesData()
      .then((data) => {
        console.log(data);
        setProperties(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='container'>
      <Navbar sticky={isSticky} />
      <Routes>
        <Route path='/' element={<LandingPage element={element} />} />
        <Route path='/list' element={<List isLoading={isLoading} properties={properties} />} />
        <Route path='/details' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
