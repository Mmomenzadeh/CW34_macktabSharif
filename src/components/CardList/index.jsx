import "./CardList.css"
import { Products } from "../../Data";
import Card from "../Card";

const CardList = () => {
    return ( 
        <div className="CardList-container">
            {
                Products.map(product =><Card key={product.id} productInfo={product}/>)
            }
        </div>
     );
}
 
export default CardList;