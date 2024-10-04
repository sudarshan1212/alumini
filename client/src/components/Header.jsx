import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import img1 from "../assets/header/img1.png";
import img2 from "../assets/header/img2.png";
import img3 from "../assets/header/img3.png";
import img4 from "../assets/header/img4.png";
import img5 from "../assets/header/img5.png";
import img6 from "../assets/header/img6.png";
import img7 from "../assets/header/img7.png";
import logo2 from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { removeUsers } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const headerImg = [img1, img2, img3, img4, img5, img6, img7];
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userAlumini.user);

  const nav = [
    { path: "/", display: "Home" },
    { path: "/engage-volunteer", display: "Engage & Volunteer" },
    { path: "/alumni-association", display: "Alumni Association" },
    { path: "/alumni-board", display: "Alumni Board" },
    { path: "/alumni-events", display: "Alumni Events" },
    { path: "/refer-student", display: "Refer a Student" },
    { path: "/gallery", display: "Gallery" },
    { path: "/contact-us", display: "Contact Us" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(!isOpen);
    setMenuOpen(false);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(removeUsers());
    toast.success("Bye", {
      style: {
        border: "1px solid #71757F",
        padding: "16px 20px",
        width: "300px",
        color: "#913A42",
        fontSize: "20px",
        fontWeight: "600",
      },
      iconTheme: {
        primary: "green",
        secondary: "#FFFAEE",
      },
    });
    navigate("/");
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(false);
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full fixed backdrop-blur-lg bg-white/70  h-20 b shadow-xl px-4 md:px-20 z-20">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/home">
          <img src={logo2} alt="" className="" />
        </Link>

        {/* Image Gallery (Hidden on Mobile, Show on Medium+) */}
        <div className="hidden md:flex items-center justify-center flex-1 ">
          {headerImg.map((item, index) => (
            <div key={index} className="w-20 md:w-[144px] h-16 md:h-20">
              <img src={item} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Hamburger Menu and Navigation */}
        <div className="flex items-center gap-x-4 md:gap-x-10 relative z-20">
          {/* Hamburger Icon (for mobile) */}

          {!!userInfo && (
            <div className="relative" onClick={handleMouseEnter}>
              <div className="h-8 w-8 rounded-full relative cursor-pointer">
                <FaUserCircle className="w-full h-full text-primaryColor" />
              </div>
              {isOpen && (
                <div className="absolute w-60 px-4 py-3 h-auto bg-white top-12 -right-5 shadow-lg rounded-md">
                  <div className="text-lg font-semibold">
                    {userInfo ? userInfo.name : ""}
                  </div>
                  <div className="text-base text-gray-600">
                    {userInfo ? userInfo.email : ""}
                  </div>
                  <button
                    className="mt-2 px-4 py-1 bg-primaryColor text-white rounded hover:bg-red-600 transition"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
          <div
            onClick={toggleMenu}
            className="h-8 w-8 flex items-center justify-center cursor-pointer"
          >
            {menuOpen ? (
              <FaTimes
                onClick={toggleMenu}
                className="text-4xl text-[#913A42]"
              />
            ) : (
              <GiHamburgerMenu className="text-4xl cursor-pointer text-[#913A42]" />
            )}
          </div>

          {/* Menu (Responsive) */}
          <div
            className={`absolute h-auto px-5 py-5 w-60 top-16 right-0 md:-left-36 rounded-lg bg-[#FDF3F4] shadow-lg transition-all duration-500 ease-in-out transform ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-y-2 text-lg md:text-xl">
              {nav.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="transform hover:scale-110 transition-transform duration-300 ease-in-out hover:text-[#913A42]"
                    onClick={() => setMenuOpen(false)} // Close menu after click
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
