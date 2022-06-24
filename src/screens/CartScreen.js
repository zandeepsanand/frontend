import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import { deleteFromCart } from '../actions/cartAction';

export default function CartScreen() {

    const cartreducerstate=useSelector(state=>state.addToCartReducer)
    const dispatch = useDispatch()

    const {cartItems}=cartreducerstate

    var subtotal= cartItems.reduce((acc , item)=> acc +(item.price*item.quantity),0)
    return (
    <div>
      <div className='row mt-5 justify-content-center'>
        <div className='col-md-8 card'>
        <h3 className='text-center m-3'>My Cart</h3>
            <table className='table table-bordered'>
              
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item=>{
                    return <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item, e.target.value))}}> 
                            {[...Array(item.countInStock).keys()].map((x,i)=>{
                                return <option value={i+1}>{i+1}</option>
                            })}
                            
                            </select></td>
                        <td>{item.quantity*item.price}</td>
                        <td><i class="fa fa-trash" aria-hidden="true" onClick={()=>dispatch(deleteFromCart(item))}></i></td>
                   
                    </tr>
                     
                })}
                <div className='text-center  m-5 '>
                  <h3>SubTotal: {subtotal} rs/-</h3>
                  </div>

              </tbody>

            </table>

        </div>

      </div>

    </div>
    
  )
}
