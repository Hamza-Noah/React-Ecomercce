import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

export default function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProducts] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${api_url}/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    console.log("Product:", product);
  }, [product]);

  function printProduct() {
    console.log(product);
  }
  return (
    <>
      <button onClick={printProduct}>Print Product in console</button>
      <Product product={product} showButton={false} />
    </>
  );
}
