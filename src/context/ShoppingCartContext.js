import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import { storeItems } from "../data/items";
//console.log(storeItems);

const ShoppingCartContext = createContext();

const initialState = {
  products: storeItems,
  ShoppingCartContext: [],
};

export function ShoppingCartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: "ADD_TO_CART" });
  };
  return (
    <ShoppingCartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

// export function useShoppingCart() {
//   return useContext(ShoppingCartContext);
// }
export const CartState = () => {
  return useContext(ShoppingCartContext);
};
