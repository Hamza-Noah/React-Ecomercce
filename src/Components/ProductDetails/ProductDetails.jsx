import React from "react";
import Product from "../Product/Product";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return <>{<Product product={product} showButton={false} />}</>;
}
