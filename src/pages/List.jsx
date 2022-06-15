import React from 'react';
import { Hits } from '../components';
import Loader from '../helpers/Loader';

const List = ({ isLoading, properties }) => {
  const props = properties.hits;
  console.log(props);

  if (isLoading) <Loader />;

  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-4 lg:mt-20 md:mt-10 mt-6 lg:px-10 md:mb-10'>
      {props.map(item => (
        <Hits key={item.id} price={item.price} name={item.title} img={item.coverPhoto.url} location={item.location[1]} />
      ))}
    </div>
  );
};

export default List;
