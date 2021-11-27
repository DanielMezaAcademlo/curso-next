import React from "react";

const MainTitle = ({ title, color, align, span }) => {
  return (
    <h1 className={` text-7xl text-${color} text-${align}`}>
      {title} <span className="text-blue">{span}</span>
    </h1>
  );
};

export default MainTitle;
