import React from "react";
import { BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";
import css from "./downLink.module.scss";

const DownLink = ({ closeModal }) => {
  return (
    <div className={css.menu}>
      <a href="https://wa.me/08127378079" onClick={closeModal}>
        <div>
          <BiLogoWhatsapp />
        </div>
        Whatsapp
      </a>
      <hr />
      <a href="vickyvacky5@gmail.com" onClick={closeModal}>
        <div>
          <BiLogoGmail />
        </div>
        Gmail
      </a>
    </div>
  );
};

export default DownLink;
