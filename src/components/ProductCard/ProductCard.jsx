import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { styles } from "./estilos";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, brand, description, price, img ,id}) => {
  return (
    <Card sx={styles.cards} >
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
           ${price} USD
          </Typography>
          <Typography variant="body2" color="" align="center">
            {description}
          </Typography>
          <Link to={`/itemDetail/${id}`} style={{textDecoration:"none"}} > <Typography gutterBottom variant="h5" component="div" align="center"sx={{color:"#F25C05"}}>
            + Info
          </Typography></Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
