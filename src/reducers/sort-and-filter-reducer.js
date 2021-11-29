export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };

    case "TOGGLE_INVENTORY":
      return { ...state, showInventoryAll: !state.showInventoryAll };

    case "TOGGLE_DELIVERY":
      return { ...state, showFastDeliveryOnly: !state.showFastDeliveryOnly };

    case "PRICE_RANGE":
      return { state, rangeValue: payload }; //appending rangeValue property

    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        showInventoryAll: true,
        showFastDeliveryOnly: false,
        rangeValue: 1000
      };

    default:
      return state;
  }
};
