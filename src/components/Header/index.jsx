import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li>Store</li>
        <li>About</li>
        <li>
          <FaShoppingCart /> Cart
        </li>
      </ul>
      <div className="heading-container">
        <h1>Store</h1>
        <h3>This is the Store Page.</h3>
      </div>
    </header>
  );
};

export default Header;
