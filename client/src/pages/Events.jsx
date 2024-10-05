import Banner from "../components/Banner";
import img from "../assets/img5.png";

import img3 from "../assets/alumini/img3.png";
import img4 from "../assets/alumini/img4.png";
import img5 from "../assets/alumini/img5.png";
import img6 from "../assets/alumini/img6.png";
import img7 from "../assets/alumini/img7.png";

const Events = () => {
  const August = [
    {
      img: img3,
      heading: "Tri-State Area Alumni Event",
      time: "August 12, 2024 6:30 pm - 8:30 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis hendrerit lacinia. Phasellus urna diam, viverra nec nisl id, posuere dapibus felis. Suspendisse vel fermentum urna. Quisque at dictum arcu. Maecenas pulvinar non dui vitae aliquet.",
    },
    {
      img: img4,
      heading: "Tri-State Area Alumni Event",
      time: "August 12, 2024 6:30 pm - 8:30 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis hendrerit lacinia. Phasellus urna diam, viverra nec nisl id, posuere dapibus felis. Suspendisse vel fermentum urna. Quisque at dictum arcu. Maecenas pulvinar non dui vitae aliquet.",
    },
  ];
  const July = [
    {
      img: img5,
      heading: "Tri-State Area Alumni Event",
      time: "August 12, 2024 6:30 pm - 8:30 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis hendrerit lacinia. Phasellus urna diam, viverra nec nisl id, posuere dapibus felis. Suspendisse vel fermentum urna. Quisque at dictum arcu. Maecenas pulvinar non dui vitae aliquet.",
    },
    {
      img: img6,
      heading: "Tri-State Area Alumni Event",
      time: "August 12, 2024 6:30 pm - 8:30 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis hendrerit lacinia. Phasellus urna diam, viverra nec nisl id, posuere dapibus felis. Suspendisse vel fermentum urna. Quisque at dictum arcu. Maecenas pulvinar non dui vitae aliquet.",
    },
    {
      img: img7,
      heading: "Tri-State Area Alumni Event",
      time: "August 12, 2024 6:30 pm - 8:30 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis hendrerit lacinia. Phasellus urna diam, viverra nec nisl id, posuere dapibus felis. Suspendisse vel fermentum urna. Quisque at dictum arcu. Maecenas pulvinar non dui vitae aliquet.",
    },
  ];
  return (
    <div className="pt-20">
      {" "}
      <Banner img={img}>
        <span className="font-normal font-secondaryText - text-[70px] leading-[100px]">
          Alumni Events
        </span>
      </Banner>
      <section className="container shadow-lg p-5 my-10">
        <div>
          <h1 className="w-full border-b-2 border-b-primaryColor text-[28px] text-primaryColor  font-secondaryText">
            August 2024
          </h1>
          <div className="mt-10">
            {August.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-x-20 mt-5"
              >
                <div className="w-[392px] h-[238px]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="w-1/2">
                  <h1 className="w-full border-b-primaryColor text-[28px] text-primaryColor font-secondaryText">
                    August 2024
                  </h1>
                  <p className="font-secondaryText text-[20px] mt-1">
                    August 12, 2024 6:30 pm - 8:30 pm
                  </p>
                  <p className="text mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent mattis hendrerit lacinia. Phasellus urna diam,
                    viverra nec nisl id, posuere dapibus felis. Suspendisse vel
                    fermentum urna. Quisque at dictum arcu. Maecenas pulvinar
                    non dui vitae aliquet.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="w-full border-b-2 border-b-primaryColor text-[28px] text-primaryColor  font-secondaryText">
            July 2024
          </h1>
          <div className="mt-10">
            {July.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-x-20 mt-5"
              >
                <div className="w-[392px] h-[238px]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="w-1/2">
                  <h1 className="w-full border-b-primaryColor text-[28px] text-primaryColor font-secondaryText">
                    August 2024
                  </h1>
                  <p className="font-secondaryText text-[20px] mt-1">
                    August 12, 2024 6:30 pm - 8:30 pm
                  </p>
                  <p className="text mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent mattis hendrerit lacinia. Phasellus urna diam,
                    viverra nec nisl id, posuere dapibus felis. Suspendisse vel
                    fermentum urna. Quisque at dictum arcu. Maecenas pulvinar
                    non dui vitae aliquet.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
