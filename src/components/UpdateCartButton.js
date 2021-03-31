import { useCart } from "../contexts/cart-context";

export const UpdateCartButton = ({ item }) => {
  const { dispatch } = useCart();
  return (
    <div>
      <div class="button-container">
        <button
          onClick={() => dispatch({ type: "DECREMENT", payload: item })}
          class="btn btn-add"
        >
          -
        </button>
        {item.quantity}
        <button
          onClick={() => dispatch({ type: "INCREMENT", payload: item })}
          class="btn btn-remove"
        >
          +
        </button>
      </div>
    </div>
  );
};
