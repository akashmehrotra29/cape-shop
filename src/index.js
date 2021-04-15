import { StrictMode } from "react";
import ReactDOM from "react-dom";
import setupMockServer from "./api/mock-server";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./contexts/cart-context";
import { FilterProvider } from "./contexts/sort-and-filter-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { ThemeProvider } from "./contexts/theme-context";
setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <FilterProvider>
            <Router>
              <App />
            </Router>
          </FilterProvider>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
