import Banner from "../components/Banner";
import img from "../assets/img.jpg";

const Gallery = () => {
  const imgs = [img, img, img, img, img, img, img, img, img, img, img, img];
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
      <section className="py-10 grid grid-cols-3 container place-items-center">
        {imgs.map((item, index) => (
          <div key={index} className="w-[404px] h-[295px]">
            <img src={item} alt="" className="" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
