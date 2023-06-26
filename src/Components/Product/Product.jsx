import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p>Price: {product.price}$</p>
            {showButton && (
              <Link to={`/product/${product.id}`} className="btn btn-primary">
                show more
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
