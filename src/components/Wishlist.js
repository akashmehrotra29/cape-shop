import { useWishlist } from "../contexts/wishlist-context";
import { RemoveFromWishlistButton } from "./RemoveFromWishlistButton";

export const Wishlist = () => {
  const { wishlist, dispatch } = useWishlist();
  return (
    <div className="grid-row grid-wrapper">
      {wishlist.map((wishlistItem) => {
        return (
          <div>
            <div class="vertical-card">
              <div class="thumbnail">
                <img
                  class="img-responsive-vertical"
                  src={wishlistItem.image}
                  alt=""
                />
                <RemoveFromWishlistButton item={wishlistItem} />
              </div>
              <div class="product-description">
                <h3> {wishlistItem.name} </h3>
                <p> Price: Rs {wishlistItem.price} </p>
                <div class="button-container">
                  <div
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: wishlistItem })
                    }
                    class="btn btn-primary"
                  >
                    {" "}
                    remove
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
