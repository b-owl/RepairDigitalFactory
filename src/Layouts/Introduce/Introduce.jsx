import { Navigation, Autoplay, A11y, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import SwiperItem from "./SwiperItem";
import { IntroduceData } from "../../assets/dummy";

const Introduce = () => {
  return (
    <section className="mt-10 text-txt-color lg:px-20">
      <Swiper
        modules={[EffectFade, Navigation, Autoplay, A11y]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation
        effect="fade"
      >
        {IntroduceData.map((item, idx) => {
          return (
            <SwiperSlide key={idx} className="w-full bg-txt-color dark:bg-main-color">
              <SwiperItem
                order={item.order}
                imgSource={item.bgSource}
                prefix={item.prefix}
                title={item.title}
                description="همواره در تلاشیم بهترین تیم رو به استخدام شرکت در بیاوریم که بتوانیم بهترین سرعت و کیفیت را برای مشتریان خود رقم بزنیم"
                href="#"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Introduce;
