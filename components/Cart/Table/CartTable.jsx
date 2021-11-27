import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

//Components
import CartProduct from "../CartProduct/CartProduct";

//Actions
import { removeProductAction } from "../../../redux/actions/products.action";

const CartTable = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.products);

  const handleDeleteProduct = data => {
    let newCart;
    const isGreaterThan = data.qty > 1;
    if (isGreaterThan) {
      newCart = cart?.map(product =>
        product.id === data.id ? { ...product, qty: product.qty - 1 } : product
      );
    } else {
      newCart = cart?.filter(product => product.id !== data.id);
    }

    dispatch(removeProductAction({ newCart, price: data.price }));
  };

  return (
    <div className="py-5">
      <div className="flex justify-between items-center bg-gray py-2 ppx-5 rounded-xl">
        <p className="w-1/3 text-dark text-lg md:text-xl">Producto</p>
        <p className="w-1/3 text-dark text-lg md:text-xl">Total</p>
        <p className="w-1/3 text-dark text-lg md:text-xl text-right">Remover</p>
      </div>

      <div className="py-5">
        {cart?.length > 0 ? (
          cart.map(item => (
            <CartProduct
              data={item}
              key={item.id}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))
        ) : (
          <h4 className="text-center">No se han encontrado productos 💔</h4>
        )}
      </div>
    </div>
  );
};

export default CartTable;
