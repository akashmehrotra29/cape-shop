import { useWishlist } from "../../contexts";
import { serverCall } from "../../serverCalls";

export const RemoveFromWishlistButton = ({ item }) => {
  const removeFromWishlistHandler = async () => {
    try {
      await serverCall({
        request: "DELETE",
        url: `/api/wishlistitems/${item.productId}`
      });

      dispatch({ type: "REMOVE", payload: item });

      console.log("removed from wishlist");
    } catch {
      console.log(" failed to remove from wishlist");
    } finally {
      console.log("remove loder");
    }
  };

  const { dispatch } = useWishlist();
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
