import { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [DarkMode, setDarkMode] = useState(true);
  const [ActiveSearch, setActiveSearch] = useState(false);
  const [ActiveContactUs, setActiveContactUs] = useState(false);
  const [ActiveMenu, setActiveMenu] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);

  const setTheme = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem("Theme", DarkMode);
  };

  return (
    <StateContext.Provider
      value={{
        setTheme,
        DarkMode,
        setDarkMode,
        loadingStatus,
        setLoadingStatus,
        ActiveSearch,
        setActiveSearch,
        ActiveContactUs,
        setActiveContactUs,
        ActiveMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => useContext(StateContext);
