import Styles from "./TeamMember.module.css";
import LinkSocialMedia from "../../components/ContactUs/LinkSocialMedia";
import { SocialMediaData } from "../../assets/dummy";

const TeamMember = ({ bgSource, name, position }) => {
  return (
    <div
      className={`${Styles.TeamMemberContainer} h-80 w-11/12 relative overflow-hidden rounded-xl`}
    >
      <img className="object-cover w-full h-full opacity-8" src={bgSource} alt="" />
      <div
        className={`${Styles.TeamMemberBox} py-5 px-4 w-11/12 flex flex-col gap-2 absolute -bottom-16 left-3 bg-emerald-200 dark:bg-txt-color rounded-t-lg
      `}
      >
        <h1 className="text-xl font-bold font-TitrPlus">{name}</h1>
        <h2 className="text-sm font-semibold">{position}</h2>
        <div className="flex items-center justify-around pt-2 mt-2 border-t-2">
          {SocialMediaData.map((item, idx) => {
            return <LinkSocialMedia key={idx} href={item.href} icon={item.icon} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
