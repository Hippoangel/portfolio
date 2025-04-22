import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import Typewriter from "typewriter-effect";


const Home = () => {
  const navigate = useNavigate();

  const introdata = {
    title: "I’m Juwon,",
    animated: {
      first: "AI programmar",
      second: "Studied Complex Network Science",
      third: "Full-stacked Programmar",
    },
    };
  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h2 className="mb-1x">{introdata.title}

          <h1 className="fluidz-48 mb-1x">
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,

                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h1>
        </h2>
      </div>

      <div className="home__contact-me">
        <button onClick={handleNavigateToContactMePage}>Contact me</button>
      </div>
    </section>
  );
};
export default Home;
