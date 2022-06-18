import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ properties }) => {
  const { propertyId } = useParams();
  const hits = properties.hits.find(item => item.slug === propertyId);

  console.log(hits);

  return (
    <div className='flex lg:mt-20 md:mt-10 mt-6 lg:px-10 md:mb-10'>
      Property Details
    </div>
  );
};

export default Details;
