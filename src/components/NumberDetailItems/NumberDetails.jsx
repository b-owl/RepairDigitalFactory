import { SectionBg } from "../../assets";
import { FunFact } from "../../assets/dummy";
import NumberDetailItems from "./NumberDetailItems";


const NumberDetails = () => {
  return (
    <section className="relative flex w-full p-8 lg:p-16 min-h-36 text-txt-color">
      <div
        style={{
          background: `#176b87 url(${SectionBg}) center/cover no-repeat`,
          opacity: ".2",
        }}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="z-30 grid gap-4 w-full h-full grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-4">
        {FunFact.map((item, idx) => {
          return (
            <NumberDetailItems
              key={idx}
              icon={item.icon}
              title={item.title}
              count={item.count}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NumberDetails;
