import { useTheme, useCart, useWishlist } from "../../contexts";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { itemsInCart } = useCart();
  const { itemsInWishlist } = useWishlist();
  const { theme } = useTheme();

  return (
    <div>
      <nav className={theme === "dark" ? "navbar dark" : "navbar"}>
        <Link to="/products">Home</Link>
        <ul className="nav-links">
          <div className="icon-badge">
            <li className="nav-item">
              <Link to="wishlist">
                <div className="icon-badge-container">
                  <i
                    className="fa fa-heart fa-2x fa-custom-heart"
                    aria-hidden="true"
                  ></i>
                  <span className="heart">{itemsInWishlist}</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="cart">
                <div className="icon-badge-container">
                  <i
                    className="fa fa-shopping-cart fa-2x fa-custom-cart"
                    aria-hidden="true"
                  ></i>
                  <span className="cart">{itemsInCart()}</span>
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
