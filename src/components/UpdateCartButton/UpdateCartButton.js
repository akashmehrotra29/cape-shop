import { useCart } from "../../contexts";
import { serverCall } from "../../serverCalls";

export const UpdateCartButton = ({ item }) => {
  const { dispatch } = useCart();

  const incQtyHandler = async () => {
    try {
      serverCall({
        request: "PATCH",
        url: `/api/cartitems/${item.productId}`,
        dataBody: { cartitem: { quantity: item.quantity + 1 } }
      });

      dispatch({ type: "INCREMENT", payload: item });

      console.log("increased qty in cart");
    } catch {
      console.log("failed to inc");
    } finally {
      console.log("remove loder");
    }
  };

  const decQtyHandler = async () => {
    if (item.quantity > 1) {
      try {
        serverCall({
          request: "PATCH",
          url: `/api/cartitems/${item.productId}`,
          dataBody: { cartitem: { quantity: item.quantity - 1 } }
        });

        dispatch({ type: "DECREMENT", payload: item });

        console.log("decreased qty in cart");
      } catch {
        console.log("failed to dec");
      } finally {
        console.log("remove loder");
      }
    } else {
      try {
        serverCall({
          request: "DELETE",
          url: `/api/cartitems/${item.productId}`
        });

        dispatch({ type: "DECREMENT", payload: item });

        console.log("removed qty in cart");
      } catch {
        console.log(" failed to remove");
      } finally {
        console.log("remove loder");
      }
    }
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={decQtyHandler} className="btn btn-round">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        {item.quantity}
        <button onClick={incQtyHandler} className="btn btn-round">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
