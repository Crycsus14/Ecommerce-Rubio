import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
        <Route path="*" element={<h1> Ups algo salio mal: ERROR 404 Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
