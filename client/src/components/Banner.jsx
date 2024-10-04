const Banner = ({ img, children }) => {
  return (
    <div>
      <div
        className="relative lg:h-[481px] h-[481px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center lg:mx-12 px-4 text-white flex-col">
          <div className="lg:text-[50px] text-[35px] max-w-[650px] mx-auto text-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
