export const cartReducer = (cart, { type, payload }) => {
  switch (type) {
    case "ADDTOCART":
      const itemExists = cart.find(
        (cartItem) => cartItem.product === payload.product
      );
      if (!itemExists) return [...cart, payload.product];

      break;

    case "INCREMENT":
      return cart.map((cartItem) =>
        cartItem.product === payload.productId
          ? { ...cartItem, quantity: payload.quantity }
          : cartItem
      );

    case "DECREMENT":
      // if (payload.quantity > 1) {
      return cart.map((cartItem) =>
        cartItem.product === payload.productId
          ? { ...cartItem, quantity: payload.quantity }
          : cartItem
      );
    // }
    // return cart.filter((cartItem) => cartItem.product !== payload.productId);

    case "DELETE":
      return cart.filter((cartItem) => cartItem.product !== payload.productId);

    case "INITIALIZE":
      return cart.concat(payload.cartItems);

    default:
      return cart;
  }
};
