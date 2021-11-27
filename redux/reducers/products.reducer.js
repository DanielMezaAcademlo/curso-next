import { productsTypes } from "../types/products.types";
const initialState = {
  cart: [],
  total: 0
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsTypes.ADD_PRODUCT:
      return {
        ...state,
        cart: action.payload.newCart,
        total: state.total + action.payload.price
      };

    case productsTypes.REMOVE_PRODUCT:
      return {
        ...state,
        cart: action.payload.newCart,
        total: state.total - action.payload.price
      };

    default:
      return state;
  }
};
