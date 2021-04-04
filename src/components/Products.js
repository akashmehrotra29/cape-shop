import { useEffect, useReducer, useState } from "react";
import { data } from "../data";
import { useCart } from "../contexts/cart-context";
import { UpdateCartButton } from "./UpdateCartButton";
import { AddToCartButtton } from "./AddToCartButtton";
import { useWishlist } from "../contexts/wishlist-context";
import { AddToWishlistButton } from "./AddToWishlistButton";
import { RemoveFromWishlistButton } from "./RemoveFromWishlistButton";
import { useFilter } from "../contexts/sort-and-filter-context";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const {
    sortBy,
    showFastDeliveryOnly,
    showInventoryAll,
    rangeValue,
    dispatch,
    getSortedData,
    getFilteredData
  } = useFilter();
  let currCartItem, currWishlistItem;

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

        <div class="button-container">
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
          return (
            <div key={productItem.id}>
              <div className="vertical-card">
                <div className="thumbnail">
                  <img
                    className="img-responsive-vertical"
                    src={productItem.image}
                    alt=""
                  />
                  {wishlist.find((wishlistItem) => {
                    if (wishlistItem.id === productItem.id) {
                      currWishlistItem = productItem;
                      return wishlistItem;
                    }
                    return null;
                  }) ? (
                    <RemoveFromWishlistButton item={currWishlistItem} />
                  ) : (
                    <AddToWishlistButton item={productItem} />
                  )}
                  {/*  */}
                </div>
                <div className="product-description">
                  <h3> {productItem.name} </h3>
                  <p> Price: Rs {productItem.price} </p>

                  {cart.find((cartItem) => {
                    if (cartItem.id === productItem.id) {
                      currCartItem = cartItem;
                      return cartItem;
                    }
                    return null;
                  }) ? (
                    <UpdateCartButton item={currCartItem} />
                  ) : (
                    <AddToCartButtton item={productItem} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
