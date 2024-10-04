import img from "../assets/img.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { BASE_URL } from "../../config";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = formData.email;
    let password = formData.password;
    let name = formData.name;
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/register`,
        { name, email, password },
        config
      );
      setLoading(false);
      toast.success("Welcome");
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error);

      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };
  return (
    <div className="flex h-screen pt-20">
      {/* Left Image Section */}
      <div className="w-1/2 hidden md:block">
        <img
          src={img} // Replace this with your actual image path
          alt="Students"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 px-8">
          <div className="flex justify-between items-center">
            <button className="text-red-700 font-bold text-4xl">&larr;</button>
            <Link
              to="/"
              className="text-red-700 font-medium text-xl mt-2 underline hover:text-red-900"
            >
              Login
            </Link>
          </div>

          <h2 className="heading text-primaryColor">Register</h2>
          <p className="text-lg text-gray-600">
            Welcome! Please register your email address to login to Alumni
            profile.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                  placeholder="Enter your name"
                  className=" lg:text-[18px] rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-sm"
                />
              </div>
              <div className="mt-4">
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  placeholder="Enter your email"
                  className=" lg:text-[18px] rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-sm"
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
                  placeholder="Enter your password"
                  className=" lg:text-[18px] rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Register Now
              </button>
            </div>
          </form>
          <p className="mt-2 text-textColor text-center">
            Already have an account?
            <Link to="/" className="text-primaryColor font-medium ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
