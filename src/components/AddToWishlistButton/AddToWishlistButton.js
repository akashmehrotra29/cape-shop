import axios from "axios";
import { useWishlist } from "../../contexts";
import { serverCall } from "../../serverCalls";

export const AddToWishlistButton = ({ _id }) => {
  const { dispatch } = useWishlist();

  // const addToWishlistHandler = async () => {
  //   // console.log({ item });
  //   const { id, ...itemWithoutId } = item; //remove
  //   try {
  //     await serverCall({
  //       request: "POST",
  //       url: "/api/wishlistitems",
  //       dataBody: { wishlistitem: { ...itemWithoutId } }
  //     });

  //     dispatch({ type: "ADD", payload: item });

  //     console.log("toast: added to wishlist");
  //   } catch {
  //     console.log("toast: failed to add to wishlist");
  //   } finally {
  //     console.log("remove toast");
  //   }
  // };

  const addToWishlistHandler = async () => {
    try {
      const response = await axios.post(
        `https://capeshop-api.akashmehrotra29.repl.co/wishlist/`,
        { _id }
      );
      // console.log("add to wishlist", { response });
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
