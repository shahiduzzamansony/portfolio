import React from "react";
import { GrCode } from "react-icons/gr";

const Skills = () => {
  return (
    <div>
      <h2 className="text-4xl text-white text-center my-16">Skills</h2>
      <div className="flex gap-7 justify-center">
        <div className="card border border-emerald-300 shadow-xl">
          <div className="card-body text-white">
            <GrCode className=" text-2xl"></GrCode>
            <h2 className="card-title text-white text-3xl">
              FrontEnd Learnings
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost btn-xs text-white ">
                List Here
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 border border-emerald-300 shadow-xl">
          <div className="card-body">
            <GrCode className="text-white text-2xl"></GrCode>
            <h2 className="card-title text-white text-3xl">
              BackEnd Learnings
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost btn-xs text-white ">
                List Here
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 border border-emerald-300 shadow-xl">
          <div className="card-body">
            <GrCode className="text-white text-2xl"></GrCode>
            <h2 className="card-title text-white text-3xl">
              Tools & Technologies
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost btn-xs text-white ">
                List Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
