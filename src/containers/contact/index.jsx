import React, { useRef } from "react";
import emailjs from "emailjs-com";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p2vgf8c",      // 서비스 ID
        "template_1r1gs1k",     // 템플릿 ID
        form.current,
        "FqiEwSRRemRmocZL6"          // 사용자 공개 키 (Public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("success!");
        },
        (error) => {
          console.log(error.text);
          alert("sorry. error occured.");
        }
      );

    e.target.reset(); // 폼 초기화
  };

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

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact__content__form"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="contact__content__form__controlswrapper">
            <div>
              <input name="name" required className="inputName" type="text" />
              <label htmlFor="name" className="nameLabel">Name</label>
            </div>
            <div>
              <input name="email" required className="inputEmail" type="email" />
              <label htmlFor="email" className="emailLabel">Email</label>
            </div>
            <div>
              <textarea name="description" required className="inputDescription" rows="5" />
              <label htmlFor="description" className="descriptionLabel">Description</label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;