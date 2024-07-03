export const ProductCard = ({ title, brand, description, price, img }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{brand}</h3>
      <h3>{price}</h3>
      <p>{description}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default ProductCard;
