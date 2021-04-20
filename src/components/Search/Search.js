import styles from "./Search.module.css";

export const Search = ({ setSearch }) => {
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.textArea}
        placeholder="search products"
        type="text"
        onChange={searchHandler}
      />
    </div>
  );
};
