import React from "react";
import About from "../About/About";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <Projects></Projects>
      <Skills></Skills>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
