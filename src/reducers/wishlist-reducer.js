export const wishlistReducer = (wishlist, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      const itemExists = wishlist.find(
        (wishlistItem) => wishlistItem.product === payload.product
      );
      if (!itemExists) return [...wishlist, { ...payload }];
      break;

    case "REMOVE_FROM_WISHLIST":
      return wishlist.filter(
        (wishlistItem) => wishlistItem.product !== payload.product
      );

    case "INITIALIZE":
      return wishlist.concat(payload.wishlistItems);

    default:
      return wishlist;
  }
};
