import ChooseUsItem from "./ChooseUsItem.jsx";

import { WhyChoseUs } from "../../assets";
import { WhyChooseUsData } from "../../assets/dummy";

const ChooseUs = () => {
  return (
    <section className="w-5/6 h-auto py-10 mx-auto">
      <div className="my-10 leading-loose text-center mb-14">
        <h1 className="relative inline-block mx-auto font-bold md:text-2xl">
          <span className="absolute w-10 h-10 rounded-full -top-2 -right-4 bg-third-color dark:bg-second-color "></span>
          <p className="relative z-10 font-TitrPlus">راه عالی شما</p>
        </h1>
        <h1 className="text-2xl font-bold text-center md:text-3xl text-second-color">
          چرا باید ما را انتخاب کنید؟
        </h1>
      </div>

      <div className="flex flex-col gap-12 md:flex-row text-main-color">
        <div className="flex flex-col justify-center order-1 gap-6 basis-full md:basis-1/2 md:gap-8 md:order-none">
          {WhyChooseUsData.map((item, idx) => {
            return <ChooseUsItem key={idx} item={item} />;
          })}
        </div>

        <div className="flex flex-col md:basis-1/2">
          <img className="w-5/6 mx-auto" src={WhyChoseUs} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
