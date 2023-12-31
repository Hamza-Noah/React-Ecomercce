import React, { useState } from "react";
import Product from "../Product/Product";
import { useEffect } from "react";

export default function ProductList() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  function changeProductsCategory(category){
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }

  return (
    <>
      <h1 className="text-center my-4">Our Produts</h1>
      {categories.map((category) => {
        return (
          <button className="btn btn-info me-2 my-3" onClick={_ => changeProductsCategory(category)} key={category}>
            {category}
          </button>
        );
      })}
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={++index} className="col-lg-3">
              <Product product={product} showButton={true} />
            </div>
          );
        })}
      </div>
    </>
  );
}
