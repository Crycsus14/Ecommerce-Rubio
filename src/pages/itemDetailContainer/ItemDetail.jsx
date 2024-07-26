import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import CounterContainer from "../../components/Counter/CounterContainer";
import { styles } from "../../components/ProductCard/estilos";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <>
      <div>
        <Card sx={styles.cards2}>
          <CardActionArea>
            <CardMedia component="img" height="" src={item.img} alt={item.title} />
            <CardContent sx={styles.textArea}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {item.title}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {item.brand}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {item.price}
              </Typography>
              <Typography variant="body2" color="" align="center">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <CounterContainer onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemDetail;
