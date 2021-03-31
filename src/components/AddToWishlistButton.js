import { useWishlist } from "../contexts/wishlist-context";

export const AddToWishlistButton = ({ item }) => {
  const { dispatch } = useWishlist();
  return (
    <div>
      <div
        onClick={() => dispatch({ type: "ADD", payload: item })}
        className="icon-position far fa-heart fa-2x fa-custom-heart"
      >
        {" "}
      </div>
    </div>
  );
};
