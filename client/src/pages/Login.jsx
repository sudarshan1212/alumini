import { useState } from "react";
import img from "../assets/img.jpg";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { BASE_URL } from "../../config";
import axios from "axios";
import { addUsers } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import ForgetPassword from "../components/ForgetPassword";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [popup, setPopup] = useState(false);
  const [OTPpopup, setOTPPopup] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [OTPloading, setOTPLoading] = useState(false);
  const [forgetPassPopup, setForgetPassPopup] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move focus to the previous input if the current is empty
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value); // Update the state with the input value
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = formData.email;
    let password = formData.password;
    setLoading(true);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/login`,
        {
          email,
          password,
        },
        config
      );
      dispatch(
        addUsers({
          email: data.message.email,
          name: data.message.name,
        })
      );
      setLoading(false);
      toast.success("Welcome");
      navigate("/");
    } catch (error) {
      setLoading(false);

      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
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
        `${BASE_URL}/requestOTP`,
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
        `${BASE_URL}/verifyOTP`,
        {
          userId,
          otp: otp2,
        },
        config
      );
      toast.success("Please Register");
      navigate("/sign-up");
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
    <div className="">
      {" "}
      <div className="flex h-screen pt-20">
        {/* Right Form Section */}
        <div className="w-full md:w-2/3 bg-white flex items-center justify-center">
          <div className="max-w-md w-full space-y-8 px-8">
            <div className="flex justify-between items-center">
              <button className="text-red-700 font-bold text-4xl">
                &larr;
              </button>
              <button
                // to="/sign-up"
                onClick={() => setPopup(true)}
                className="text-red-700 font-medium text-xl mt-2 underline hover:text-red-900"
              >
                Register
              </button>
            </div>

            <h2 className="heading text-primaryColor">Login</h2>
            <p className="text-lg text-gray-600">
              Welcome! Please fill username and password to sign in into your
              account.
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm">
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                    value={formData.email}
                    name="email"
                    className=" lg:text-[18px] rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-sm"
                  />
                </div>
                <div className="mt-4">
                  <input
                    onChange={handleInputChange}
                    type="password"
                    value={formData.password}
                    name="password"
                    placeholder="Enter your password"
                    className=" lg:text-[18px] rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-sm"
                  />
                </div>
              </div>
              <p
                onClick={() => setForgetPassPopup(true)}
                className="font-secondaryText text-right font-semibold hover:underline  "
              >
                Forgot your password?
              </p>

              <div>
                <button className="group relative w-full flex justify-center h-10 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  {loading ? <Loading className="text-lg" /> : "Continue"}
                </button>
              </div>
            </form>
            <p className="mt-2 text-textColor text-center">
              Don&apos;t have an account?
              <button
                onClick={() => setPopup(true)}
                className="text-primaryColor font-medium ml-1 hover:underline "
              >
                SignUp
              </button>
            </p>
          </div>
        </div>
        <div className="w-full hidden md:block">
          {/* Left Image Section */}

          <img
            src={img} // Replace this with your actual image path
            alt="Students"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {popup && (
        <div className="fixed top-0 left-0 w-full  h-full bg-black/50 flex items-start justify-center  z-30">
          <div className="max-w-lg  relative  bg-backgroundColor mt-48 lg:p-10 p-5 h-auto w-full rounded-3xl  shadow-mg">
            <div className="max-w-lg mx-auto rounded-xl shadow-lg h-auto bg-white p-5 lg:px-8 py-10 pt-14">
              <button
                onClick={() => setPopup(false)}
                id="closebutton"
                className=" absolute top-8 right-8  text-5xl lg:right-12 lg:top-12 text-gray-600"
              >
                <IoClose className="w-8 h-8 lg:w-10 lg:h-10 hover:rotate-90 duration-150 delay-75" />
              </button>
              <h2 className="font-secondaryText -mt-5 lg:mt-2 lg:text-[40px] text-xl text-primaryColor">
                Verify Your Account
              </h2>

              <form onSubmit={handleSubmitEmail}>
                <div className="mt-5">
                  <label className="block text-sm font-medium mb-2"></label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    className="w-full lg:p-3 p-2 border border-primaryColor bg-[#FDF3F4] rounded-md focus:outline-none focus:ring-1 focus:ring-primaryColor"
                  />
                </div>

                <button className="group relative w-full mt-5 flex justify-center h-10 py-1 px-4 border border-transparent font-semibold text-lg rounded-md text-white bg-primaryColor hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  {OTPloading ? <Loading className="text-lg" /> : "Continue"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {OTPpopup && (
        <div className="fixed top-0 left-0 w-full  h-full bg-black/50 flex items-start justify-center  z-30">
          <div className="max-w-lg  relative  bg-backgroundColor mt-48 lg:p-10 p-5 h-auto w-full rounded-3xl  shadow-mg">
            <div className="max-w-lg mx-auto rounded-xl shadow-lg h-auto bg-white p-5 lg:px-8 py-10 pt-14">
              <button
                onClick={() => setOTPPopup(false)}
                id="closebutton"
                className=" absolute top-8 right-8  text-5xl lg:right-12 lg:top-12 text-gray-600"
              >
                <IoClose className="w-8 h-8 lg:w-10 lg:h-10 hover:rotate-90 duration-150 delay-75" />
              </button>
              <h2 className="font-secondaryText -mt-5 lg:mt-2 lg:text-[40px] text-xl text-primaryColor">
                Verify Your Account
              </h2>

              <form
                onSubmit={handleSubmitOTP}
                className="flex space-x-2 flex-col items-center justify-center mt-5"
              >
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
                <button className="group relative w-full mt-5 flex justify-center h-10 py-1 px-4 border border-transparent font-semibold text-lg rounded-md text-white bg-primaryColor hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  {OTPloading ? <Loading className="text-lg" /> : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <ForgetPassword
        forgetPassPopup={forgetPassPopup}
        setForgetPassPopup={setForgetPassPopup}
      />
    </div>
  );
};

export default Login;
