import { Line } from "rc-progress";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import './styles.scss';

const containerVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const skillItemVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <motion.div
            key={i}
            className="skills__content-wrapper__inner-content"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <h3 className="skills__content-wrapper__inner-content__category-text">
              {item.label}
            </h3>
            <div className="skills__content-wrapper__inner-content__progressbar-container">
              {item.data.map((skillItem, j) => (
                <motion.div
                  key={j}
                  className="progressbar-wrapper"
                  custom={j}
                  initial="hidden"
                  animate="visible"
                  variants={skillItemVariants}
                >
                  <p>{skillItem.skillName}</p>
                  <Line
                    percent={skillItem.percentage}
                    strokeWidth="2"
                    strokeColor="var(--yellow-theme-main-color)"
                    trailWidth="2"
                    strokeLinecap="square"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;