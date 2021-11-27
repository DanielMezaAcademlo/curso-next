import React from "react";

const CartContainer = ({ children }) => {
  return (
    <div className="px-10 md:px-32 mt-20 flex justify-between flex-col md:flex-row">
      {children}
    </div>
  );
};

export default CartContainer;
