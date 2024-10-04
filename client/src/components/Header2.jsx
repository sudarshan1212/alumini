import { Link } from "react-router-dom";
import img1 from "../assets/header/img1.png";
import img2 from "../assets/header/img2.png";
import img3 from "../assets/header/img3.png";
import img4 from "../assets/header/img4.png";
import img5 from "../assets/header/img5.png";
import img6 from "../assets/header/img6.png";
import img7 from "../assets/header/img7.png";
import logo2 from "../assets/logo2.png";
const Header2 = () => {
  const headerImg = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <div className="w-full fixed backdrop-blur-lg bg-white/70  h-20 b shadow-xl px-4 md:px-20 z-20">
      <div className="flex justify-center items-center h-full">
        <Link to="/">
          <img src={logo2} alt="" className="" />
        </Link>
        <div className="hidden md:flex items-center justify-center flex-1 ">
          {headerImg.map((item, index) => (
            <div key={index} className="w-20 md:w-[144px] h-16 md:h-20">
              <img src={item} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header2;
