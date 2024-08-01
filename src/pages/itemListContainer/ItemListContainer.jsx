import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "../../index.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
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
  
  // const addProducts = () => {
  //   let productsCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(productsCollection, elemento);

  //   })
  // };

  return (
    <div>
      {/* <Button variant="contained" onClick={addProducts}>
        
        Agregar productos
      </Button> */}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
