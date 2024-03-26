import React from "react";
import css from "./Header.module.scss";
import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiMenuAltLeft,
  BiPhoneCall,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerwidth ${css.container}`}>
        <a href="/" className={css.name}>
          Victor
        </a>
        <div>
          <ul
            style={getMenuStyles(menuOpen)}
            className={`flexCenter ${css.menu}`}
          >
            <div className={css.close} onClick={() => setMenuOpen(false)}>
              <BiMenuAltLeft />
            </div>
            <li>
              <a href="#expertise" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </a>
            </li>
            <li className={`flexCenter ${css.phone}`}>
              <p>+ 234 812 737 8079</p>
              <a href="https://wa.me/08127378079">
                <BiPhoneCall size={"40px"} onClick={() => setMenuOpen(false)} />
              </a>
            </li>
          </ul>
        </div>
        <div className={css.link} href="mailto:zainkeepcode@gmail.com">
          <a href="https://github.com/Vickyvackydev">
            <BiLogoGithub />
          </a>
          <a href="https://www.linkedin.com/in/obioma-victor-717937231">
            <BiLogoLinkedin />
          </a>
          <a>
            <BiLogoTwitter />
          </a>
          <a href="vickyvacky5@gmail.com">
            <BiLogoGmail />
          </a>
        </div>
        {/* this is only for medium in small screen */}

        <div className={css.menuIcon} onClick={() => setMenuOpen(true)}>
          <BiMenuAltRight size={30} className={css.icon} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
