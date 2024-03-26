import React from "react";
import css from "./hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* upper elements */}
        <div className={css.upperElement}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br /> <span>I'm Obioma Victor.</span>
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="secondaryText"
          >
            I build good and complex web apps <br /> with strong programming
            expertise.
          </motion.span>
        </div>

        {/* lower elements */}
        <div className={css.lowerElement}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <>
              <div className="primaryText">2 +</div>
              <div className="secondaryText">
                <div>Years</div>
                <div>Experience</div>
              </div>
            </>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>FRONTEND DEVELOPER</span>
            <span>REACT DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default hero;
