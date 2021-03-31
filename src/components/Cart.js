import { useCart } from "../contexts/cart-context";
import { UpdateCartButton } from "./UpdateCartButton";

export const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <div class="horizontal-card">
              <div class="thumbnail">
                <img
                  class="img-responsive-horizontal"
                  src={cartItem.image}
                  alt=""
                />
              </div>
              <div class="product-description">
                <h3> {cartItem.name} </h3>
                <p> Price: {cartItem.price}</p>
                <UpdateCartButton item={cartItem} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
