import { OurTeamData } from "../../assets/dummy";
import TeamMember from "./TeamMember";

const OurTeam = () => {
  return (
    <section id="Experts" className="w-5/6 mx-auto text-center text-second-color">
      <div className="my-10 leading-loose text-center mb-14 text-txt-color">
        <h1 className="relative inline-block mx-auto font-bold text-1xl lg:text-2xl">
          <span className="absolute w-10 h-10 rounded-full -top-2 -right-4 bg-third-color dark:bg-second-color "></span>
          <p className="relative z-10 font-TitrPlus text-main-color dark:text-txt-color">
            متخصصین
          </p>
        </h1>
        <h1 className="text-2xl font-bold text-center lg:text-3xl text-second-color">
          دلیل موفقیت ما{" "}
        </h1>
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {OurTeamData.map((item, idx) => {
          return (
            <TeamMember
              key={idx}
              bgSource={item.bgSource}
              position={item.position}
              name={item.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;
