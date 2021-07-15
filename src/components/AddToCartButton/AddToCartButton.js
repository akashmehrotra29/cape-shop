import axios from "axios";
import { useCart } from "../../contexts";

export const AddToCartButtton = ({ _id }) => {
  const { dispatch } = useCart();

  const addToCartHandler = async () => {
    try {
      const response = await axios.post(
        `https://capeshop-api.akashmehrotra29.repl.co/cart/`,
        { _id }
      );
      if (response.status === 201) {
        dispatch({
          type: "ADDTOCART",
          payload: { product: response.data.cartItem }
        });
      }
    } catch (error) {
      console.log("failed to add to cart", error);
    }
  };

  return (
    <div>
      <div className="button-container">
        <div onClick={addToCartHandler} className="btn btn-primary">
          {" "}
          <i className="fa fa-shopping-cart"></i> add to cart
        </div>
      </div>
    </div>
  );
};
