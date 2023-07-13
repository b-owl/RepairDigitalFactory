import { OurTeamData } from "../../assets/dummy";
import TeamMember from "./TeamMember";

const OurTeam = () => {
  return (
    <section id="Experts" className="w-5/6 mx-auto text-center text-second-color">
      <div className="text-center my-10 mb-14 leading-loose text-txt-color">
        <h1 className="inline-block relative text-1xl lg:text-2xl font-bold mx-auto">
          <span className="absolute -top-2 -right-4 w-10 h-10 bg-second-color rounded-full "></span>
          <p className="relative z-10">متخصصین</p>
        </h1>
        <h1 className="font-bold text-2xl lg:text-3xl text-center">
          دلیل موفقیت ما{" "}
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-4 place-items-center">
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
