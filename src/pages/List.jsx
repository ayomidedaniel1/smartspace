import React from 'react';
import { Hits } from '../components';
import Loader from '../helpers/Loader';
import { Link } from 'react-router-dom';

const List = ({ isLoading, properties, element }) => {
  if (isLoading) <Loader />;

  const propsData = properties.hits;

  return (
    <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:mt-20 mt-10 px-3 md:px-5 lg:px-10 mb-20 md:mb-40'>
      {isLoading && <Loader />}
      {propsData?.map(item => (
        <Link to={`/${item.slug}`} key={item.id}>
          <Hits
            price={item.price}
            name={item.title}
            img={item.coverPhoto.url}
            baths={item.baths}
            rooms={item.rooms}
            element={element} />
        </Link>
      ))}
    </div>
  );
};

export default List;
