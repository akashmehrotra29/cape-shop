import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart-reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const initializeCart = (cartItems) => {
    dispatch({ type: "INITIALIZE", payload: { cartItems } });
  };

  const itemsInCart = () => {
    let total = 0;
    if (cart.length > 0) {
      cart.map((cartItem) => (total += cartItem.quantity));
    }
    return total;
  };

  // console.log("cart length", cart.length);

  return (
    <CartContext.Provider
      value={{ cart, dispatch, initializeCart, itemsInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
