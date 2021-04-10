import { useCart, useWishlist } from "../../contexts";

export const Navbar = ({ route, setRoute }) => {
  const { itemsInCart } = useCart();
  const { itemsInWishlist } = useWishlist();

  return (
    <div>
      <nav className="navbar">
        <a onClick={() => setRoute("products")} href="#" className="logo">
          {" "}
          Home
        </a>
        <ul className="nav-links">
          <div className="icon-badge">
            <li className="nav-item">
              <a onClick={() => setRoute("wishlist")} href="#">
                <div className="icon-badge-container">
                  <i
                    className="fa fa-heart fa-2x fa-custom-heart"
                    aria-hidden="true"
                  ></i>
                  <span className="heart">{itemsInWishlist}</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={() => setRoute("cart")} href="#">
                <div className="icon-badge-container">
                  <i
                    className="fa fa-shopping-cart fa-2x fa-custom-cart"
                    aria-hidden="true"
                  ></i>
                  <span className="cart">{itemsInCart()}</span>
                </div>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
