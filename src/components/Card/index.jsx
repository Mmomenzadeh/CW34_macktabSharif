import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../redux/ShoppingSlice";
import "./Card.css";

const Card = ({ item }) => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.order)

  
  const handleADD = (item)=>{
    dispatch(ADD(item))
    console.log(state);  
  }

 

  return (
    <div className="card-container">
      <div className="img-container">
        <img src={item.img} alt={item.name} />
      </div>
      <p>{item.name}</p>
      <span>{item.price}</span>
      <div className="infoBtn">
        <button onClick={()=>handleADD(item)}>ADD TO CART</button>
        <p>DETAILS</p>
      </div>
    </div>
  );
};

export default Card;
