import { useCart } from "../contexts/cart-context";

export const AddToCartButtton = ({ item }) => {
  const { dispatch } = useCart();
  return (
    <div>
      <div className="button-container">
        <div
          onClick={() => dispatch({ type: "ADDTOCART", payload: item })}
          className="btn btn-primary"
        >
          {" "}
          <i className="fa fa-shopping-cart"></i> add to cart
        </div>
      </div>
    </div>
  );
};
