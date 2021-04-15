import { useCart } from "../../contexts";
import { serverCall } from "../../serverCalls";

export const AddToCartButtton = ({ item }) => {
  const { dispatch } = useCart();

  const addToCartHandler = async () => {
    const { id, ...itemWithoutId } = item;
    try {
      await serverCall({
        request: "POST",
        url: "/api/cartitems",
        dataBody: { cartitem: { ...itemWithoutId, quantity: 1 } }
      });

      dispatch({ type: "ADDTOCART", payload: item });

      console.log("toast: added to cart");
    } catch {
      console.log("toast: failed to add");
    } finally {
      console.log("remove toast");
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
