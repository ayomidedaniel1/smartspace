import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage, List, Details } from './pages';

import { getPropertiesData } from './api';

const App = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/list' element={<List />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
