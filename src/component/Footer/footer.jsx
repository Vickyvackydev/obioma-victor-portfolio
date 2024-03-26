import React, { useState } from "react";
import css from "./footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import DownLink from "./DownLink";

const footer = () => {
  const [modal, setModal] = useState(false);
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="work"></a>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br /> amazing together
          </span>

          <h1 className="primaryText">
            start by
            <span href="" onClick={() => setModal((prev) => !prev)}>
              saying hi
            </span>
          </h1>

          {modal && <DownLink closeModal={() => setModal(false)} />}
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Ikorodu, Lagos, Nigeria</p>
          </div>

          <div className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default footer;
