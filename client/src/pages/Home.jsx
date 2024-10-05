import Banner from "../components/Banner";
import img from "../assets/img.jpg";
import per1 from "../assets/home/per1.png";
import per2 from "../assets/home/per2.png";
import per3 from "../assets/home/per3.png";
import per4 from "../assets/home/per4.png";
import per5 from "../assets/home/per5.png";
import per6 from "../assets/home/per6.png";
import per7 from "../assets/home/per7.png";
import per8 from "../assets/home/per8.png";
import ban from "../assets/home/ban.png";
import home5 from "../assets/home/home5.png";
import home6 from "../assets/home/home6.png";
import home3 from "../assets/home/home3.png";
import home4 from "../assets/home/home4.png";
import home2 from "../assets/home/home2.png";
import home1 from "../assets/home/home.png";

import Button from "../components/Button";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Home = () => {
  const members = [per1, per2, per3, per4, per5, per6, per7, per8];
  const combinedMembers = [
    {
      img: per1,
      classNames: "absolute left-1/2 lg:top-1/2 top-10",
      size: "lg:size-[112px] size-[90px]",
      name: "Rahul Kapoor",
    },
    {
      img: per2,
      classNames: "absolute lg:left-20 lg:bottom-0 bottom-0 left-10",
      size: "size-[70px]",
    },
    {
      img: per3,
      classNames:
        "absolute lg:right-20 lg:bottom-0 bottom-24 left-24 lg:left-auto",
      size: "size-[70px]",
    },
    {
      img: per4,
      classNames: "absolute lg:right-28 bottom-10 right-11 lg:bottom-auto",
      size: "size-[70px]",
    },
    {
      img: per5,
      classNames:
        "absolute lg:left-52 lg:top-10 bottom-36 lg:bottom-auto left-56",
      size: "size-[70px]",
    },
    {
      img: per6,
      classNames: "absolute lg:left-96 lg:bottom-20 -bottom-24 left-32",
      size: "size-[70px]",
    },
    {
      img: per7,
      classNames:
        "absolute lg:right-[800px] lg:bottom-80 bottom-36 left-2 lg:left-auto",
      size: "size-[70px]",
    },
    {
      img: per8,
      classNames:
        "absolute lg:right-[400px] lg:bottom-96 bottom-4 left-36 lg:left-auto",
      size: "size-[70px]",
    },
    {
      img: per8,
      classNames: "absolute lg:right-56 lg:bottom-20 -bottom-24 right-32",
      size: "size-[70px]",
    },
  ];
  const albums = [
    { imgSrc: ban, title: "32 Years Reunion", subtitle: "Album 2022" },
    { imgSrc: ban, title: "32 Years Reunion", subtitle: "Album 2022" },
    { imgSrc: ban, title: "32 Years Reunion", subtitle: "Album 2022" },
  ];
  return (
    <div className="">
      <div className="pt-20">
        <Banner img={img}>
          <span className="font-normal font-secondaryText lg:text-[85px] text-[55px]">
            {" "}
            RJS School
          </span>
          <br />
          <span className="lg:text-[56px] text-[35px] font-normal font-secondaryText">
            Alumni Association
          </span>
        </Banner>
      </div>
      {/* FIRST SECTION  */}
      <section className="container mx-auto px-4 lg:py-20 py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-x-8">
          <div className="w-full lg:w-1/2 lg:h-[482px] h-[376px] mb-6 lg:mb-0 lg:pr-6">
            <img
              src={home1}
              alt="Alumni Event"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h1 className=" heading text-[#913A42]  ">Stay Connected</h1>
            <h2 className="text-2xl lg:text-3xl text-[#913A42] mb-4 lg:mb-6 font-normal">
              Welcome Alumni
            </h2>
            <p className="text">
              Welcome to the RJS School Alumni Association! Our association
              serves as a vibrant community where former students of RJS come
              together to reconnect, share experiences, and support each other.
            </p>
            <p className="lg:mt-8 mt-3 text">
              Here, you’ll find opportunities to network with fellow alumni,
              stay updated on school news, and participate in events that
              celebrate our shared achievements and heritage. We are dedicated
              to fostering a lifelong connection with our alma mater and
              creating a strong, supportive network that continues to thrive
              long after graduation. Join us in strengthening the bonds that
              make our alumni community truly exceptional.
            </p>
          </div>
        </div>
      </section>
      {/* SECOND SECTION  */}
      <section className="container  py-14 lg:py-20 relative">
        <div className="lg:w-full w-[350px] lg:h-[533px] h-[483px] mx-auto  ">
          <img src={home2} alt="" className="w-full h-full bg-cover" />
        </div>
        <div className="lg:h-[637px] py- h-auto lg:w-[421px] w-[303px] bg-[#913A42] absolute bottom-44 right-9 lg:top-5 lg:left-36 lg:py-10 py-5 px-5 lg:px-10">
          <h1 className="font-secondaryText lg:text-[60px] text-[35px] text-white lg:leading-[71.58px]">
            Engage & Volunteer
          </h1>
          <p className="text text-white lg:mt-8 mt-3">
            Get involved with the RJS School Alumni Association by volunteering
            and engaging with our community. Whether organizing events,
            mentoring students, or supporting initiatives, your participation
            helps strengthen our network and enriches the alumni experience.
            Join us and make a meaningful impact!
          </p>
          <Link to="/engage-volunteer">
            <Button>GET INVOLVED</Button>
          </Link>
        </div>
      </section>
      {/* THIRD SECTION  */}
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
      {/* FOURTH SECTION  */}
      <section className="flex lg:flex-row gap-y-5 flex-col justify-between items-start container lg:pt-10 px-4 lg:px-0 gap-x-5">
        <div className="max-w-xl">
          <h1 className="heading text-primaryColor font-semibold lg:leading-[55px]">
            Ways To Stay Connected
          </h1>
          <p className="text lg:mt-10 mt-4">
            Attend our annual events, refer a student, update your information,
            check out our Alumni Spotlight, and complete our Alumni Survey.
          </p>

          <div className="flex flex-col gap-y-4 mt-5 lg:mt-12 ">
            <Link
              to="/alumni-events"
              className=" px-4 pr-8 py-3 flex items-center justify-between w-full text-left bg-[#913A42]  lg:w-[688px] z-10 "
            >
              <div className="text-white">Alumni Events</div>

              <div className="  bg-[#913A42]  ">
                <HiOutlineArrowLongRight className="w-12 h-8 text-6xl text-white" />
              </div>
            </Link>
            <Link
              to="/refer-student"
              className=" px-4 pr-8 py-3 flex items-center justify-between  text-left bg-[#913A42] shadow-xl  w-full lg:w-[688px] z-10 "
            >
              <div className="text-white">Refer a Student</div>

              <div className="  bg-[#913A42]  ">
                <HiOutlineArrowLongRight className="w-12 h-8 text-6xl text-white" />
              </div>
            </Link>{" "}
          </div>
        </div>
        <div className="">
          <div className=" lg:h-[618px] h-[287px]">
            <img src={home6} alt="" className="w-full h-full bg-cover" />
          </div>
        </div>
      </section>
      {/*Give Today*/}
      <section className="lg:max-w-[1020px] lg:mx-auto relative mb-56 lg:my-0 py-10 lg:py-20 px-4 lg:px-0">
        <div className="lg:w-[551px] h-[435px] lg:h-[631px] ">
          <img src={home5} alt="" className="w-full h-full bg-cover" />
        </div>
        <div className="absolute w-[314px] mx-auto h-[404px] lg:w-[628px] lg:h-[484px] left-8 bg-primaryColor py-2 -bottom-44 lg:top-44 lg:left-96 lg:py-10 px-10">
          <h1 className="heading text-white">Give Today</h1>
          <p className="text lg:mt-5 text-white">
            Support RJS Alumni Association today and help us continue making a
            difference. Your contribution enables us to fund scholarships,
            enhance programs, and support the ongoing success of our alumni and
            current students. Every gift, big or small, has a meaningful impact
            on our community. Join us in shaping the future of RJS by giving
            today.
          </p>
          <Link to="/alumni-events">
            <button className="border px-4 pr-5 py-3 relative text-left bg-[#913A42]  w-36 lg:mt-10 mt-5 group ">
              <div className="text-white">Alumni Events</div>

              <div className="top-2 left-[118px] absolute bg-[#913A42]  ">
                <HiOutlineArrowLongRight className="w-12 h-8 text-6xl text-white group-hover:translate-x-3 transition" />
              </div>
            </button>
          </Link>
        </div>
      </section>
      {/* RJS Publications */}
      <section className=" lg:py-20 mt-5 bg-[#FDF3F4]">
        <div className="container">
          <h1 className="heading text-center text-primaryColor">
            RJS Publications
          </h1>
          <div className="grid lg:grid-cols-3 px-4 gap-y-4">
            {albums.map((album, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="lg:w-[389px] lg:h-[437px] h-[381px]">
                  <img src={album.imgSrc} alt="" className="h-full w-full" />
                </div>
                <p className="text mt-3 text-center">
                  {album.title} <br /> {album.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container py-1 ">
        <h1 className="heading text-center text-primaryColor my-10 ">
          Alumni Stories
        </h1>
        <div className="relative w-full  min-h-screen lg:min-h-[500px] container ">
          {combinedMembers.map((member, index) => (
            <div
              key={index}
              className={`${member.classNames} transform translate-x-0 ${member.size} bg-gray-400 rounded-full`}
            >
              <img
                src={member.img}
                alt={`Person ${index + 1}`}
                className="w-full h-full bg-cover rounded-full"
              />
              {member.name && index === 0 && (
                <div className="absolute lg:w-[400px] w-[350px] top-25 -left-32 h-54 py-5 px-4 shadow-lg text-center">
                  <h1 className="font-secondaryText font-semibold text-2xl">
                    {member.name}
                  </h1>
                  <p className="font-secondaryText text-base mt-5">
                    I &apos; ll never forget the sense of camaraderie that
                    defined our class. Whether we were competing on the field or
                    collaborating on group projects, we always had each other’s
                    backs. Our teachers and mentors challenged us to think
                    critically and pursue our passions, and our classmates
                    cheered us on every step of the way. The friendships I
                    formed in the Class of 1990 are some of the most meaningful
                    relationships in my life.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="container">
        {" "}
        <h1 className="heading text-center text-primaryColor mt-44 max-w-[250px] lg:max-w-max mx-auto ">
          Meet The Alumni Board
        </h1>
        <div className="grid lg:grid-cols-4 max-w-[1200px] gap-y-7 mx-auto  lg:py-10 pb-10  place-items-center">
          {members.map((item, index) => (
            <div
              key={index}
              className="w-[258px] h-[408px] bg-[#FDF3F4] shadow-md rounded-lg overflow-hidden"
            >
              <div className="w-[257px] h-[267px]">
                <img
                  src={item}
                  alt=""
                  className="imge w-full h-full object-cover"
                />
              </div>
              <div className="text-center py-5">
                <h1 className="font-secondaryText font-semibold text-2xl text-primaryColor">
                  Lorem Ipsum
                </h1>
                <p>
                  Vice President of Institutional Advancement, Marketing &
                  Communications
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
