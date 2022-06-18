import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import useSticky from './hooks/useSticky';

import { getPropertiesData } from './api';
import { Footer, Navbar } from './components';
import Loader from './helpers/Loader';

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const List = React.lazy(() => import('./pages/List'));
const Details = React.lazy(() => import('./pages/Details'));

const App = () => {
  const { isSticky, element } = useSticky();

  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPropertiesData()
      .then((data) => {
        setProperties(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='container'>
      <Suspense fallback={<Loader />}>
        <Navbar sticky={isSticky} />
        <Routes>
          <Route path='/' element={<LandingPage element={element} />} />
          <Route path='/list' element={<List isLoading={isLoading} properties={properties} element={element} />} />
          <Route path='/:propertyId' element={<Details properties={properties} />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
