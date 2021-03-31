import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import "./styles.css";
import { Wishlist } from "./components/Wishlist";

export default function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <Navbar route={route} setRoute={setRoute} />
      {/* {console.log("from main", route)} */}
      {route === "products" && <Products />}
      {route === "wishlist" && <Wishlist />}
      {route === "cart" && <Cart />}
    </div>
  );
}
