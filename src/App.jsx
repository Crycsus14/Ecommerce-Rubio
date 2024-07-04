import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar>
        <br />
        <ItemListContainer />
        <br />
        <Footer />
      </NavBar>
    </>
  );
}

export default App;
