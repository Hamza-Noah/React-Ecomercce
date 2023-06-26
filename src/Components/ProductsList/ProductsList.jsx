import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  const [categories, setCategory] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  useEffect((_) => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="text-center p-3">Our Procuts</h2>
        {categories.map((category) => {
          return (
            <button className="btn btn-primary" key={category}>
              {category}
            </button>
          );
        })}

        <div className="row">
          {products.map((product, index) => {
            return (
              <div className="col-3" key={++index}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
