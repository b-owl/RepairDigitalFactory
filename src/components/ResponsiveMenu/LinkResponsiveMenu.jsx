import { UseStateContext } from "../../context/ContextAPI";

const LinkResponsiveMenu = ({ href, name }) => {
  const { setActiveMenu } = UseStateContext();
  return (
    <li className="hover:text-third-color font-bold text-lg ">
      <a onClick={() => setActiveMenu(false)} href={href}>
        {name}
      </a>
    </li>
  );
};

export default LinkResponsiveMenu;
