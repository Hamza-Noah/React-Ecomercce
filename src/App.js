import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import ProductList from "./Components/ProductList/ProductList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

import Product from "./Components/Product/Product";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="text" element={<>hey</>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
