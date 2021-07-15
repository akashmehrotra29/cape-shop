import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Products, Cart, Wishlist, Navbar } from "./components";
import { useCart, useTheme, useWishlist } from "./contexts";
import "./styles.css";

export default function App() {
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const { initializeCart } = useCart();
  const { initializeWishlist } = useWishlist();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://capeshop-api.akashmehrotra29.repl.co/load-data"
        );
        if (response.status === 200) {
          setProducts(response.data.products);
          initializeWishlist(response.data.wishlistItems);
          initializeCart(response.data.cartItems);
        }
      } catch (error) {
        console.log("failed to load-data", error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <div className={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
