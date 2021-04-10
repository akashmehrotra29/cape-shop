import { useState } from "react";
import { Navbar } from "./components";
import { Products } from "./components";
import { Cart } from "./components";
import "./styles.css";
import { Wishlist } from "./components";

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
