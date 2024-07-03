import ItemList from "./ItemList";
import "./ItemListContainer.css";
const ItemListContainer = ({ greeting }) => {
  return <ItemList greeting={greeting} />;
};

export default ItemListContainer;
