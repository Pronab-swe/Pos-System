import { ActionTypes } from "../contents/actionTypes";

// Getting all products action
export const productsList = () => {
  return async (dispatch) => {
    let products = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }
    dispatch({
      type: ActionTypes.GET_CART_PRODUCT,
      payload: products,
    });
  };
};

// Adding single product to cart action
export const addProduct = (data) => {
  return async (dispatch) =>
    dispatch({ type: ActionTypes.ADD_PRODUCT, payload: data });
};

// Deleting single product from cart action
export const deleteProduct = (data) => {
  return async (dispatch) =>
    dispatch({ type: ActionTypes.DELETE_PRODUCT, payload: data });
};

// Deleting all products from cart
export const deleteAllProducts = () => {
  return async (dispatch) => dispatch({ type: ActionTypes.DELETE_ALL_PRODUCTS });
};
