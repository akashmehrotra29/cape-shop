export const cartReducer = (cart, { type, payload }) => {
  switch (type) {
    case "ADDTOCART":
      const itemExists = cart.find((cartItem) => cartItem.id === payload.id);
      if (!itemExists) return [...cart, { ...payload, quantity: 1 }];
    // return cart.concat({ payload, quantity: 1 }); //sallow copy with concat creates problem

    case "INCREMENT":
      return cart.map((cartItem) =>
        cartItem.id === payload.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

    case "DECREMENT":
      if (payload.quantity > 1) {
        return cart.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return cart.filter((cartItem) => cartItem.id !== payload.id);

    default:
      return cart;
  }
};
