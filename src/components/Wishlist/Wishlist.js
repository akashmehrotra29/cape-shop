import { useWishlist } from "../../contexts";
import { RemoveFromWishlistButton } from "../RemoveFromWishlistButton/RemoveFromWishlistButton";

export const Wishlist = () => {
  const { wishlist, dispatch } = useWishlist();
  return (
    <div className="grid-row grid-wrapper">
      {wishlist.map((wishlistItem) => {
        return (
          <div>
            <div className="vertical-card">
              <div className="thumbnail">
                <img
                  className="img-responsive-vertical"
                  src={wishlistItem.image}
                  alt=""
                />
                <RemoveFromWishlistButton item={wishlistItem} />
              </div>
              <div className="product-description">
                <h3> {wishlistItem.name} </h3>
                <p> Price: Rs {wishlistItem.price} </p>
                <div className="button-container">
                  <div
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: wishlistItem })
                    }
                    className="btn btn-primary"
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
