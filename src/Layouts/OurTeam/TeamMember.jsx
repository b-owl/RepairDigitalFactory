import Styles from "./TeamMember.module.css";
import LinkSocialMedia from "../../components/ContactUs/LinkSocialMedia";
import { SocialMediaData } from "../../assets/dummy";

const TeamMember = ({ bgSource, name, position }) => {
  return (
    <div
      className={`${Styles.TeamMemberContainer} h-80 w-11/12 relative overflow-hidden`}
    >
      <img className="w-full h-full object-cover opacity-8" src={bgSource} alt="" />
      <div
        className={`${Styles.TeamMemberBox} py-5 px-4 w-11/12 flex flex-col gap-2 absolute -bottom-16 left-3 bg-txt-color
      `}
      >
        <h1 className="font-bold text-xl">{name}</h1>
        <h2 className="font-semibold text-sm">{position}</h2>
        <div className="border-t-2 flex justify-around items-center mt-2 pt-2">
          {SocialMediaData.map((item, idx) => {
            return <LinkSocialMedia key={idx} href={item.href} icon={item.icon} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
