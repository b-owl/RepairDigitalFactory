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
        <h1 className="relative text-2xl md:3xl lg:text-4xl font-bold  mb-10">
          <span className="absolute -top-3 -right-4 w-14 h-14 bg-second-color rounded-full "></span>
          <p className="relative z-10">سرویس ها و خدمات</p>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-8 p-4 lg:p-16">
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

      <div className="text-center mx-auto">
        <button
          style={{ border: "0.6px solid snow" }}
          onClick={() => setReadMore((prev) => !prev)}
          className="rounded-2xl p-2 px-4 border-txt-color text-txt-color mb-20  hover:bg-second-color"
        >
          {ReadMore ? "خواندن بیشتر" : "خواندن کمتر"}
        </button>
      </div>
    </>
  );
};

export default Services;
