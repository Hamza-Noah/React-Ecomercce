import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import ProductsList from "./Components/ProductsList/ProductsList";
import About from "./Components/About/About.jsx";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Routes>
        <Route path="/product-list" element={<ProductsList />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
  <ProductDetails />
}

export default App;
