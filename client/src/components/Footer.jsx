import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { RiTwitterXFill } from "react-icons/ri";
import logo2 from "../assets/logo2.png";
import { IoLocationSharp, IoMail } from "react-icons/io5";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/",
    },
    { name: "YouTube", icon: <TfiYoutube />, url: "https://www.youtube.com/" },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },
    {
      name: "Twitter",
      icon: <RiTwitterXFill />,
      url: "https://www.twitter.com/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/",
    },
  ];
  const nav = [
    { path: "/", display: "HOME" },
    { path: "/refer-student", display: "REFER A STUDENT" },
    { path: "/profile", display: "DONATE" },
    { path: "/gallery", display: "Gallery" },
    { path: "/contact-us", display: "CONTACT US" },
    { path: "/login", display: "LOGIN" },
  ];
  const nav2 = [
    { path: "/engage-volunteer", display: "ENGAGE & VOLUNTEER" },

    { path: "/alumni-association", display: "ALUMNI ASSOCIATION" },
    { path: "/alumni-board", display: "ALUMNI BOARD" },
    { path: "/alumni-events", display: "ALUMNI Events" },
  ];

  return (
    <div className="bg-[#FDF3F4] py-10">
      <div className="max-w-[1400px] lg:mx-auto lg:pt-[50px] mx-3">
        <div className="lg:grid flex items-center flex-col justify-center lg:grid-cols-5 lg:grid-rows-1  gap-x-10">
          <div className="lg:col-span-2 col-span-3 ">
            <div className="w-[339px] h-[94px] lg:block flex items-center justify-center">
              <img src={logo2} alt="logo" />
            </div>

            <div className="lg:flex hidden space-x-4  lg:mt-36 mt-8">
              {socialMediaLinks.map((social) => (
                <Link
                  key={social.name}
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-2xl duration-150 transform hover:text-primaryColor hover:scale-110"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-start-3   lg:mt-0 mt-4 lg:text-left text-center ">
            <h1 className="text-primaryColor text-[20px]">Useful Links </h1>
            <ul className="flex flex-col uppercase font-secondaryText lg:mt-5 mt-2 space-y-2 text-black  font-normal text-base">
              {nav.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="transform  lg:text-[20px] transition-transform duration-150 ease-in-out hover:text-primaryColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-start-4 lg:mt-0 mt-8 lg:text-left text-center ">
            <h1 className=" text-[20px] text-primaryColor">Useful Links </h1>
            <ul className="flex flex-col  lg:mt-5 mt-2 space-y-2 text-black  font-secondaryText font-normal text-base">
              {nav2.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`transform hover:text-primaryColor  lg:text-[20px] transition-transform duration-150 ease-in-out `}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 text-center lg:text-left lg:col-start-5 col-span-3   lg:mt-0 mt-10">
            <h1 className="text-primaryColor text-[20px]">
              RJS ALUMNI ASSOCIATION
            </h1>
            <ul className="mt-5 flex flex-col lg:items-start justify-start gap-y-4">
              <li className="flex items-center justify-center gap-x-2">
                <FaPhoneAlt className="text-primaryColor text-xl" />
                <p className="text-[16px] font-secondaryText">
                  +91 63935565656
                </p>
              </li>
              <li className="flex items-center justify-center gap-x-2">
                <FaPhoneAlt className="text-primaryColor text-xl" />
                <p className="text-[16px] font-secondaryText">
                  +91 63935565656
                </p>
              </li>
              <li className="flex items-center justify-center gap-x-2">
                <IoMail className="text-primaryColor text-xl" />
                <p className="text-[16px] font-secondaryText">
                  loremipsumdolor@rjscollege.com
                </p>
              </li>
              <li className="flex items-start justify-center gap-x-2">
                <IoLocationSharp className="text-primaryColor text-2xl" />
                <p className="text-[16px] text-left font-secondaryText">
                  #16th Main, 3rd Block <br /> Koramangala,Near BDA Complex,{" "}
                  <br /> Bangalore-560034.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex lg:hidden space-x-4  lg:mt-36 mt-8">
            {socialMediaLinks.map((social) => (
              <Link
                key={social.name}
                to={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-2xl duration-150 transform hover:text-primaryColor hover:scale-110"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
