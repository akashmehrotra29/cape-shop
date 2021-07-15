import axios from "axios";
import { useEffect, useState } from "react";
import { useWishlist } from "../../contexts";
import { RemoveFromWishlistButton } from "../RemoveFromWishlistButton/RemoveFromWishlistButton";

export const Wishlist = () => {
  const { wishlist, dispatch } = useWishlist();
  const [populatedWishlist, setPopulatedWishlist] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://capeshop-api.akashmehrotra29.repl.co/wishlist`
        );
        if (response.status === 200) {
          setPopulatedWishlist(response.data.wishlistItems);
        }
      } catch (error) {
        console.log("unable to load populated wishlist", error);
      }
    })();
  }, [wishlist]);

  const removeFromWishlistHandler = async (_id) => {
    // console.log(_id);
    try {
      const response = await axios.delete(
        `https://capeshop-api.akashmehrotra29.repl.co/wishlist/${_id}`
      );
      if (response.status === 200) {
        dispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: { product: response.data.deleted.product }
        });
      }
    } catch (error) {
      console.log("failed to remove from wishlist", error);
    }
  };

  return (
    <div className="grid-row grid-wrapper">
      {populatedWishlist.map((wishlistItem) => {
        // console.log("from populated wishlist ", { wishlistItem });
        return (
          <div key={wishlistItem._id}>
            <div className="vertical-card">
              <div className="thumbnail">
                <img
                  className="img-responsive-vertical"
                  src={wishlistItem.product.image}
                  alt=""
                />
                <RemoveFromWishlistButton _id={wishlistItem.product._id} />
              </div>
              <div className="product-description">
                <h3> {wishlistItem.product.name} </h3>
                <p> Price: Rs {wishlistItem.product.price} </p>
                <div className="button-container">
                  <div
                    onClick={() => {
                      removeFromWishlistHandler(wishlistItem.product._id);
                    }}
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
