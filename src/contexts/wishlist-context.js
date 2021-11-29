import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, []);

  const initializeWishlist = (wishlistItems) => {
    dispatch({ type: "INITIALIZE", payload: { wishlistItems } });
  };

  const itemsInWishlist = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{ wishlist, dispatch, initializeWishlist, itemsInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
