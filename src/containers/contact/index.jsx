import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { motion } from "framer-motion"; // 👈 framer-motion import
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <motion.h3
          className="contact__content__header-text"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Let's Talk
        </motion.h3>

        <motion.div
          className="contact__content__form"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="contact__content__form__controlswrapper">
            <div>
              <input
                required
                name="name"
                className="inputName"
                type={"text"}
              />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div>
              <input
                required
                name="email"
                className="inputEmail"
                type={"text"}
              />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div>
              <textarea
                required
                name="description"
                className="inputDescription"
                type={"text"}
                rows="5"
              />
              <label htmlFor="description" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <button>Submit</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;