import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className="container">
        <div className="card my-5">
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <div className="d-flex justify-content-between align-items-center mt-4">
              {showButton && (
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  Details
                </Link>
              )}
              <p>Price {product.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
