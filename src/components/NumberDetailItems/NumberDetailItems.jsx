import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const NumberDetailItems = ({ count, title, icon }) => {
  const [OnScroll, setOnscroll] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setOnscroll(true)}
      onExit={() => setOnscroll(false)}
    >
      <div className="flex items-center justify-center w-full h-20 gap-2 md:w-auto">
        <div>
          <img className="w-16" src={icon} alt="icon" />
        </div>
        <div>
          <span className="text-lg md:text-2xl text-second-color dark:text-txt-color">
            +{OnScroll && <CountUp start={0} end={count} delay={0} />}
          </span>

          <h6 className="text-base md:text-lg text-main-color dark:text-txt-color">
            {title}
          </h6>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default NumberDetailItems;
