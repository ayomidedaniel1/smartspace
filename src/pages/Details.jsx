import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ properties }) => {
  const { propertyId } = useParams();
  const hits = properties.hits.find(item => item.slug === propertyId);

  console.log(hits);

  return (
    <div className=''>
      Property Details
    </div>
  );
};

export default Details;
