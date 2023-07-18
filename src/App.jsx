import Base from "./pages/Base";
import { UseStateContext } from "./context/ContextAPI";
import { useEffect } from "react";

function App() {
  const { DarkMode, setDarkMode } = UseStateContext();

  useEffect(() => {
    const Theme = JSON.parse(localStorage.getItem("Theme"));
    setDarkMode(!Theme || false);
  }, [setDarkMode, DarkMode]);

  return (
    <section className={`${DarkMode ? "dark" : ""} `}>
      <Base />
    </section>
  );
}

export default App;
