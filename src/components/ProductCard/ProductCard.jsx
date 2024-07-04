import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { styles } from "./estilos";

export const ProductCard = ({ title, brand, description, price, img }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" src={img} alt={title} />
        <CardContent sx={styles.textArea}>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {price}
          </Typography>
          <Typography variant="body2" color="" align="center">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
