import { UseStateContext } from "../../context/ContextAPI";
import Link from "../ResponsiveMenu/LinkResponsiveMenu";
import { ContactIcon, Logo, MenuIcon, SearchIcon } from "../../assets/index.js";
import { NavbarItems } from "../../assets/dummy";
import Styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  const { setActiveSearch, setActiveContactUs, setActiveMenu } = UseStateContext();
  return (
    <nav className="flex flex-col w-full gap-4 pt-0 p-2 text-white lg:px-32 sticky top-0 left-0 z-40">
      <div className="bg-slate-800 flex items-center justify-between p-2 border-gray-400 lg:px-10 lg:border-b-2">
        <button
          className="hidden lg:block"
          onClick={() => {
            setActiveContactUs(true);
          }}
        >
          <img className="w-8" src={ContactIcon} alt="contactIcon" />
        </button>

        <div className="Logo w-32 lg:w-36">
          <img src={Logo} alt="Logo" title="Logo" />
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
        className={`${Styles.navbarUl} border-b-2 bg-slate-800 py-4 -mt-4 w-full justify-center gap-6 hidden lg:flex`}
      >
        {NavbarItems.map((item, idx) => {
          return <Link key={idx} name={item.name} href={item.href} />;
        })}
      </ul>
    </nav>
  );
};

export default NavbarMenu;
