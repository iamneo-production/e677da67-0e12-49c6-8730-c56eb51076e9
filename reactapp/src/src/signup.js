import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
// import "./signup.css";
import axios from 'axios'

export default function SignUp (){
  const[Firstname,setFirstName]=useState('')
  const[Lastname,setLastname]=useState('')
  const[Mobile,setMobile]=useState('')
  const[Address,setAddress]=useState('')
  const[Email,setEmail]=useState('')
  const[Password,setPassword]=useState('')
  // const[Error,setError]=useState(false)

  function isFirstFunctionTrue() {
      // Replace this condition with your own logic
      // For example, you might check if some input is valid or if a certain condition is met
      
      return true;
    }
    const navigate=useNavigate()
    function checkAndCall() {
      if (isFirstFunctionTrue()) {
          if(!Email.includes('@gmail.com')){
                  setEmail(Email+"@gmail.com");
          }
      const data = {
        fname:Firstname,
        lname:Lastname,
        mobile:Mobile,
        address:Address,
        email:Email,
        pass:Password 
        };
        axios.post('http://localhost:8080/addDetails', data);
        navigate('/nav');
      }
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      checkAndCall();
    }
    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text" required onChange={e=>setFirstName(e.target.value)}
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" required onChange={e=>setLastname(e.target.value)} className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Mobile Number</label>
          <input type="number" required onChange={e=>setMobile(e.target.value)} className="form-control" placeholder="Enter Mobile Number" />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input type="text" required onChange={e=>setAddress(e.target.value)}className="form-control" placeholder="Enter Your Address" />
        </div>

        <div className="mb-3">
          <label>Enter Your Email</label>
          <input
            type="email" required onChange={e=>setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password" required onChange={e=>setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
          Sign Up 
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
}