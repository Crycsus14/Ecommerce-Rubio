import { Grid, } from "@mui/material";
import { ProductCard } from "../../components/ProductCard/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
      {items.map((elemento) => {
        return (
          
            
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <ProductCard
                  key={elemento.id}
                  title={elemento.title}
                  brand={elemento.brand}
                  description={elemento.description}
                  price={elemento.price}
                  img={elemento.img}
                />
              </Grid>
            
         
        );
      })}</Grid>
    </div>
  );
};

export default ItemList;
