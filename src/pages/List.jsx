import React from 'react';
import { Hits } from '../components';
import Loader from '../helpers/Loader';

const List = ({ isLoading, properties }) => {
  if (isLoading) <Loader />;

  const propsData = properties.hits;

  console.log(propsData);

  return (
    <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-20 md:mt-10 mt-6 lg:px-10 md:mb-10'>
      {isLoading && <Loader />}
      {propsData?.map(item => (
        <Hits key={item.id} price={item.price} name={item.title} img={item.coverPhoto.url} baths={item.baths} rooms={item.rooms} verified={item.isVerified} />
      ))}
    </div>
  );
};

export default List;
