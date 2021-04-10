import { useWishlist } from "../../contexts";

export const RemoveFromWishlistButton = ({ item }) => {
  const { dispatch } = useWishlist();
  return (
    <div>
      <div
        onClick={() => dispatch({ type: "REMOVE", payload: item })}
        className="icon-position fa fa-heart fa-2x fa-custom-heart"
      >
        {" "}
      </div>
    </div>
  );
};
