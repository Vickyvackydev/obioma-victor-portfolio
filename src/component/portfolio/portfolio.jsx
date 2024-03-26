import React, { useState } from "react";
import css from "./portfolio.module.scss";

import { fadeIn, showDescStyles, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
import "../../utils/styles.css";
import { BiBook, BiHide } from "react-icons/bi";
import { projects } from "../../utils/data";

const portfolio = () => {
  const [showDesc, setShowDesc] = useState(false);
  const [hint, setHint] = useState(false);
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My latest Works</span>
            <p style={{ marginTop: "10px" }}>
              perfect solution for digital experience
            </p>
          </div>
          {showDesc ? (
            <>
              <button
                className={`secondaryText ${css.btn2}`}
                onClick={() => setShowDesc(false)}
                onMouseEnter={() => setHint(true)}
                onMouseLeave={() => setHint(false)}
              >
                <BiHide />
              </button>
              {hint && <span>Hide description</span>}
            </>
          ) : (
            <>
              <button
                className={`secondaryText ${css.btn}`}
                onClick={() => setShowDesc(true)}
                onMouseEnter={() => setHint(true)}
                onMouseLeave={() => setHint(false)}
              >
                <BiBook />
              </button>

              {hint && <span>Show description</span>}
            </>
          )}
        </div>
        {/* image */}
        <div className={`flexCenter ${css.showCase}`}>
          {projects.map((project) => (
            <div>
              <a href={project.link}>
                <motion.img
                  variants={fadeIn("up", "tween", 0.5, 0.6)}
                  src={project.img}
                  alt="project"
                />
              </a>
              <div className={css.desc} style={showDescStyles(showDesc)}>
                {showDesc ? (
                  <div className={css.newDesc}>
                    <p style={{ color: "grey" }}>
                      <span style={{ color: "orange", fontWeight: "bold" }}>
                        {project.name}
                      </span>
                      {project.desc}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default portfolio;
