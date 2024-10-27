import React from "react";
import { Link } from "react-router-dom";
import styles from "./product.module.css";
import RatingStars from "../RatingStars/RatingStars"

export default function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className={`container ${styles.product}`}>
        <div className="card h-100">
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap ">
              <p>Price {product.price}$</p>
              <RatingStars rating={product.rating.rate} />
              {showButton && (
                <Link to={`/product/${product.id}`} className="btn btn-primary w-100 mt-3">
                  Details
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
