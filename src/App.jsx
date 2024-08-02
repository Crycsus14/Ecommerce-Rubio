import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CartContextProvider from "./context/CartContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Dashboard from "./pages/dashboard/Dashboard";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => {
              return <Route key={id} path={path} element={<Element />} />;
            })}
          </Route>
          <Route element={<ProtectedRoutes />}>
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
