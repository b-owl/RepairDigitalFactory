import { UseStateContext } from "../../context/ContextAPI";
import Link from "../ResponsiveMenu/LinkResponsiveMenu";
import { ContactIcon, Logo, MenuIcon, SearchIcon } from "../../assets/index.js";
import { NavbarItems } from "../../assets/dummy";
import Styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  const { DarkMode, setTheme, setActiveSearch, setActiveContactUs, setActiveMenu } =
    UseStateContext();
  return (
    <nav className="sticky top-0 left-0 z-40 flex flex-col w-full gap-4 p-2 pt-0 dark:text-txt-color text-main-color lg:px-32">
      <div className="flex items-center justify-between p-2 border-gray-400 bg-third-color dark:bg-slate-800 lg:px-10 lg:border-b-2">
        <button
          className="hidden lg:block"
          onClick={() => {
            setActiveContactUs(true);
          }}
        >
          <img className="w-8" src={ContactIcon} alt="contactIcon" />
        </button>

        <div className="flex flex-col items-center justify-center w-28 Logo lg:w-36">
          <img className="w-28" src={Logo} alt="Logo" title="Logo" />

          <div className="hidden mt-2 ToggleTheme lg:block">
            <input
              className={`${Styles.ChangeTheme} hidden`}
              id="checkbox"
              type="checkbox"
              checked={DarkMode}
              onChange={setTheme}
            />
            <label className={Styles.LabelChangeTheme} htmlFor="checkbox"></label>
          </div>
        </div>

        <button
          className="hidden lg:block"
          onClick={() => {
            setActiveSearch(true);
          }}
        >
          <img className="w-8" src={SearchIcon} alt="searchIcon" />
        </button>

        <button
          className="lg:hidden"
          onClick={() => {
            setActiveMenu(true);
          }}
        >
          <img src={MenuIcon} alt="SearchIcon" />
        </button>
      </div>

      <ul
        className={`${Styles.navbarUl} border-b-2 bg-third-color dark:bg-slate-800 py-4 -mt-4 w-full justify-center gap-6 hidden lg:flex`}
      >
        {NavbarItems.map((item, idx) => {
          return <Link key={idx} name={item.name} href={item.href} />;
        })}
      </ul>
    </nav>
  );
};

export default NavbarMenu;
