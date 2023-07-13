import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import Comment from "./Comment";
import { CostumerCommentsData } from "../../assets/dummy";

const CostumerComments = () => {
  return (
    <section
      className="w-5/6 flex flex-col mt-20 pt-10 pb-28 gap-14 mx-auto"
      id="Comments"
    >
      <h1 className="relative text-4xl font-bold ">
        <span className="absolute -top-3 -right-4 w-14 h-14 bg-second-color rounded-full "></span>
        <p className="relative z-10">نظرات مشتریان</p>
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
              <SwiperSlide key={idx} className="bg-main-color">
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
