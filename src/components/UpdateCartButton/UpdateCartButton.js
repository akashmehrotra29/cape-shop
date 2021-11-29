import axios from "axios";
import { useCart } from "../../contexts";

export const UpdateCartButton = ({ _id }) => {
  const { cart, dispatch } = useCart();

  const cartItemQuantity = (_id) => {
    return cart.find((cartItem) => {
      return cartItem.product === _id;
    })?.quantity;
  };

  const incQtyHandler = async () => {
    try {
      const response = await axios.post(
        `https://cape-shop-api.akashmehrotra29.repl.co/cart/${_id}`,
        { quantity: cartItemQuantity(_id) + 1 }
      );
      console.log({ response });
      if (response.status === 200) {
        dispatch({
          type: "INCREMENT",
          payload: {
            productId: response.data.updatedProduct._id,
            quantity: response.data.updatedProduct.quantity
          }
        });
      }
    } catch (error) {
      console.log("unable to increase quantity in cart", error);
    }
  };

  const decQtyHandler = async () => {
    if (cartItemQuantity(_id) > 1) {
      try {
        const response = await axios.post(
          `https://cape-shop-api.akashmehrotra29.repl.co/cart/${_id}`,
          { quantity: cartItemQuantity(_id) - 1 }
        );
        console.log("updated", { response });
        if (response.status === 200) {
          dispatch({
            type: "DECREMENT",
            payload: {
              productId: response.data.updatedProduct._id,
              quantity: response.data.updatedProduct.quantity
            }
          });
        }
      } catch (error) {
        console.log("unable to decrease quantity in cart", error);
      }
    } else {
      try {
        const response = await axios.delete(
          `https://cape-shop-api.akashmehrotra29.repl.co/cart/${_id}`
        );
        if (response.status === 200) {
          dispatch({
            type: "DELETE",
            payload: {
              productId: response.data.deleted.product
            }
          });
        }
      } catch (error) {
        console.log("unable to delete item from cart", error);
      }
    }
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={decQtyHandler} className="btn btn-round">
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>
        {cartItemQuantity(_id)}
        <button onClick={incQtyHandler} className="btn btn-round">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
