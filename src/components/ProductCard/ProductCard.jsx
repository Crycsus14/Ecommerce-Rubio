export const ProductCard = ({ title, brand, description, price, img }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{brand}</h3>
      <h3>{price}</h3>
      <h4>{description}</h4>
      <img src={img} alt="" />
    </div>
  );
};

export default ProductCard;
