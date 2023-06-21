import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

export default function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Procuts</h2>
      <div className="container">
        <div className="row">
          {products.map((product, index) => {
            return (
              <div className="col-3" key={++index}>
                <Product product={product} key={++index}/>;
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
