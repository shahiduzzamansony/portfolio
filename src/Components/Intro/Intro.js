import React from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import propic from "../../assets/SL_032119_19250_06 (3).png";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import ParticlesBackground from "../Particles/ParticlesBackground";

const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row h-3/4 mt-12 mx-auto lg:mx-40">
      <ParticlesBackground></ParticlesBackground>
      <Fade top>
        <div className="left flex flex-1 flex-col my-auto">
          <span className="font-bold text-3xl">Hi! I am</span>
          <span className="font-bold text-4xl text-orange-500 my-3">
            MD.SHAHIDUZZAMAN
          </span>
          <span className=" text-gray-600 my-2">
            A frontend developer with quality experiences from completing some
            full stack projects. I have a strong learning mentality to grow and
            place myself at a inspirational position.
          </span>
          <a href="/" className="btn btn-secondary w-24 mt-7 btn-sm">
            Hire me
          </a>
        </div>
      </Fade>
      <div className="right mt-12 flex flex-col lg:flex-row items-center flex-1">
        <Zoom>
          <img src={propic} alt="propic"></img>
        </Zoom>
        <Fade bottom>
          <div className="ml-7 flex flex-row lg:flex-col mt-9 ">
            <a
              href="https://github.com/shahiduzzamansony"
              className=" text-4xl text-primary hover:text-white"
            >
              <BsGithub className=" mb-10"></BsGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/md-shahiduzzaman-a80231241/"
              className=" text-4xl text-primary hover:text-white"
            >
              <BsLinkedin className=" mb-10 ml-10 lg:ml-0"></BsLinkedin>
            </a>
            <a
              href="https://www.facebook.com/sony.jaman.1/"
              className=" mb-3 text-4xl text-primary hover:text-white"
            >
              <BsFacebook className=" ml-10 lg:ml-0"></BsFacebook>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
