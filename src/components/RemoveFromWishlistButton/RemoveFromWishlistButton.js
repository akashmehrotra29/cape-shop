import axios from "axios";
import { useWishlist } from "../../contexts";
import { serverCall } from "../../serverCalls";

export const RemoveFromWishlistButton = ({ _id }) => {
  // const removeFromWishlistHandler = async () => {
  //   try {
  //     await serverCall({
  //       request: "DELETE",
  //       url: `/api/wishlistitems/${item.productId}`
  //     });

  //     dispatch({ type: "REMOVE", payload: item });

  //     console.log("removed from wishlist");
  //   } catch {
  //     console.log(" failed to remove from wishlist");
  //   } finally {
  //     console.log("remove loder");
  //   }
  // };

  const { dispatch } = useWishlist();

  const removeFromWishlistHandler = async () => {
    try {
      const response = await axios.delete(
        `https://capeshop-api.akashmehrotra29.repl.co/wishlist/${_id}`
      );
      // console.log("remove from wishlist", { response });
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
    <div>
      <div
        onClick={removeFromWishlistHandler}
        className="icon-position fa fa-heart fa-2x fa-custom-heart"
      >
        {" "}
      </div>
    </div>
  );
};
