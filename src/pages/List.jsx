import React from 'react';
import { Hits } from '../components';
import Loader from '../helpers/Loader';
import { Link } from 'react-router-dom';

const List = ({ isLoading, properties, element }) => {
  if (isLoading) <Loader />;

  const propsData = properties.hits;

  return (
    <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-20 md:mt-10 mt-6 lg:px-10 md:mb-10'>
      {isLoading && <Loader />}
      {propsData?.map(item => (
        <Link to={`/${item.slug}`} key={item.id}>
          <Hits
            price={item.price}
            name={item.title}
            img={item.coverPhoto.url}
            baths={item.baths}
            rooms={item.rooms}
            verified={item.isVerified}
            element={element} />
        </Link>
      ))}
    </div>
  );
};

export default List;
