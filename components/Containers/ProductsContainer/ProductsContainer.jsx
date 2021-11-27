import React from "react";

const ProductsContainer = ({ children }) => {
  return (
    <div className="w-5/6 m-auto flex justify-between items-center flex-wrap mt-5">
      {children}
    </div>
  );
};

export default ProductsContainer;
