import { products } from "./products";

export const getItems = () => products;

export const createItem = product => {
  products.push(product);
  return products;
};
