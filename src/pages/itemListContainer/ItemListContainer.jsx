import "./ItemListContainer.css";
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="bodyContainer">
      <h1>Program-autos</h1>
      <br />
      <br />
      <h2>{greeting}</h2>
    </div>
    
  );
};

export default ItemListContainer;
