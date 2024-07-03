import { ProductCard } from "../../components/ProductCard/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="bodyContainer">
      {items.map((elemento) => {
        return (
        <ProductCard
          key={elemento.id}
          title={elemento.title}
          brand={elemento.brand}
          description={elemento.description}
          price={elemento.price}
          img={elemento.img}
        />);
      })}
    </div>
  );
};

export default ItemList;
