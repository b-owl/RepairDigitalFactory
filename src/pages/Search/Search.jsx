import { createPortal } from "react-dom";
import { UseStateContext } from "../../context/ContextAPI";

import Styles from "./Search.module.css";
import { Cancel } from "../../assets";

const Search = () => {
  const { setActiveSearch, ActiveSearch } = UseStateContext();

  return createPortal(
    <section
      className={`${
        ActiveSearch == false
          ? Styles["search--container"]
          : Styles["search--container-show"]
      }
    flex items-center justify-center bg-[#000000e6] w-full h-full fixed top-0 left-0 z-50`}
    >
      <button
        className="absolute top-10 right-10"
        onClick={() => {
          setActiveSearch(false);
        }}
      >
        <img
          className="w-10 transition-transform hover:rotate-180"
          src={Cancel}
          alt=""
        />
      </button>

      <div
        id="search--container"
        className="flex items-center justify-start w-5/6 h-12 lg:w-3/4"
      >
        <label htmlFor="search--container"></label>
        <input
          className="w-full h-full text-white bg-transparent border-b-4 border-white focus:border-red-500"
          dir="rtl"
          placeholder="خدمات مورد نظر را جستجو کنید!!"
          type="text"
          id="search"
        />
      </div>
    </section>,
    document.getElementById("search-word")
  );
};

export default Search;
