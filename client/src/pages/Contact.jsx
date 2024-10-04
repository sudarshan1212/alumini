import { HiOutlineArrowLongRight } from "react-icons/hi2";
import img from "../assets/img.jpg";
import Banner from "../components/Banner";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="pt-20">
      {" "}
      <Banner img={img}>
        <span className="font-normal font-secondaryText - text-[70px] leading-[100px]">
          Gallery
        </span>
      </Banner>
      <section className="container py-20  flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl gap-x-10">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <div className=" w[443px] h-[86px] bg-[#FDF3F4] flex  items-center px-5 gap-x-5  shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center">
                <FaPhoneAlt className="text-primaryColor text-xl" />
              </div>
              <div>
                <h1 className="text-[20px] font-secondaryText">Phone Number</h1>
                <p className="text-[16px] font-secondaryText">
                  +91 63935565656
                </p>
              </div>
            </div>
            <div className=" w[443px] h-[86px] bg-[#FDF3F4] flex  items-center px-5 gap-x-5  shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center">
                <IoMail className="text-primaryColor text-xl" />
              </div>
              <div>
                <h1 className="text-[20px] font-secondaryText">
                  Email Address
                </h1>
                <p className="text-[16px] font-secondaryText">
                  loremipsumdolor@gmail.com
                </p>
              </div>
            </div>
            <div className=" w[443px] h-[138px] bg-[#FDF3F4] flex  items-center px-5 gap-x-5  shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center">
                <IoLocationSharp className="text-primaryColor text-xl" />
              </div>
              <div>
                <h1 className="text-[20px] font-secondaryText">Location</h1>
                <p className="text-[16px] font-secondaryText">
                  #16th Main, 3rd Block Koramangala, Near BDA Complex,
                  Bangalore-560034.
                </p>
              </div>
            </div>
          </div>

          {/* Send a Message Form */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-[35px]  font-secondaryText font-semibold mb-6 text-primaryColor">
              Send a Message
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
                />
              </div>
            </div>
            <div className="text-left">
              <button className=" px-4 pr-10 py-3 relative text-left group  border-[#913A42] border-2  w-auto mt-10  ">
                <div className="text-[#913A42] font-semibold">SUBMIT</div>

                <div className="top-2 left-[90px] absolute bg-white   group-hover:translate-x-3 transition">
                  <HiOutlineArrowLongRight className="w-12 h-8 text-6xl text-[#913A42] " />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-20">
        <h1 className="heading text-center text-primaryColor ">
          Find us on Google Maps
        </h1>
        <div className="max-w-6xl mx-auto mt-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.328806656811!2d77.62334600000001!3d12.929278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145be2d86c2f%3A0xad6ff7b9929f191f!2sR.J.S.%20First%20Grade%20College!5e0!3m2!1sen!2sin!4v1727808479659!5m2!1sen!2sin"
            width="1172"
            height="484"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
