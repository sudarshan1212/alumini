import Banner from "../components/Banner";
import img from "../assets/img7.png";

import per1 from "../assets/alumini/per1.png";
import per2 from "../assets/alumini/per2.png";
import per3 from "../assets/alumini/per3.png";
import per4 from "../assets/alumini/per4.png";
import per5 from "../assets/alumini/per5.png";
import per6 from "../assets/alumini/per6.png";
import per7 from "../assets/alumini/per7.png";
import per8 from "../assets/alumini/per8.png";
import per9 from "../assets/alumini/per9.png";
import per10 from "../assets/alumini/per10.png";
import per11 from "../assets/alumini/per11.png";
import per12 from "../assets/alumini/per12.png";

const Gallery = () => {
  const imgs = [
    per1,
    per2,
    per3,
    per4,
    per5,
    per6,
    per7,
    per8,
    per9,
    per10,
    per11,
    per12,
  ];
  return (
    <div className="pt-20">
      {" "}
      <Banner img={img}>
        <span className="font-normal font-secondaryText - text-[70px] leading-[100px]">
          Gallery
        </span>
      </Banner>
      <section className="container text-center py-10">
        <h1 className=" heading text-[#913A42] ">Alumni Association Gallery</h1>
        <p className="text mt-3">
          Explore our Alumni Association Gallery to relive memorable moments and
          celebrate the achievements of our vibrant community. Browse through
          photos and highlights that showcase the spirit and success of our
          alumni events.
        </p>
      </section>
      <section className="py-10 grid grid-cols-3 gap-y-8 container place-items-center">
        {imgs.map((item, index) => (
          <div key={index} className="w-[404px] h-[295px]">
            <img src={item} alt="" className="imge" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
