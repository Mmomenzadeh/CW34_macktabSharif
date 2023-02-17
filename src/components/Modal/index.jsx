import "./Modal.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { CLREARCART, DELETE } from "../../redux/ShoppingSlice";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Modal = () => {
  const [showModal, setShowMadal] = useState(false);
  const [isCheckOut, setisCheckOut] = useState(false);

  const state = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setShowMadal(false);
    setisCheckOut(false)
  };

  const handleCheckModal = () => {
    setisCheckOut(true);
    dispatch(CLREARCART([]))
  };

  const handleCLEAR = () => {
    dispatch(CLREARCART([]))

  };

  const handleDelete = (id) => {
    dispatch(DELETE(id));
  };

  const handleAddQty = () => {};

  return (
    <>
      <li onClick={() => setShowMadal(true)}>
        <FaShoppingCart /> Cart ({state.cartItems.length})
      </li>

      {showModal ? (
        <li className="modal-li">
          <div className="modal-container">
            <div className="background"></div>
            {!isCheckOut ? (
              <div className="modal">
                <div className="Cart_Info">
                  <div className="cart_info_top">
                    <div className="order_products">
                      {state.cartItems.map((item) => {
                        return (
                          <div className="order_product_item" key={item.id}>
                            <div className="img">
                              <img src={item.img} alt={item.name} />
                            </div>
                            <div className="product-name-price">
                              <p>{item.name}</p>
                              <span>Price : {item.price}</span>
                            </div>
                            <div className="quantity">
                              <p>QTY : {item.quantity} </p>
                            </div>
                            <div className="cart_info-btn">
                              <button onClick={() => handleDelete(item.id)}>
                                <BsTrash />
                              </button>
                              <button onClick={handleAddQty}>
                                <AiOutlinePlusCircle />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="cart_info_bottom">
                    <button onClick={handleCloseModal}>Close</button>
                  </div>
                </div>

                <div className="TotalPayment">
                  <p>Total Item</p>
                  <span className="qty-payment">{state.total}</span>

                  <p>Total Payment </p>
                  <span className="price-payment">{state.totalPrice}</span>
                  <div className="payment-btn">
                    <button onClick={handleCheckModal}>CHECKOUT</button>
                    <button onClick={handleCLEAR}>CLEAR</button>
                  </div>
                </div>

                {/* Modal DIV */}
              </div>
            ) : (
              <div className="checkout-ui">
                <p>Checkout successfull </p>

                <button onClick={handleCloseModal}>Close</button>
              </div>
            )}
            {/* Modal_container Div */}
          </div>
        </li>
      ) : null}
    </>
  );
};

export default Modal;
