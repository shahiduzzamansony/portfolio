import React from "react";

import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2022 - All right reserved by mdshahiduzzaman</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://github.com/shahiduzzamansony"
            className=" text-3xl text-primary"
          >
            <BsGithub></BsGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/md-shahiduzzaman-a80231241/"
            className=" text-3xl text-primary"
          >
            <BsLinkedin></BsLinkedin>
          </a>
          <a
            href="https://www.facebook.com/sony.jaman.1/"
            className=" mb-3 text-3xl text-primary"
          >
            <BsFacebook></BsFacebook>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
