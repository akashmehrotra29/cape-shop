import { useEffect, useReducer, useState } from "react";
import { data } from "../data";
import { useCart } from "../contexts/cart-context";
import { UpdateCartButton } from "./UpdateCartButton";
import { AddToCartButtton } from "./AddToCartButtton";
import { useWishlist } from "../contexts/wishlist-context";
import { AddToWishlistButton } from "./AddToWishlistButton";
import { RemoveFromWishlistButton } from "./RemoveFromWishlistButton";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  let currCartItem, currWishlistItem;

  useEffect(() => setProducts(data), []);

  return (
    <div className="grid-row grid-wrapper">
      {products.map((productItem) => {
        return (
          <div key={productItem.id}>
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
          </div>
        );
      })}
    </div>
  );
};
