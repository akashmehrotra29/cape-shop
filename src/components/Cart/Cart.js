import { useCart } from "../../contexts";
import { UpdateCartButton } from "../UpdateCartButton/UpdateCartButton";

export const Cart = () => {
  const { cart } = useCart();

  const getCartTotal = (items) => {
    let total = 0;
    items.forEach((cartItem) => {
      total += cartItem.quantity * cartItem.price;
    });
    return total;
  };

  return (
    <div>
      <div className="horizontal-card-wrap">
        {cart.map((cartItem) => {
          return (
            <div className="horizontal-card-center" key={cartItem.productId}>
              <div className="horizontal-card">
                <div className="thumbnail">
                  <img
                    className="img-responsive-horizontal"
                    src={cartItem.image}
                    alt=""
                  />
                </div>
                <div className="product-description">
                  <h3> {cartItem.name} </h3>
                  <p> Price: {cartItem.price}</p>
                  <UpdateCartButton item={cartItem} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-total">
        {" "}
        <strong>Cart Total:</strong> Rs {getCartTotal(cart)}
      </div>
    </div>
  );
};
