import axios from "axios";
import { useCart } from "../../contexts";
import { serverCall } from "../../serverCalls";

export const UpdateCartButton = ({ _id }) => {
  const { cart, dispatch } = useCart();

  // const currQuantity = (id) => cart.find((cartItem) => cartItem.product === id)
  //   ?.quantity;

  const cartItemQuantity = (_id) => {
    // console.log({ cart });
    return cart.find((cartItem) => {
      return cartItem.product === _id;
    })?.quantity;
  };

  // const incQtyHandler = async () => {
  //   try {
  //     serverCall({
  //       request: "PATCH",
  //       url: `/api/cartitems/${item.productId}`,
  //       dataBody: { cartitem: { quantity: item.quantity + 1 } }
  //     });

  //     dispatch({ type: "INCREMENT", payload: item });

  //     console.log("increased qty in cart");
  //   } catch {
  //     console.log("failed to inc");
  //   } finally {
  //     console.log("remove loder");
  //   }
  // };

  // const decQtyHandler = async () => {
  //   if (item.quantity > 1) {
  //     try {
  //       serverCall({
  //         request: "PATCH",
  //         url: `/api/cartitems/${item.productId}`,
  //         dataBody: { cartitem: { quantity: item.quantity - 1 } }
  //       });

  //       dispatch({ type: "DECREMENT", payload: item });

  //       console.log("decreased qty in cart");
  //     } catch {
  //       console.log("failed to dec");
  //     } finally {
  //       console.log("remove loder");
  //     }
  //   } else {
  //     try {
  //       serverCall({
  //         request: "DELETE",
  //         url: `/api/cartitems/${item.productId}`
  //       });

  //       dispatch({ type: "DECREMENT", payload: item });

  //       console.log("removed qty in cart");
  //     } catch {
  //       console.log(" failed to remove");
  //     } finally {
  //       console.log("remove loder");
  //     }
  //   }
  // };

  // console.log("cartItemQuantity ", cartItemQuantity(_id));

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
    // console.log("95: ", cartItemQuantity(_id));
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
        // console.log("deleted", { response });
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
        {/* {item.quantity} */}
        {cartItemQuantity(_id)}
        <button onClick={incQtyHandler} className="btn btn-round">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
