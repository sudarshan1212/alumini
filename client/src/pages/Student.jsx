import img from "../assets/img6.png";

import Banner from "../components/Banner";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import refer from "../assets/alumini/refer.png";

const Student = () => {
  return (
    <div className="pt-20">
      <div className="">
        <Banner img={img}>
          <span className="font-normal font-secondaryText - text-[70px] leading-[100px]">
            Refer a Student
          </span>
        </Banner>
      </div>
      <section className="container mx-auto px-4 pt-20">
        {/* Flex Container for the Image and Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-x-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className=" heading text-[#913A42] ">Refer a Student</h1>
            <h2 className="text-2xl lg:text-3xl text-[#913A42] mb-6 font-normal">
              Introduce a new student and provide them with a strong beginning.
            </h2>
            <p className="text">
              No one knows RJS better than our alumni, which is why we invite
              you to offer scholarships to up to three prospective students you
              believe could thrive at RJS.
            </p>
            <p className="mt-8 text">
              If you know a high school senior—whether a neighbor, a niece, or a
              friend&apos;s child—who has a liberal arts spirit, a passion for
              learning, and a love for community, please refer them to our
              college.
            </p>
            <p className="mt-8 text">
              Simply complete the form below, and we will handle the rest. Your
              referral could help shape their future and enrich our college
              community.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[560px] mb-6 lg:mb-0 lg:pr-6">
            <img
              src={refer}
              alt="Alumni Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="container  flex items-center justify-center py-10">
        <form className="bg-white p-8 rounded-lg  w-full ">
          <h1 className=" heading text-[#913A42] ">
            Alumni Referral Scholarship Form
          </h1>
          <h2 className="text-[45px] font-primaryText mb-4">
            Student Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              <label className="block text-sm font-medium mb-2">Address</label>
              <input
                type="text"
                className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <input
                type="text"
                className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">State</label>
              <input
                type="text"
                className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Zip Code</label>
              <input
                type="text"
                className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <input
                type="text"
                className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Expected Year of Graduation
              </label>
              <input
                type="text"
                className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div className="md:col-span-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-primaryColor"
                />
                <span className="ml-2 text-sm">
                  Do you wish to remain anonymous to this student?
                </span>
              </label>
            </div>
          </div>

          {/* Alumni Information Section */}
          <h2 className="text-2xl font-semibold mb-4 ">Alumni Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Referred By
              </label>
              <input
                type="text"
                className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Passed Out Year
              </label>
              <input
                type="text"
                className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Alumni Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-left">
            <button className=" px-4 pr-10 py-3 relative text-left group  border-[#913A42] border-2  w-auto mt-10  ">
              <div className="text-[#913A42] font-semibold">SUBMIT</div>

              <div className="top-2 left-[90px] absolute bg-white   group-hover:translate-x-3 transition">
                <HiOutlineArrowLongRight className="w-12 h-8 text-6xl text-[#913A42] " />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Student;
