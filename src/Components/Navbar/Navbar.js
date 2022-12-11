import React from "react";
import Resume from "../../assets/Md.Shahiduzzaman-Resume (2).pdf";

const Navbar = () => {
  return (
    <div>
      <div className="navbar p-3 bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-white">
                <a href="#projects-section">Projects</a>
              </li>
              <li
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Download on click"
              >
                <a className="text-white" href={Resume} download>
                  Resume
                </a>
              </li>

              <li className="text-white">
                <a href="#about">About</a>
              </li>
              <div>
                <a
                  href="#contact-section"
                  className=" btn btn-outline btn-primary"
                >
                  contact
                </a>
              </div>
            </ul>
          </div>
          <a href="/" className=" text-white lg:font-xl font-sans text-2xl">
            MD.SHAHIDUZZAMAN
          </a>
        </div>
        <div className=" navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white">
              <a href="#projects-section">Projects</a>
            </li>
            <li
              className="tooltip tooltip-bottom tooltip-primary"
              data-tip="Download on click"
            >
              <a className="text-white" href={Resume} download>
                Resume
              </a>
            </li>
            <li className="text-white">
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <a href="#contact-section" className=" btn btn-outline btn-info">
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
