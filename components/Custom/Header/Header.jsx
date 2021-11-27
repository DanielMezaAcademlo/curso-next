import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavLink from "../NavLink";
import Image from "next/image";

//Images
import Cart from "../../../assets/img/shopping-cart.png";
import Link from "next/link";

const Header = () => {
  const { cart, total } = useSelector(store => store.products);

  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    let counter = 0;
    if (cart?.length > 0) {
      cart.forEach(item => (counter = counter + item.qty));
      setProductsCount(counter);
    }
  }, [cart]);

  return (
    <header className="flex bg-white px-10 md:px-32 py-5 justify-between items-center text-dark  w-full z-50">
      <h2 className="text-4xl text-blue font-light	">Cool Store</h2>

      <nav className="w-1/3 md:w-1/5">
        <ul className="flex justify-between items-center">
          <NavLink href="/" pathname="Inicio" isLink={true} />
          <NavLink href="/cart" pathname="Carrito" isLink={true} />
          <Link href="/cart">
            <span className="text-red flex items-center">
              <Image
                src={Cart}
                alt="Carrito de compras"
                width="16"
                height="16"
              />
              <p className="ml-1">{productsCount}</p>
            </span>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

{
  /* <a href='https://www.freepik.es/vectores/personas'>Vector de Personas creado por pikisuperstar - www.freepik.es</a> */
}

export default Header;
