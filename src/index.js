import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./contexts/cart-context";
import { FilterProvider } from "./contexts/sort-and-filter-context";
import { WishlistProvider } from "./contexts/wishlist-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
  rootElement
);
