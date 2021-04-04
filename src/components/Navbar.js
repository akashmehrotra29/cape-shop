import { useCart, useWishlist } from "../contexts";

export const Navbar = ({ route, setRoute }) => {
  const { itemsInCart } = useCart();
  const { itemsInWishlist } = useWishlist();

  return (
    <div>
      <nav class="navbar">
        <a onClick={() => setRoute("products")} href="#" class="logo">
          {" "}
          Home
        </a>
        <ul class="nav-links">
          <div class="icon-badge">
            <li class="nav-item">
              <a onClick={() => setRoute("wishlist")} href="#">
                <div class="icon-badge-container">
                  <i
                    class="fa fa-heart fa-2x fa-custom-heart"
                    aria-hidden="true"
                  ></i>
                  <span class="heart">{itemsInWishlist}</span>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a onClick={() => setRoute("cart")} href="#">
                <div class="icon-badge-container">
                  <i
                    class="fa fa-shopping-cart fa-2x fa-custom-cart"
                    aria-hidden="true"
                  ></i>
                  <span class="cart">{itemsInCart}</span>
                </div>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
