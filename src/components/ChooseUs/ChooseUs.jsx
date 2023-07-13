import { WhyChoseUs } from "../../assets";
import { WhyChooseUsData } from "../../assets/dummy";

const ChooseUs = () => {
  return (
    <section className="py-10 w-5/6 h-auto mx-auto">
      <div className="text-center my-10 mb-14 leading-loose">
        <h1 className="inline-block relative md:text-2xl font-bold mx-auto">
          <span className="absolute -top-2 -right-4 w-10 h-10 bg-second-color rounded-full "></span>
          <p className="relative z-10">راه عالی شما</p>
        </h1>
        <h1 className="font-bold text-2xl md:text-3xl text-center">
          چرا باید ما را انتخاب کنید؟
        </h1>
      </div>

      <div className="flex gap-12 flex-col md:flex-row text-main-color">
        <div className="basis-full md:basis-1/2 flex justify-center flex-col gap-6 md:gap-8 order-1 md:order-none">
          {WhyChooseUsData.map((item, idx) => {
            return (
              <div
                key={idx}
                className="p-4 flex items-center justify-start bg-txt-color rounded  gap-4"
              >
                <img className="w-1/6 h-2/3" src={item.icon} alt="" />
                <div>
                  <h4 className="font-bold md:font-semibold text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm my-4 text-second-color">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:basis-1/2 flex flex-col">
          <img className="mx-auto w-5/6" src={WhyChoseUs} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
