import React , {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { registerNewUser } from '../actions/userAction';

export default function RegisterScreen() {

const [name, setname]=useState();
const [email, setemail]=useState();
const [password, setpassword]=useState();
const [cpassword, setcpassword]=useState();
const dispatch=useDispatch();
// const [name, setname]=useState();

function register(e){
  e.preventDefault()
  const user={
    name:name,
    email:email,
    password:password
  }
  if(password==cpassword){
dispatch(registerNewUser())

  }
  else{
    alert("Password is not match")
  }
}

  return (
    <div>
      <form onSubmit={register}>
      <div className='row justify-content-center'>
        <div className='col-md-4'>

          <div className=''>
           
            <h3 className='m-4 text-center'>Register</h3>
            <input type="text" placeholder="Name" className='form-control m-3' required value={name} onChange={(e)=>{
              setname(e.target.value);
            }}></input>
             <input type="email" placeholder="Enter email" className='form-control m-3' required value={email} onChange={(e)=>{
              setemail(e.target.value);
            }}></input>
             <input type="text" placeholder="New password" className='form-control m-3' required value={password} onChange={(e)=>{
              setpassword(e.target.value);
            }}></input>
             <input type="text" placeholder="Confirm password" className='form-control m-3' required value={cpassword} onChange={(e)=>{
              setcpassword(e.target.value);
            }}></input>
            <div className='text-center'>
            <button type='submit' className='btn btn-success m-3 '>Register</button></div>
            
          </div>
          
        </div>
        
        
      

      </div>
      </form>
    </div>
  )
}
