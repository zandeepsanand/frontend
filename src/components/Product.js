import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="col-md-3  m-5 card    p-2 " >
    
      <Link to={`description/${product._id}`} style={{ textDecoration: "none" }}>
        <img
          className="img-fluid rounded mx-auto d-block m-5"
          src={product.image}
        />
        <h4 className="mx-auto d-block">{product.name}</h4>
        <Rating
          initialRating={product.rating}
          emptySymbol="fa-regular fa-star fa-1x"
          fullSymbol="fa fa-star fa-1x"
          style={{ color: "orange" }}
          readonly={true}
        />

        <h5 className="mx-auto d-block">Price: {product.price}/-</h5>
      </Link>
      
    </div>
  );
}
