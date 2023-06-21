import React from "react";


export default function Product(props) {
  const { product } = props;

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <a href="#" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    </>
  );
}
