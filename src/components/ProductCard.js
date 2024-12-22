import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, category, brand }) => {
  return (
    <div className="card">
      <img
        src={`/assets/${product.image}`}
        alt={product.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <Link to={`/category/${category}/${brand}/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
