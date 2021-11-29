import axios from "axios";
import { useWishlist } from "../../contexts";

export const AddToWishlistButton = ({ _id }) => {
  const { dispatch } = useWishlist();

  const addToWishlistHandler = async () => {
    try {
      const response = await axios.post(
        `https://capeshop-api.akashmehrotra29.repl.co/wishlist/`,
        { _id }
      );
      if (response.status === 201) {
        dispatch({
          type: "ADD_TO_WISHLIST",
          payload: { product: response.data.wishlistItem.product }
        });
      }
    } catch (error) {
      console.log("failed to add to wishlist", error);
    }
  };

  return (
    <div>
      <div
        onClick={addToWishlistHandler}
        className="icon-position far fa-heart fa-2x fa-custom-heart"
      >
        {" "}
      </div>
    </div>
  );
};
