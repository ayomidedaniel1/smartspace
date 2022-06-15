import React from 'react';
import Loader from '../helpers/Loader';

const List = ({ isLoading, properties }) => {
  if (isLoading) <Loader />;

  return (
    <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:mt-20 md:mt-10 mt-6 lg:px-10 md:mb-10'>
      {/* {isLoading && <Loader />}
      {props.map(item => (
        <Hits key={item.id} price={item.price} name={item.title} img={item.coverPhoto.url} location={item.location[1]} />
      ))} */}
      Hello
    </div>
  );
};

export default List;
