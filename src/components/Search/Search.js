import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
