import { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [ActiveSearch, setActiveSearch] = useState(false);
  const [ActiveContactUs, setActiveContactUs] = useState(false);
  const [ActiveMenu, setActiveMenu] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);

  return (
    <StateContext.Provider
      value={{
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
