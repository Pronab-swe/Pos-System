import { ActionTypes } from "../contents/actionTypes";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Getting all product
    case ActionTypes.GET_CART_PRODUCT:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    // Adding product to cart
    case ActionTypes.ADD_PRODUCT:
      let exists = state.products.find((x) => x.id === action.payload.id);

      if (exists) {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload.id) {
              product.quantity += action.payload.quantity || 1;
              localStorage.setItem("products", JSON.stringify(state.products));
            }
            return product;
          }),
        };
      } else {
        let products = [];

        if (localStorage.getItem("products")) {
          products = JSON.parse(localStorage.getItem("products"));
        }

        products.push(action.payload);
        localStorage.setItem("products", JSON.stringify(products));

        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }

    // Deleting single product to cart
    case ActionTypes.DELETE_PRODUCT:
      const items = JSON.parse(localStorage.getItem("products"));
      const filtered = items.filter((item) => item.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(filtered));

      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        )
      };

    // Deleting all product from cart
    case ActionTypes.DELETE_ALL_PRODUCTS:
      localStorage.removeItem("products");

      return {
        ...state,
        products: [],
      };

    default:
      return state;
  }
};
