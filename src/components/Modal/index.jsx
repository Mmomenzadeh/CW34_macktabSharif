import "./Modal.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="background"></div>
      <div className="modal">
        
       
        <div className="Cart_Info">
          <div className="cart_info_top">
          <div className="order_products">
           <div className="order_product_item">
           <div className="img">
              <img
                src="https://react-shooping-cart.netlify.app/img/1.jpg?v=1"
                alt=""
              />
            </div>
            <div className="product-name-price">
              <p>shoes</p>
              <span>Price : 150</span>
            </div>
            <div className="quantity">
              <p>QTY : 5 </p>
            </div>
            <div className="cart_info-btn">
          <button>
            <BsTrash />
          </button>
          <button>
            <AiOutlinePlusCircle />
          </button>
        </div>
           </div>
          </div>
       
          </div>
         
          <div className="cart_info_bottom">
            <button>Close</button>
          </div>
        </div>
  
     
        <div className="TotalPayment">
        
         <p>Total Item</p>
         <span className="qty-payment">1</span>
       
          <p>Total Payment </p>
          <span className="price-payment">35000</span>
          <div className="payment-btn">
            <button>CHECKOUT</button>
            <button>CLEAR</button>
          </div>
        </div>




        {/* Modal DIV */}
      </div>
      {/* Modal_container Div */}
    </div>
  );
};

export default Modal;
