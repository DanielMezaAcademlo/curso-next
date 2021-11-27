import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className="w-5/6 m-auto h-screen flex justify-between items-center flex-col md:flex-row mt-10 md:mt-0">
      {children}
    </div>
  );
};

export default MainContainer;
