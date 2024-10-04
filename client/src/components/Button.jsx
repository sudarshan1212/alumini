import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Button = ({ children }) => {
  return (
    <button className="border px-4 pr-8 py-3 relative text-left group  ">
      <div className="text-white">{children}</div>
      <div className="top-2 left-[130px] absolute bg-[#913A42]  ">
        <HiOutlineArrowLongRight className="w-12 h-8 text-6xl group-hover:translate-x-3 transition text-white" />
      </div>
    </button>
  );
};

export default Button;
