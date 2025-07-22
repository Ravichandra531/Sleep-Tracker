import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem('user-name', name.trim());
      navigate('/Home');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Enter Your Name</h2>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Login;