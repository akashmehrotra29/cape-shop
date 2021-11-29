import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "../../contexts";
import { UpdateCartButton } from "../UpdateCartButton/UpdateCartButton";

export const Cart = () => {
  const { cart } = useCart();
  const [populatedCart, setPopulatedCart] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://capeshop-api.akashmehrotra29.repl.co/cart/`
        );
        if (response && response.status === 200) {
          setPopulatedCart(response.data.cartItem);
        }
      } catch (error) {
        console.log("unable to get poopulated cart", error);
      }
    })();
  }, [cart]);

  const getCartTotal = (items) => {
    let total = 0;
    items.forEach((cartItem) => {
      total += cartItem.quantity * cartItem.product.price;
    });
    return total;
  };

  return (
    <div>
      <div className="horizontal-card-wrap">
        {populatedCart.map((cartItem) => {
          return (
            <div className="horizontal-card-center" key={cartItem.product._id}>
              <div className="horizontal-card">
                <div className="thumbnail">
                  <img
                    className="img-responsive-horizontal"
                    src={cartItem.product.image}
                    alt=""
                  />
                </div>
                <div className="product-description">
                  <h3> {cartItem.product.name} </h3>
                  <p> Price: {cartItem.product.price}</p>
                  <UpdateCartButton _id={cartItem.product._id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-total">
        {" "}
        <strong>Cart Total:</strong> Rs {getCartTotal(populatedCart)}
      </div>
    </div>
  );
};
