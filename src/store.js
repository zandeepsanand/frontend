import { getAllProductReducer, getProductByIdReducer } from "./reducers/productReducer";
import { addToCartReducer } from "./reducers/cartReducer";
import { registerNewUserReducer } from "./reducers/userReducer";

import {combineReducers} from 'redux';

import {createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const finalReducer =combineReducers({
  getAllProductReducer:getAllProductReducer  ,
 getProductByIdReducer :getProductByIdReducer,
 addToCartReducer : addToCartReducer,
 registerNewUserReducer: registerNewUserReducer
})

const cartItems= localStorage.getItem('cartItems') ?JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  addToCartReducer : {cartItems :cartItems}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
const store = createStore(finalReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))

  export default store