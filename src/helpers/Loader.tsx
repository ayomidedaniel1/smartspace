import React from 'react';
import { CgSpinner } from "react-icons/cg";

const Loader: React.FC = () => {
  return (
    <div className='h-screen grid place-items-center' role="status" aria-label="loading">
      <CgSpinner className="text-5xl animate-spin text-[#f85a47]" />
    </div>
  );
};

export default Loader;
