import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";
import profileImage from "../../images/IMG_3049.JPG"; // 이미지 경로 수정

const personalDetails = [
  { label: "Name", value: "Juwon Park" },
  { label: "Age", value: "25" },
  { label: "Address", value: "Republic of Korea" },
  { label: "Email", value: "yuni990913@gmail.com" },
  { label: "Contact No", value: "+82-10-4272-7678" },
];

const jobSummary = "As a complex network specialist with a focus on logistics and supply chain management, I bring a robust understanding of how interconnected systems drive efficiency, resilience, and scalability in modern logistics networks. My academic background in complex network theory has empowered me to approach supply chains as dynamic, adaptive systems that are primed to meet the challenges of today's fast-paced, globalized environment."
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content" style={{ display: 'flex' }}>
        <div className="about__content__personalWrapper" style={{ flex: '1' }}>
          <h3 className="personalInformationHeaderText">Personal Information</h3>
          <ul>
            {personalDetails.map((item, i) => (
              <li key={i}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
          <h3>Complex Network Scientist</h3>
          <p>{jobSummary}</p>
        </div>
        <div className="about__content__imageWrapper" style={{ flex: '1', textAlign: 'center' }}>
          <img src={profileImage} alt="Profile" style={{ maxWidth: '100%',maxHeight: '230%', borderRadius: '50%' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
