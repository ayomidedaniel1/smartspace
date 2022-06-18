import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ properties }) => {
  const { propertyId } = useParams();
  const thisProperty = properties.hits.find(item => item.slug === propertyId);

  console.log(thisProperty);

  return (
    <div className=''>
      Property Details
    </div>
  );
};

export default Details;
