import { useWishlist } from "../../contexts";
import { serverCall } from "../../serverCalls";

export const AddToWishlistButton = ({ item }) => {
  const { dispatch } = useWishlist();

  const addToWishlistHandler = async () => {
    console.log({ item });
    const { id, ...itemWithoutId } = item; //remove
    try {
      await serverCall({
        request: "POST",
        url: "/api/wishlistitems",
        dataBody: { wishlistitem: { ...itemWithoutId } }
      });

      dispatch({ type: "ADD", payload: item });

      console.log("toast: added to wishlist");
    } catch {
      console.log("toast: failed to add to wishlist");
    } finally {
      console.log("remove toast");
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
