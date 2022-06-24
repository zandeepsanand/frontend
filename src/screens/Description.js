import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import staticdata from "../staticdata";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import {getProductById} from "../actions/productActions"
import { addToCart } from "../actions/cartAction";




export default function Description({ match }) {


  


 
  const { id } = useParams();
 
  const dispatch = useDispatch();
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  ); 
  const { loading, product, error } = getproductbyidstate;
  const [quantity, setquantity]=useState(1);

  function addtocart() {
    dispatch(addToCart(product,quantity))
    
  }


useEffect(() => {
 dispatch(getProductById(id))

}, []); 
  return (
    <div>
         {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something Went wrong...</h1>
      ) : (
        
        <div className="row m-5" >
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <h5 className="p-3 mx-auto d-block pt-4 display-4">
              {product.name}
            </h5>
            <footer class="blockquote-footer mx-auto d-block ">
              {product.category}
            </footer>
            <img src={product.image} />
            <h6 className="ml-3">Available stock = {product.countInStock}</h6>
            <h6 className="ml-3">Category = {product.category}</h6>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <h6 className="p-3">Price : {product.price}/-</h6>

            <Rating
             initialRating={product.rating}
             emptySymbol="fa-regular fa-star fa-1x" 
             fullSymbol="fa fa-star fa-1x" style={{ color:'orange' }} readonly={true}
/>
            <p>Select quantity</p>
            <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <br></br>

            <button type="button" class="btn btn-primary" onClick={addtocart}>
              <i class="fa-solid fa-cart-shopping"></i> Add to cart
            </button>
          </div>
          <br></br>

          <div className="col-md-12 col-sm-12">
            <div className="card">
              <h2 className="p-3">
                <ins>Description </ins>
              </h2>

              <h6 className="p-3"> {product.description}</h6>
            </div>
          </div>
        </div>
      </div>
     
      )}
     
    
    </div>
  );
}
