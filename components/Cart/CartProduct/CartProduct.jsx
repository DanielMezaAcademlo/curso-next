import React from "react";
import { useDispatch } from "react-redux";

//Actions
import { removeProductAction } from "../../../redux/actions/products.action";

const CartProduct = ({ data, handleDeleteProduct }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex justify-between items-center">
        <div className="w-1/2 product-container flex items-center">
          <img src={data.img} alt={data.name} />
          <div className="">
            <p className="ml-5 font-bold text-dark">{data.name}</p>
            <p className="ml-5 font-light text-dark">Cantidad: {data.qty}</p>
            <p className="ml-5 font-light text-dark">Precio: ${data.price}</p>
          </div>
        </div>
        <p className="w-1/5 text-dark">
          ${parseInt(data.qty) * parseInt(data.price)}
        </p>
        <button
          className="w-1/5 text-white bg-red py-2 rounded-xl"
          onClick={() => handleDeleteProduct(data)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
