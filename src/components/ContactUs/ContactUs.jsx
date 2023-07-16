import LinkSocialMedia from "./LinkSocialMedia";
import { UseStateContext } from "../../context/ContextAPI";
import Styles from "./ContactUs.module.css";

import {
  Cancel,
  InstagramIcon,
  Logo,
  TelegramIcon,
  WhatsappIcon,
} from "../../assets/index.js";
import { createPortal } from "react-dom";

const ContactUS = () => {
  const { ActiveContactUs, setActiveContactUs } = UseStateContext();

  return createPortal(
    <section
      className={`${
        ActiveContactUs == false
          ? Styles["contactUs--container"]
          : Styles["contactUs--container-show"]
      } text-main-color w-screen h-screen z-50`}
    >
      <div
        onClick={() => setActiveContactUs(false)}
        className="fixed top-0 left-0 z-40 w-screen h-screen bg-[#000000cc]"
      ></div>
      <section
        dir="ltr"
        className={`${
          ActiveContactUs == false
            ? Styles["contactUs--box"]
            : Styles["contactUs--box-show"]
        } fixed top-0 z-50 left-0 flex flex-col h-full px-10 bg-gray-100 drop-shadow-lg justify-around w-96`}
      >
        <div className="flex justify-between pb-4 border-b-2">
          <img className="w-28" src={Logo} alt="Logo" title="repair computer Logo" />
          <button
            onClick={() => {
              setActiveContactUs(false);
            }}
          >
            <img
              className="w-10 transition-transform hover:rotate-180"
              src={Cancel}
              alt="menuIcon"
            />
          </button>
        </div>

        <div className="flex flex-col justify-around h-2/5">
          <LinkSocialMedia href="#" name="Instagram" icon={InstagramIcon} />
          <LinkSocialMedia href="#" name="Telegram" icon={TelegramIcon} />
          <LinkSocialMedia href="#" name="Whatsapp" icon={WhatsappIcon} />
        </div>

        <div className="py-4 border-t-2 border-gray-300">
          <h3 className="text-lg font-semibold">+028 33-343-762</h3>
          <p>info@email.com</p>
        </div>
      </section>
    </section>,
    document.getElementById("contactUs")
  );
};

export default ContactUS;
