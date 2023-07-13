import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCube, Autoplay } from "swiper/modules";
import { AboutData, AboutDataSwiper } from "../../assets/dummy";

const AboutUs = () => {
  return (
    <>
      <section
        id="AboutUs"
        className="flex flex-col -mt-36 w-full p-10 md:p-20 pb-28 lg:flex-row text-txt-color"
      >
        <div className="basis-1/2 ">
          <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-bold mb-14">
            <span className="absolute -top-4 -right-4 w-14 h-14 bg-second-color rounded-full "></span>
            <p className="relative z-10 ">{AboutData.title}</p>
          </h1>
          <p className="mt-6 leading-7 text-sm lg:text-base">
            {AboutData.description}
          </p>
        </div>

        <div className="w-96 lg:mx-28 mt-20">
          <Swiper
            modules={[Pagination, EffectCube, Autoplay]}
            effect={"cube"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            className="w-full"
          >
            {AboutDataSwiper.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div
                    style={{ border: "0.6px solid snow" }}
                    className={`
    
                    ${item.bgColor} relative p-10 leading-loose text-center h-72 w-full  flex flex-col justify-center items-center gap-8
                    `}
                  >
                    <h1 className="font-bold text-xl">{item.title}</h1>
                    <p className="text-sm">{item.description}</p>
                    <button className="font-bold hover:text-red-500">
                      بیشتر بخوانید
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
