import LinkResponsiveMenu from "./LinkResponsiveMenu";
import { Cancel, Logo } from "../../assets";
import { UseStateContext } from "../../context/ContextAPI";
import LinkSocialMedia from "../ContactUs/LinkSocialMedia";
import { NavbarItems, SocialMediaData } from "../../assets/dummy";
import Styles from "./ResponsiveMenu.module.css";

const ResponsiveMenu = () => {
  const { setActiveMenu } = UseStateContext();
  return (
    <section
      className={`${Styles["menu--container"]}  fixed top-0 left-0 w-full min-h-full p-4 bg-slate-800 z-40`}
    >
      <div className="flex items-baseline justify-between p-8 pb-6">
        <button
          onClick={() => {
            setActiveMenu(false);
          }}
        >
          <img
            className="w-10 hover:rotate-180 transition-transform"
            src={Cancel}
            alt=""
          />
        </button>
        <img className="w-36" src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul className="flex flex-col justify-around h-72 py-10 " dir="rtl">
          {NavbarItems.map((item, idx) => {
            return (
              <LinkResponsiveMenu key={idx} name={item.name} href={item.href} />
            );
          })}
        </ul>
      </nav>

      {/* <hr className="my-4" /> */}
      <div className="flex justify-start gap-4 socialMedia mt-4">
        {SocialMediaData.map((item, idx) => {
          return <LinkSocialMedia key={idx} href={item.href} icon={item.icon} />;
        })}
      </div>
    </section>
  );
};

export default ResponsiveMenu;
