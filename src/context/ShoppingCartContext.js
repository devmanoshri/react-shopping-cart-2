import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import { storeItems } from "../data/items";
//console.log(storeItems);

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  //const [cartItems, setCartItems] = useState([]);

  const [state, dispatch] = useReducer(cartReducer, {
    products: storeItems,
    ShoppingCartContext: [],
  });

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
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
