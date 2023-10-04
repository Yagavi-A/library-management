import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
      });

      if (res.data === "exist") {
        alert("User already exists");
      } else if (res.data === "notexist") {
        navigate('/login');
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  return (
    <div className='signup'>
      <h1>Sign Up</h1><br/>
      <form onSubmit={submit}>
        <input
          type='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        /><br/>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup;
