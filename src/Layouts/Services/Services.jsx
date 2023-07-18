import { useState } from "react";
import ServiceItem from "./ServiceItem";

import Styles from "./ServiceItems.module.css";
import { ServicesData } from "../../assets/dummy";

const Services = () => {
  const [ReadMore, setReadMore] = useState(true);

  return (
    <>
      <section
        id="Services"
        className={`${
          ReadMore ? Styles.ServiceContainer : Styles.ServiceContainerActive
        } w-full mx-auto py-10 px-8 md:px-28 pt-24 overflow-hidden`}
      >
        <h1 className="relative mb-10 text-2xl font-bold md:3xl lg:text-4xl">
          <span className="absolute rounded-full -top-3 -right-4 w-14 h-14 bg-third-color dark:bg-second-color "></span>
          <p className="relative z-10 font-TitrPlus">سرویس ها و خدمات</p>
        </h1>

        <div className="grid grid-cols-1 gap-12 p-4 pb-8 sm:grid-cols-2 lg:grid-cols-3 lg:p-16">
          {ServicesData.map((item, idx) => {
            return (
              <ServiceItem
                key={idx}
                title={item.title}
                description={item.description}
                picSource={item.picSource}
              />
            );
          })}
        </div>
      </section>

      <div className="mx-auto text-center">
        <button
          onClick={() => setReadMore((prev) => !prev)}
          className="p-2 px-4 mt-4 mb-20 border-1 rounded-2xl dark:border-txt-color dark:text-txt-color bg-third-color dark:bg-transparent dark:hover:bg-second-color hover:bg-second-color hover:text-txt-color"
        >
          {ReadMore ? "خواندن بیشتر" : "خواندن کمتر"}
        </button>
      </div>
    </>
  );
};

export default Services;
