import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    axios.defaults.withCredentials = true

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/auth/login",{username,password})
        .then((result)=>{
          window.localStorage.setItem('id',result.data.id)
          navigate('/')
          console.log(result,"log success")})
        .catch((error)=>{console.log(error)})
    }




  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='p-3 border-1 w-25'>
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="InputUsername" className="form-label">User name</label>
            <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder='Enter username' className="form-control" id="InputUsername" />
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter Password' className="form-control" id="InputPassword" />
          </div>
          <button type="submit" className="mt-1 w-100 btn btn-primary">Login</button>
          <span>Don't Have an Account?</span>
          <Link to="/auth/register"><button className='btn btn-default w-100 mt-2 border'> Register</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login
