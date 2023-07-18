import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import Comment from "./Comment";
import { CostumerCommentsData } from "../../assets/dummy";

const CostumerComments = () => {
  return (
    <section
      className="flex flex-col w-5/6 pt-10 mx-auto mt-20 pb-28 gap-14"
      id="Comments"
    >
      <h1 className="relative text-2xl font-bold lg:text-4xl ">
        <span className="absolute rounded-full -top-3 -right-4 w-14 h-14 bg-third-color dark:bg-second-color "></span>
        <p className="relative z-10 font-TitrPlus">نظرات مشتریان</p>
      </h1>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          spaceBetween={-20}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          breakpoints={{
            680: {
              slidesPerView: 2,
            },
            300: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
          }}
        >
          {CostumerCommentsData.map((item, idx) => {
            return (
              <SwiperSlide key={idx} className="bg-txt-color dark:bg-main-color">
                <Comment
                  commentPic={item.bgSource}
                  name={item.name}
                  position={item.position}
                  commentText={item.commentText}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default CostumerComments;
