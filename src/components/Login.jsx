import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && password.trim() && age.trim()) {
      console.log({ name, email, password, age });
      localStorage.setItem('user-name', name.trim());
      navigate('/Home');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Enter Your Details</h2>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <input type="number" placeholder="Your Age" value={age} onChange={(e) => setAge(e.target.value)} required/>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Login;