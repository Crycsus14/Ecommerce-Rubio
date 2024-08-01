import { Grid,Typography } from "@mui/material";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { styles } from "../../components/ProductCard/estilos";

const ItemList = ({ items }) => {
  return (
    <>
      <div>
        <Typography variant="h2"  color="#ffffff" sx={styles.estiloTitulo}>
          Bienvenido a tu consecionario online
        </Typography>
      </div>
      <div>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items.map((elemento) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={elemento.id}>
              <ProductCard
                title={elemento.title}
                brand={elemento.brand}
                description={elemento.description}
                price={elemento.price}
                img={elemento.img}
                id={elemento.id}
              />
            </Grid>
          );
        })}
      </Grid>
      </div>
    </>
  );
};

export default ItemList;
