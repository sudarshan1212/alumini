import Banner from "../components/Banner";
import img from "../assets/img.jpg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Board = () => {
  return (
    <div className="pt-20">
      <div className="">
        <Banner img={img}>
          <span className="font-normal font-secondaryText - text-[70px] leading-[100px]">
            Alumni Board
          </span>
        </Banner>
      </div>
      <section className="container mx-auto px-4 py-20">
        {/* Flex Container for the Image and Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-x-10">
          {/* Left: Image Section */}

          {/* Right: Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left gap-x-5">
            <h1 className=" heading text-[#913A42] ">Alumni Board</h1>

            <p className="text mt-12">
              The Alumni Board consists of alumni volunteers elected by their
              peers to oversee the Alumni Association &apos;s activities. Board
              members attend annual meetings on campus, support various alumni
              events, and are assigned to specific committees.
            </p>
            <p className="mt-9 text">
              Those interested in joining the Board should reach out to the
              Office of Alumni Relations for more information.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[482px] mb-6 lg:mb-0 lg:pr-6">
            <img
              src={img}
              alt="Alumni Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container pb-20 flex flex-col items-center justify-center">
        <h1 className="heading text-center text-primaryColor ">
          Stay Connected
        </h1>
        <p className="text text-center mt-5">
          Join the Association today by emailing alumni@rjsschool.com. Stay
          informed about networking opportunities, alumni events, and more.
          Enhance your connections with fellow alumni and with the school.
        </p>
        <button className=" px-4 pr-10 py-3 relative text-left  border-[#913A42] border-2  w-auto mt-10  ">
          <div className="text-[#913A42] font-semibold">
            JOIN OUR ALUMNI ASSOCIATION
          </div>

          <div className="top-2 left-[275px] absolute bg-white  ">
            <HiOutlineArrowLongRight className="w-12 h-8 text-6xl text-[#913A42]" />
          </div>
        </button>{" "}
      </section>

     
    </div>
  );
};

export default Board;
