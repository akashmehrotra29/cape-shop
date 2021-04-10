import { useEffect, useState } from "react";
import { data } from "../../data";
import { useFilter } from "../../contexts";
import { ProductCard } from "../ProductCard/ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const {
    sortBy,
    showFastDeliveryOnly,
    showInventoryAll,
    rangeValue,
    dispatch,
    getSortedData,
    getFilteredData
  } = useFilter();

  useEffect(() => setProducts(data), [products]);

  const sortedProducts = getSortedData(products, sortBy);
  const filteredProducts = getFilteredData(sortedProducts, {
    showInventoryAll,
    showFastDeliveryOnly,
    rangeValue
  });

  return (
    <>
      <fieldset className="field-set ">
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          />
          price - low to high
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            chaecked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          />
          price - high to low
        </label>
      </fieldset>

      <fieldset className="field-set">
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            checked={showInventoryAll}
            onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
          />
          include out of stock
        </label>

        <label>
          <input
            type="checkbox"
            checked={showFastDeliveryOnly}
            onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
          />
          fast delivery only
        </label>

        <label>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={rangeValue}
            onChange={(e) =>
              dispatch({ type: "PRICE_RANGE", payload: e.target.value })
            }
          />
          Price Range : 0 to {rangeValue}
        </label>

        <div className="button-container">
          <button
            onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
            className="btn btn-secondary btn-style"
          >
            clear filters
          </button>
        </div>
      </fieldset>

      <div className="grid-row grid-wrapper">
        {filteredProducts.map((productItem) => {
          return <ProductCard productItem={productItem} />;
        })}
      </div>
    </>
  );
};
