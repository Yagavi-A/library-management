import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000", {
        name,
        email,
        password,
      });

      if (res.data === "exist") {
        navigate('/book');
      } else if (res.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }


  return (
    <div className='login'>
      <h1>Login</h1><br/>
      <form onSubmit={submit}>
        {!signedUp && (
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        )}
        {!signedUp && (
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        )} <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
