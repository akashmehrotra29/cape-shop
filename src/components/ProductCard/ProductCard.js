import { useCart } from "../../contexts";
import { useWishlist } from "../../contexts";
import { UpdateCartButton } from "../UpdateCartButton/UpdateCartButton";
import { AddToCartButtton } from "../AddToCartButton/AddToCartButton";
import { AddToWishlistButton } from "../AddToWishlistButton/AddToWishlistButton";
import { RemoveFromWishlistButton } from "../RemoveFromWishlistButton/RemoveFromWishlistButton";

export const ProductCard = ({ productItem }) => {
  const { cart } = useCart();
  // console.log({ cart });
  const { wishlist } = useWishlist();
  // console.log("from product card", { wishlist });
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
            // console.log({ wishlistItem });
            if (wishlistItem.product === productItem._id) {
              currWishlistItem = productItem;
              // console.log({ currWishlistItem });
              return wishlistItem;
            }
            return null;
          }) ? (
            <RemoveFromWishlistButton _id={currWishlistItem._id} />
          ) : (
            <AddToWishlistButton _id={productItem._id} />
          )}
          {/*  */}
        </div>
        <div className="product-description">
          <h3> {productItem.name} </h3>
          <p> Price: Rs {productItem.price} </p>

          {cart.find((cartItem) => {
            // console.log("from product card", { cartItem }, { productItem });
            if (cartItem.product === productItem._id) {
              currCartItem = cartItem;
              return cartItem;
            }
            return null;
          }) ? (
            <UpdateCartButton _id={currCartItem.product} />
          ) : (
            <AddToCartButtton _id={productItem._id} />
          )}
        </div>
      </div>
    </div>
  );
};
