import React from 'react';
import { Hits } from '../components';
import Loader from '../helpers/Loader';

const List = ({ isLoading, properties }) => {
  const props = properties.hits;

  if (isLoading) <Loader />;

  return (
    <div className='flex lg:mt-20 md:mt-10 mt-6 lg:px-10 md:mb-10'>
      {props.map(item => (
        <Hits key={item.id} price={item.price} name={item.title} />
      ))}
    </div>
  );
};

export default List;
