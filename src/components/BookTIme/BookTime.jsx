import { SectionBg } from "../../assets";
import { OnlineAppointment } from "../../assets/dummy";

const BookTime = () => {
  return (
    <section className="mt-20 flex justify-between items-center w-full lg:h-96 lg:px-24 p-8 lg:p-16 relative">
      <div
        style={{
          background: `#176b87 url(${SectionBg}) center/cover no-repeat`,
          opacity: ".3",
        }}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="z-20">
        <div className="basis-full lg:basis-3/5">
          <h1 className="text-2xl lg:text-4xl font-bold">
            {OnlineAppointment.title}
          </h1>
          <p className="text-sm lg:text-sm my-6 mt-12 w-2/3 lg:w-1/2 leading-relaxed">
            {OnlineAppointment.description}
          </p>
          <button className="rounded bg-second-color hover:bg-third-color p-2 px-4 text-base lg:text-xl font-semibold">
            {OnlineAppointment.ButtonTxt}
          </button>
        </div>
        <div className="lg:basis-2/5 hidden lg:block">
          <img
            src={OnlineAppointment.picSource}
            className="w-1/4 object-fit absolute left-24 bottom-0"
            alt="BookTime"
          />
        </div>
      </div>
    </section>
  );
};

export default BookTime;
