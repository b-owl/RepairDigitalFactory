import { SectionBg } from "../../assets";
import { OnlineAppointment } from "../../assets/dummy";

const BookTime = () => {
  return (
    <section className="relative flex items-center justify-between w-full p-8 mt-20 lg:h-96 lg:px-24 lg:p-16">
      <div
        style={{
          background: `#176b87 url(${SectionBg}) center/cover no-repeat`,
          opacity: ".3",
        }}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="z-20">
        <div className="basis-full lg:basis-3/5">
          <h1 className="text-2xl font-bold lg:text-4xl font-TitrPlus">
            {OnlineAppointment.title}
          </h1>
          <p className="w-2/3 my-6 mt-12 text-sm leading-relaxed lg:text-sm lg:w-1/2 text-slate-700 dark:text-slate-200">
            {OnlineAppointment.description}
          </p>
          <button className="p-2 px-4 text-base rounded-2xl bg-third-color dark:bg-second-color hover:bg-second-color hover:text-txt-color dark:hover:bg-third-color lg:text-md">
            {OnlineAppointment.ButtonTxt}
          </button>
        </div>
        <div className="hidden lg:basis-2/5 lg:block">
          <img
            src={OnlineAppointment.picSource}
            className="absolute bottom-0 w-1/4 object-fit left-24"
            alt="BookTime"
          />
        </div>
      </div>
    </section>
  );
};

export default BookTime;
