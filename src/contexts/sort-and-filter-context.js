import { useReducer, createContext, useContext } from "react";
import { filterReducer } from "../reducers/sort-and-filter-reducer";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [
    { sortBy, showFastDeliveryOnly, showInventoryAll, rangeValue },
    dispatch
  ] = useReducer(filterReducer, {
    sortBy: null,
    showFastDeliveryOnly: false,
    showInventoryAll: true,
    rangeValue: 1000
  });

  const getSortedData = (products, sortBy) => {
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return products.sort((a, b) => a.price - b.price);
    }
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  };

  const getFilteredData = (
    products,
    { showInventoryAll, showFastDeliveryOnly, rangeValue }
  ) => {
    return products
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
      .filter(({ price }) => price <= rangeValue);
  };

  return (
    <FilterContext.Provider
      value={{
        sortBy,
        showFastDeliveryOnly,
        showInventoryAll,
        rangeValue,
        dispatch,
        getSortedData,
        getFilteredData
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
