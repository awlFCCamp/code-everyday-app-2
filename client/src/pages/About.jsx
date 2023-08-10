/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loginData from "../assets/about.json";
import "./about.css";
function About() {
  const TypingText = ({ text }) => {
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setTypedText((prevTypedText) => prevTypedText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      return () => {
        clearInterval(typingInterval);
      };
    }, [currentIndex, text]);

    return <h3>{typedText}</h3>;
  };
  const textToType = "Enter your daily Challenge!!";
  return (
    <section className="about">
      <article className="about-left">
        <h1 className="title">Welcome to my Code Everyday challenge</h1>
        <p>
          Coding everyday is important to the growth of a developer. It improves
          coding skill, helps retain newly learned knowledge. Coding variety of
          challenges helps hone our problem solving skills. Regular coding
          enforce us to stay up to date the latest technology trends. Coding and
          building project give us confidence.
        </p>
        <p>
          Here you can enter your daily coding challenge and leave a note for
          yourself about how you solve the problem. Everyday you login, the home
          page will show your previous registered challenges, their status and
          how you solved before.
        </p>

        <Link to="/" className="cta">
          <TypingText text={textToType} />
        </Link>
      </article>
      <div className="about-right">
        <Lottie animationData={loginData} />
      </div>
    </section>
  );
}

export default About;
