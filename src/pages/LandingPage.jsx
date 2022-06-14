import React, { Suspense } from 'react';
import Loader from '../helpers/Loader';

const Header = React.lazy(() => import('../components/Header'));
const Service = React.lazy(() => import('../components/Service'));
const About = React.lazy(() => import('../containers/About'));
const Features = React.lazy(() => import('../containers/Features'));
const Testimonial = React.lazy(() => import('../containers/Testimonial'));

const LandingPage = ({ element }) => {
  return (
    <div className='container'>
      <Suspense fallback={<Loader />}>
        <Header element={element} />
        <About />
        <Features />
        <Service />
        <Testimonial />
      </Suspense>
    </div>
  );
};

export default LandingPage;
