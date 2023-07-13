import NewServiceItem from "./NewServicesItem";
import { NewServicesData } from "../../assets/dummy";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const NewService = () => {
  return (
    <section className="w-5/6 mx-auto">
      <h1 className="relative text-2xl md:3xl lg:text-4xl font-bold  mb-10 ">
        <span className="absolute -top-3 -right-4 w-14 h-14 bg-second-color rounded-full "></span>
        <p className="relative z-10">خدمات جدید</p>
      </h1>

      <div className="w-full lg:p-8">
        <Swiper
          modules={[Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor="true"
          centeredSlides="true"
          spaceBetween={0}
          slidesPerView={4}
          // loop="true"
          pagination={{ clickable: true, dynamicBullets: true }}
          coverflowEffect={{
            rotate: 15,
            stretch: 10,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            700: {
              spaceBetween: 0,
              slidesPerView: 3,
            },
            500: {
              spaceBetween: 100,
              slidesPerView: 2,
            },
            411: {
              spaceBetween: 100,
              slidesPerView: 2,
            },
            300: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
          }}
        >
          {NewServicesData.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <NewServiceItem
                  title={item.title}
                  description={item.description}
                  picSource={item.picSource}
                  href={item.href}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default NewService;
