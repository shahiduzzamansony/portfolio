import React from "react";
import first from "../../assets/4.png";
import second from "../../assets/5.png";
import third from "../../assets/6.png";

const Etailor = () => {
  return (
    <div>
      <h1 className="text-center my-5 text-4xl">Screenshots Here</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-9 w-3/5 gap-5 mx-auto">
        <img src={first} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" />
      </div>
    </div>
  );
};

export default Etailor;
