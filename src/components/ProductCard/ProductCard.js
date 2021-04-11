import { useCart } from "../../contexts";
import { useWishlist } from "../../contexts";
import { UpdateCartButton } from "../UpdateCartButton/UpdateCartButton";
import { AddToCartButtton } from "../AddToCartButton/AddToCartButton";
import { AddToWishlistButton } from "../AddToWishlistButton/AddToWishlistButton";
import { RemoveFromWishlistButton } from "../RemoveFromWishlistButton/RemoveFromWishlistButton";

export const ProductCard = ({ productItem }) => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  let currCartItem, currWishlistItem;

  return (
    <div>
      <div className="vertical-card">
        <div className="thumbnail">
          <img
            className="img-responsive-vertical"
            src={productItem.image}
            alt=""
          />
          {wishlist.find((wishlistItem) => {
            if (wishlistItem.id === productItem.id) {
              currWishlistItem = productItem;
              return wishlistItem;
            }
            return null;
          }) ? (
            <RemoveFromWishlistButton item={currWishlistItem} />
          ) : (
            <AddToWishlistButton item={productItem} />
          )}
          {/*  */}
        </div>
        <div className="product-description">
          <h3> {productItem.name} </h3>
          <p> Price: Rs {productItem.price} </p>

          {cart.find((cartItem) => {
            if (cartItem.id === productItem.id) {
              currCartItem = cartItem;
              return cartItem;
            }
            return null;
          }) ? (
            <UpdateCartButton item={currCartItem} />
          ) : (
            <AddToCartButtton item={productItem} />
          )}
        </div>
      </div>
    </div>
  );
};
