import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product";
import { getAllProducts } from "../actions/productActions";

export default function Homescreen() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductReducer
  );
  const { loading, products, error } = getallproductsstate;

  // const [products , setproducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // axios.get('/api/products/getallproducts').then(res=>{
    //   console.log(res);
    //   setproducts(res.data);

    // }).catch(err=>{
    //   console.log(err)
    // })
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="row justify-content-center ">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something Went wrong...</h1>
      ) : (
        products.map((product) => {
          return <Product product={product} key={product._id}/>;
        })
      )}
    </div>
  );
}
