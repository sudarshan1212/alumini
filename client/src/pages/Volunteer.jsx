import img from "../assets/img2.png";

import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import home3 from "../assets/home/home3.png";
import home4 from "../assets/home/home4.png";
import home1 from "../assets/home/home.png";

const Volunteer = () => {
  return (
    <div className="pt-20">
      <div className="">
        <Banner img={img}>
          <span className="font-normal font-secondaryText - text-[70px] leading-[100px]">
            Engage & Volunteer
          </span>
        </Banner>
      </div>
      <section className="container mx-auto px-4 py-20">
        {/* Flex Container for the Image and Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-x-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className=" heading text-[#913A42] ">Take Part</h1>
            <h2 className="text-2xl lg:text-3xl text-[#913A42] mb-6 font-normal">
              Get involved, catch up with peers, and connect with today’s
              students.
            </h2>
            <p className="text">
              Engaging with your alma mater is a fantastic way to demonstrate
              your support, reconnect with former classmates, and interact with
              current students.
            </p>
            <p className="mt-8 text">
              By sharing your experiences, you provide valuable guidance that
              helps the School maintain its high standards of education and
              personal development. Alumni involvement and volunteer support
              play a crucial role in bolstering RJS&apos;s reputation. We
              encourage you to carve out time from your busy schedule to get
              involved.
            </p>
            <p className="mt-8 text">
              There are various ways to participate, each designed to respect
              your time while maximizing your personal fulfillment.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[560px] mb-6 lg:mb-0 lg:pr-6">
            <img
              src={home1}
              alt="Alumni Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="lg:py-20 py-5 container">
        <h1 className="text-center heading text-primaryColor font-semibold">
          Ways To Be Connected
        </h1>
        <div className="flex lg:flex-row flex-col gap-y-5 justify-between items-center mt-10 h-full px-4 lg:px-0">
          <div className="lg:w-1/2 ">
            <div className="lg:w-[539px]  h-[331px] lg:h-[470px]">
              <img src={home3} alt="" className="w-full h-full bg-cover" />
            </div>
          </div>
          <div className="relative lg:w-1/2 lg:h-[430px] mt-5 lg:mt-0 mx-auto border-r-4 border-primaryColor py-8 pr-10">
            <div className="absolute top-0 right-4 left-auto border-t-4 border-[#913A42] w-2/3 lg:w-1/2 -mr-4"></div>
            <div className="absolute bottom-0 right-4 left-auto w-3/4 border-b-4 border-[#913A42] -mx-4"></div>
            <h1 className="text-primaryColor lg:text-[44px] text-[25px]">
              Alumni Association
            </h1>
            <p className="text lg:mt-10 mt-3">
              The Alumni Association, led by the Alumni Council, is dedicated to
              nurturing lifelong connections within the RJS School community.
            </p>
            <p className="text lg:mt-5 mt-4">
              We are committed to advancing the School’s mission and supporting
              its key objectives with a bold vision and unwavering dedication.
            </p>
            <Link to="/alumni-association">
              <div className="lg:mt-10 mt-5 group">
                <button className="border-2 px-4 pr-8 py-3 relative text-left  border-primaryColor">
                  <div className="text-primaryColor font-primaryText">
                    ALUMNI ASSOCIATION
                  </div>
                  <div className="top-2 left-[190px] absolute bg-white group-hover:translate-x-3 transition  ">
                    <HiOutlineArrowLongRight className="w-12 h-8 text-6xl text-primaryColor" />
                  </div>
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-x-20 gap-y-5 justify-between mt-8 lg:mt-20 h-full lg:px-0 px-4">
          <div className="relative flex flex-col justify-end items-start w-full lg:h-[450px] lg:py-20 mx-auto py-5 pl-5 border-l-4 border-primaryColor  lg:pl-10">
            <div className="absolute bottom-0 left-4 w-3/4 border-b-4 border-[#913A42] -mx-4"></div>
            <h1 className="text-primaryColor lg:text-[44px] text-[25px]">
              Alumni Association
            </h1>
            <p className="text lg:mt-10 mt-4">
              The Alumni Association, led by the Alumni Council, is dedicated to
              nurturing lifelong connections within the RJS School community.
            </p>
            <p className="text mt-4 lg:mt-5">
              We are committed to advancing the School’s mission and supporting
              its key objectives with a bold vision and unwavering dedication.
            </p>
            <Link to="/alumni-board">
              <div className="lg:mt-10 mt-5">
                <button className="border-2 px-4 pr-8 py-3 relative text-left group border-primaryColor">
                  <div className="text-primaryColor font-primaryText">
                    ALUMNI BOARD
                  </div>
                  <div className="top-2 left-[150px] absolute bg-white  ">
                    <HiOutlineArrowLongRight className="w-12 h-8 group-hover:translate-x-3 transition text-6xl text-primaryColor" />
                  </div>
                </button>
              </div>
            </Link>
          </div>
          <div className="flex justify-start">
            <div className="lg:w-1/2">
              <div className="lg:w-[539px]  h-[331px] lg:h-[470px]">
                <img
                  src={home4}
                  alt=""
                  className="w-full h-full object-cover"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
