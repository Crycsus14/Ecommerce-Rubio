
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer  greeting={"Acá está tu nuevo 0Km"} />
      <Footer />
    </>
  );
}

export default App;
