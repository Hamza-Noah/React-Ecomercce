import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import ProductsList from "./Components/ProductsList/ProductsList";
import About from "./Components/About/About.jsx";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/slider" element={<Slider />} />
        <Route path="/product-list" element={<ProductsList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
