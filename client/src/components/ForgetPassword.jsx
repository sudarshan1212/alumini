import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BASE_URL } from "../../config";
import toast from "react-hot-toast";
import axios from "axios";
import Loading from "./Loading";

const ForgetPassword = ({ forgetPassPopup, setForgetPassPopup }) => {
  const [popup, setPopup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [OTPloading, setOTPLoading] = useState(false);
  const [OTPpopup, setOTPPopup] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  useEffect(() => {
    setPopup(true);
  }, []);
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setOTPLoading(true);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/forgetpassword`,
        {
          email,
        },
        config
      );
      setUserId(data.data.userID);
      toast.success("OTP sent via email");
      setOTPLoading(false);

      setPopup(false);
      setOTPPopup(true);
    } catch (error) {
      setOTPLoading(false);

      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    const otp2 = otp.join("").trim();
    setOTPLoading(true);
    console.log(otp2);
    console.log(userId);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/updatepassword`,
        {
          userId,
          otp: otp2,
          password,
        },
        config
      );
      toast.success("Password Changed");
      setForgetPassPopup(false);
      setOTPLoading(false);
    } catch (error) {
      setOTPLoading(false);

      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };
  return (
    forgetPassPopup && (
      <div className="fixed top-0 left-0 w-full  h-full bg-black/50 flex items-start justify-center  z-30">
        <div className="max-w-lg  relative  bg-backgroundColor mt-48 lg:p-10 p-5 h-auto w-full rounded-3xl  shadow-mg">
          <div className="max-w-lg mx-auto rounded-xl shadow-lg h-auto bg-white p-5 lg:px-8 py-10 pt-14">
            <button
              onClick={() => setForgetPassPopup(false)}
              id="closebutton"
              className=" absolute top-8 right-8  text-5xl lg:right-12 lg:top-12 text-gray-600"
            >
              <IoClose className="w-8 h-8 lg:w-10 lg:h-10 hover:rotate-90 duration-150 delay-75" />
            </button>
            <h2 className="font-secondaryText -mt-4 lg:mt-1 lg:text-[40px] text-xl text-primaryColor">
              Forget Password
            </h2>

            {popup && (
              <form onSubmit={handleSubmitEmail}>
                <div className="mt-5">
                  <label className="block text-sm font-medium mb-2"></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-full lg:p-3 p-2 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
                  />
                </div>

                <button className="group relative w-full mt-5 flex justify-center h-10 py-1 px-4 border border-transparent font-semibold text-lg rounded-md text-white bg-primaryColor hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  {OTPloading ? <Loading className="text-lg" /> : "Continue"}
                </button>
              </form>
            )}
            {OTPpopup && (
              <form
                onSubmit={handleSubmitOTP}
                className="flex space-x-2   flex-col items-center justify-center mt-5"
              >
                <div className="flex flex-col  w-full  items-center justify-center">
                  <label className="block text-left text-lg font-medium mb-2 ">
                    Enter the OTP
                  </label>
                  <div className="flex gap-x-5">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        maxLength={1} // Limit input to 1 character
                        className="w-12 h-12  p-3 border text-center font-semibold text-2xl border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-medium mb-2 ">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="w-[350px] lg:p-3 p-2 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
                  />
                </div>
                <button className="group relative w-full mt-5 flex justify-center h-10 py-1 px-4 border border-transparent font-semibold text-lg rounded-md text-white bg-primaryColor hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  {OTPloading ? <Loading className="text-lg" /> : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ForgetPassword;
