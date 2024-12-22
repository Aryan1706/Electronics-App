import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import './ProductPage.css';

const ProductPage = () => {
  const { category, brand, productId } = useParams();

  const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const normalizedBrand = brand.charAt(0).toUpperCase() + brand.slice(1);

  const product =
    productsData.products[normalizedCategory]?.[normalizedBrand]?.find(
      (item) => item.id === parseInt(productId)
    ) || null;

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-page">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
