export const addToCart=(product , quantity)=>(dispatch,getState)=>{

    const cartItem={
        name:product.name,
        _id:product._id,
      
        countInStock:product.countInStock,
        price:product.price,
        quantity:quantity

    }
  dispatch({type:"ADD_TO_CART", payload:cartItem})

  localStorage.setItem('cartItems', JSON.stringify(getState().addToCartReducer.cartItems))
}

export const deleteFromCart=(item)=>dispatch=>{
  dispatch({type:'DELETE_FROM_CART', payload:item})
}