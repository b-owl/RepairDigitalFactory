import { UseStateContext } from "../../context/ContextAPI";

const LinkResponsiveMenu = ({ href, name }) => {
  const { setActiveMenu } = UseStateContext();
  return (
    <li className="text-lg font-bold dark:hover:text-third-color hover:text-second-color">
      <a onClick={() => setActiveMenu(false)} href={href}>
        {name}
      </a>
    </li>
  );
};

export default LinkResponsiveMenu;
