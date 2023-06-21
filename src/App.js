import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import ProductsList from "./Components/ProductsList/ProductsList";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Slider />
      <ProductsList/>
    </div>
  );
}

export default App;
