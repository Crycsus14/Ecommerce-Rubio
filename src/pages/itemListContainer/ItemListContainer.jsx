import ItemList from "./ItemList";
import { products } from "../../products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";
import "../../index.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { name } = useParams();
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = products.filter(
        (product) => product.category === name
      );
      if (x) {
        setTimeout(() => {
          resolve(name ? arrayFiltered : products);
        }, 2000);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);

  if (items.length === 0) {
    return (
      <div className="estilosItemList">
        <Box>
          <Skeleton
            sx={{ bgcolor: "grey.800" }}
            variant="rounded"
            width={400}
            height={200}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rounded"
            width={400}
            height={100}
          />
        </Box>
        <Box>
          <Skeleton
            sx={{ bgcolor: "grey.800" }}
            variant="rounded"
            width={400}
            height={200}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rounded"
            width={400}
            height={100}
          />
        </Box>
        <Box>
          <Skeleton
            sx={{ bgcolor: "grey.800" }}
            variant="rounded"
            width={400}
            height={200}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rounded"
            width={400}
            height={100}
          />
        </Box>
        <Box>
          <Skeleton
            sx={{ bgcolor: "grey.800" }}
            variant="rounded"
            width={400}
            height={200}
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rounded"
            width={400}
            height={100}
          />
        </Box>
      </div>
    );
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
