import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
// import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Popper from 'popper.js';


export default function Navbar() {

  const addtocartreducer= useSelector(state=>state.addToCartReducer);
  const {cartItems}=addtocartreducer

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
   
      <a className="navbar-brand text-light " href='/' >Orion Solar</a>
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
         
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item"> 
            <a className="nav-link " href="/cart" >
              <i class="fa-solid fa-cart-shopping" ></i>
              {cartItems.length}
              </a>
           
            
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}
