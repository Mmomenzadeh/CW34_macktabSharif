import Modal from "../Modal";
import "./Header.css";

const Header = () => {



  return (
    <header>
      <ul>
        <li>Store</li>
        <li>About</li>
       <Modal/>
      </ul>
      <div className="heading-container">
        <h1>Store</h1>
        <h3>This is the Store Page.</h3>
      </div>
    </header>
  );
};

export default Header;
