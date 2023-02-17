import "./CardList.css";
import { Products } from "../../Data";
import Card from "../Card";

const CardList = () => {
  return (
    <div className="CardList-container">
      {Products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
