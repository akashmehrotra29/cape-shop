export const wishlistReducer = (wishlist, { type, payload }) => {
  switch (type) {
    case "ADD":
      const itemExists = wishlist.find(
        (wishlistItem) => wishlistItem.id === payload.id
      );
      if (!itemExists) return [...wishlist, { ...payload }];

    case "REMOVE":
      return wishlist.filter((wishlistItem) => wishlistItem.id !== payload.id);

    default:
      return wishlist;
  }
};
