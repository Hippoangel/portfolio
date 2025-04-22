import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const introdata = {
    title: "I’m Juwon,",
    animated: [
      "AI programmar",
      "Studied Complex Network Science",
      "Full-stacked Programmar",
    ],
  };

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = introdata.animated[currentSentenceIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const hold = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setCurrentSentenceIndex((prev) => (prev + 1) % introdata.animated.length);
      }, 1500);
      return () => clearTimeout(hold);
    }
  }, [charIndex, currentSentenceIndex]);

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h2 className="mb-1x">{introdata.title}</h2>        
        <motion.h1
  className="animated-text"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <span>{displayText}</span>
</motion.h1>
      </div>

      <div className="home__contact-me">
        <button onClick={handleNavigateToContactMePage}>Contact me</button>
      </div>
    </section>
  );
};

export default Home;