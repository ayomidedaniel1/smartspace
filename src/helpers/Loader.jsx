import { CgSpinner } from "react-icons/cg";

const Loader = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <CgSpinner className="text-5xl animate-spin" />
    </div>
  );
};

export default Loader;