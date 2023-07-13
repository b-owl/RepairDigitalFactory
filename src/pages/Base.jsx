import ResponsiveMenu from "../components/ResponsiveMenu/ResponsiveMenu";
import NavbarMenu from "../components/NavbarMenu/NavbarMenu";
import { Header, Footer } from "../Layouts/index";
import Search from "./Search/Search";
import ContactUS from "../components/ContactUs/ContactUs";
import AboutUs from "../Layouts/AboutUs/AboutUs";
import Services from "../Layouts/Services/Services";
import NewService from "../Layouts/Services/NewServices";
import BookTime from "../components/BookTIme/BookTime";
import NumberDetails from "../components/NumberDetailItems/NumberDetails";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import OurTeam from "../Layouts/OurTeam/OurTeam";
import CostumerComments from "../Layouts/CostumerComments/CostumerComments";

import { UseStateContext } from "../context/ContextAPI";
import Loading from "./Loading/Loading";
import { useEffect } from "react";

const Base = () => {
  const { ActiveSearch, ActiveContactUs, loadingStatus, setLoadingStatus } =
    UseStateContext();
  const { ActiveMenu } = UseStateContext();

  useEffect(() => {
    var timeout = setTimeout(() => {
      setLoadingStatus(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [loadingStatus, setLoadingStatus]);

  return (
    <section className="bg-main-color text-txt-color">
      {loadingStatus && <Loading />}

      {ActiveMenu ? <ResponsiveMenu /> : <NavbarMenu />}

      <Header />
      {ActiveSearch && <Search />}
      {ActiveContactUs && <ContactUS />}

      <AboutUs />
      <NumberDetails />
      <Services />
      <NewService />
      <BookTime />
      <ChooseUs />
      <OurTeam />
      <CostumerComments />

      <Footer />
    </section>
  );
};

export default Base;
