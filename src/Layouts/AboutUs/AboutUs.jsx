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
        className="flex flex-col w-full p-10 -mt-36 md:p-20 pb-28 lg:flex-row text-txt-color"
      >
        <div className="basis-1/2 ">
          <h1 className="relative text-2xl font-bold md:text-3xl lg:text-4xl mb-14">
            <span className="absolute rounded-full -top-4 -right-4 w-14 h-14 bg-second-color "></span>
            <p className="relative z-10 ">{AboutData.title}</p>
          </h1>
          <p className="mt-6 text-sm leading-7 lg:text-base">
            {AboutData.description}
          </p>
        </div>

        <div className="mx-auto mt-20 w-72 lg:w-96 lg:mx-28">
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
                    ${item.bgColor} relative p-10 leading-loose text-center h-auto lg:h-72 lg:w-96 flex flex-col gap-8
                    `}
                  >
                    <h1 className="text-xl font-bold">{item.title}</h1>
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
