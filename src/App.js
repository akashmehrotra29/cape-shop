import { Routes, Route } from "react-router-dom";
import { Products, Cart, Wishlist, Navbar } from "./components";
import { useTheme } from "./contexts";
import "./styles.css";

export default function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <div className={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
