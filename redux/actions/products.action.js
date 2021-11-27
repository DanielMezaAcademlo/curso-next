import { productsTypes } from "../types/products.types";

export const addProductAction = product => {
  return {
    type: productsTypes.ADD_PRODUCT,
    payload: product
  };
};

export const removeProductAction = product => {
  return {
    type: productsTypes.REMOVE_PRODUCT,
    payload: product
  };
};
