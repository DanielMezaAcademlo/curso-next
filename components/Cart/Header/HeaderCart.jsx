import React from "react";
import { useSelector } from "react-redux";

const HeaderCart = () => {
  const { cart } = useSelector(store => store.products);

  return (
    <div className="py-5">
      <h2 className="text-3xl md:text-5xl text-dark">Carrito de compras</h2>
      <p className="mt-2 ml-1 text-lg text-text_gray">
        Tienes <span className="text-blue">{cart.length}</span> productos
        agregados
      </p>
    </div>
  );
};

export default HeaderCart;
