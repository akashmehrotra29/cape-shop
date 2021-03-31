export const Navbar = ({ route, setRoute }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links">
          <li className="nav-item">
            <a onClick={() => setRoute("products")}>products</a>
          </li>
          <li className="nav-item">
            <a onClick={() => setRoute("wishlist")}>wishlist</a>
          </li>
          <li className="nav-item">
            <a onClick={() => setRoute("cart")}>cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
