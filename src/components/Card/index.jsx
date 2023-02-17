import "./Card.css";

const Card = ({productInfo}) => {
  return (


    <div className="card-container">
        <div className="img-container">
        <img src={productInfo.img} alt={productInfo.name} />
        </div>
        <p>{productInfo.name}</p>
        <span>{productInfo.price}</span>
        <div className="infoBtn">
            <button onClick={()=>{}}>ADD TO CART</button>
             <p>DETAILS</p>

        </div>
    </div>
  )



};

export default Card;
