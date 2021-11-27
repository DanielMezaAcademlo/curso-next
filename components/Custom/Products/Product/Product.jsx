import React from "react";

const Product = ({ data, handleAddProduct }) => {
  // const handleAddProduct = () =>
  //   dispatch(addProductAction({ ...data, qty: 1 }));

  return (
    <div className="product_img ">
      <img src={data.img} alt={data.name} />
      <div className="flex justify-between items-center px-5 py-5">
        <h2>{data.name}</h2>
        <p className="bg-blue text-white px-2">${data.price}</p>
      </div>
      <p className="px-5 mt-2 mb-2">{data.info.description}</p>
      <button
        className="btn px-3 py-2 ml-5 mb-5 text-white bg-dark hover:bg-blue transition-all"
        onClick={() => handleAddProduct({ ...data, qty: 1 })}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;
