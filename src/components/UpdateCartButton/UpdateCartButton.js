import { useCart } from "../../contexts";

export const UpdateCartButton = ({ item }) => {
  const { dispatch } = useCart();
  return (
    <div>
      <div className="button-container">
        <button
          onClick={() => dispatch({ type: "DECREMENT", payload: item })}
          className="btn btn-add"
        >
          -
        </button>
        {item.quantity}
        <button
          onClick={() => dispatch({ type: "INCREMENT", payload: item })}
          className="btn btn-remove"
        >
          +
        </button>
      </div>
    </div>
  );
};
