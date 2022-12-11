import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Fade top>
        <h1 className="text-5xl text-white text-center my-20">
          Recent Projects
        </h1>
      </Fade>
      <div
        id="projects-section"
        className="my-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-3/4 mx-auto"
      >
        <Fade left>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className=" h-52"
                src="https://global.honda/products/motorcycles/assets/motorcycle-business/img/img-motorcycle-business02_sp.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">MotoLand</h2>
              <p>A used honda buy-sell website.</p>
              <div className="card-actions justify-between">
                <Link to="/motoland">
                  <button className="btn btn-primary btn-xs">Details</button>
                </Link>
                <a
                  href="https://motoland-12.web.app/"
                  className="btn btn-xs btn-primary"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className=" h-52 w-full"
                src="https://static.vecteezy.com/system/resources/previews/007/176/291/original/sewing-machine-and-tools-hand-drawn-elements-tailoring-accessories-threads-scissors-needles-pins-buttons-round-frame-for-seamstress-atelier-fashion-design-vector.jpg"
                alt="E-tailor"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">E-Tailor</h2>
              <p>Internet based tailoring service website.</p>
              <div className="card-actions justify-between">
                <Link to="/etailor">
                  <button className="btn btn-primary btn-xs">Details</button>
                </Link>
                <a
                  href="https://e-tailor-7dd12.web.app/"
                  className="btn btn-primary btn-sm"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className=" h-52"
                src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"
                alt="Css hacks"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">CSS Hacks</h2>
              <p>A website to buy css frameworks tutorials.</p>
              <div className="card-actions justify-between">
                <Link to="/csshacks">
                  <button className="btn btn-primary btn-xs">Details</button>
                </Link>
                <a
                  href="https://educational-assignment-ten.web.app/"
                  className="btn btn-primary btn-sm"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
