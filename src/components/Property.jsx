import React from 'react';

const Property = ({ img }) => {
  return (
    <div className="mt-5 relative">
      <img src={img} alt="img" className='property' />
    </div>
  );
};

export default Property;