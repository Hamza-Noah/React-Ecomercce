import React from "react";
import ProductList from "../ProductList/ProductList";
import Slider from "../Slider/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <div className="container">
        <ProductList />
      </div>
    </>
  );
}
