import { HiOutlineArrowLongRight } from "react-icons/hi2";
import img from "../assets/img.jpg";
import Banner from "../components/Banner";

const Alumini = () => {
  const advantages = [
    "All are welcome.",
    "We are dedicated to furthering the progress of RJS School.",
    "Our focus is on driving progress and making a difference at RJS School.",
    "Our goal is to share the enduring legacy and history of RJS.",
    "We aim to build lifelong connections.",
  ];
  return (
    <div className="pt-20">
      <div className="">
        <Banner img={img}>
          <span className="font-normal font-secondaryText - text-[70px] leading-[100px]">
            Alumni Association
          </span>
        </Banner>
      </div>
      <section className="container py-20">
        <div className="grid grid-cols-4 gap-x-10">
          <div className="col-span-2  flex flex-col items-start justify-center">
            <h1 className=" heading text-[#913A42] ">Alumni Association</h1>
            <h2 className="text-2xl lg:text-3xl text-[#913A42] mb-6 font-normal">
              Maintain your connection with <br /> our alumni group.
            </h2>
            <div className="w-[522px] h-[280px]">
              <img src={img} alt="" className="imge" />
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl lg:text-[40px] text-[#913A42] mb-6 font-normal leading-[50px]">
              Welcome <br /> Alumni
            </h2>
            <p className="text">
              The RJS School Alumni Association, led by the Board of Directors,
              also known as the Alumni Council, acts as ambassadors to
              strengthen connections within the RJS School community. The Board
              fosters enduring relationships between the College and its alumni,
              as well as among alumni themselves. It oversees initiatives that
              support RJS’s mission and advance the School’s key objectives.
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl lg:text-[40px] text-[#913A42] mb-6 font-normal leading-[50px]">
              Association Members
            </h2>
            <p className="text">
              The RJS Alumni Association consists of alumni who are making a
              significant impact, driven by a bold vision and strong ideals. RJS
              School graduates leave with a commitment to make a difference,
              supporting the college and one another, and seizing the endless
              opportunities that lie ahead.
            </p>
          </div>
        </div>
      </section>
      <section className="container  py-20 ">
        <div className="h-[415px] bg-[#FDF3F4] flex justify-between items-center px-14">
          <div className="w-1/2 flex flex-col  items-start">
            <h1 className="heading text-center text-primaryColor ">
              Our Values
            </h1>
            {advantages.map((item, index) => (
              <ul
                key={index}
                className="font-normal marker:text-primaryColor text-[18px] leading-[24px] lg:text-[22px] lg:leading-[28.64px] list-disc list-outside pl-5 mt-4"
              >
                <li className="text-black ">{item}</li>
              </ul>
            ))}
          </div>
          <div className="w-[442px] h-[372px] mb-40">
            <img src={img} alt="" className="imge" />
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

export default Alumini;
