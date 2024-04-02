import "./App.css";
import Header from "./Header";
import NavBar from "./components/NavBar.jsx"
import Main from "./components/Main.jsx";
import ItemListContainer from "./ItemListContainer.jsx";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <NavBar/>
      <ItemListContainer greeting="Carolina" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
