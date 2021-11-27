import React from "react";
import { useSelector } from "react-redux";

const ShopSummary = () => {
  const { total } = useSelector(store => store.products);

  return (
    <div className="summary mt-2 md:mt-32 px-10 py-5">
      <p className="flex justify-between items-center text-3xl pb-10 text-text_gray">
        Total: <span className="text-blue">${total}</span>
      </p>

      <button className="bg-blue rounded-lg w-full py-3 text-white mt-10">
        Pagar
      </button>
    </div>
  );
};

export default ShopSummary;
