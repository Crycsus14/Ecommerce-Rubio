import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Layout from "./components/Layout/Layout";
import Checkout from "./pages/Checkout/Checkout";
import CartContextProvider from "./context/CartContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Dashboard from "./pages/itemListContainer/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Route>

          <Route element= {<ProtectedRoutes/>} >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route
            path="*"
            element={<h1> Ups algo salio mal: ERROR 404 Not found</h1>}
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
