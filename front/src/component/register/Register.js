import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './register.css';

import { useNavigate } from 'react-router-dom'; 


const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('User registered:', formData);
//     // Vous pouvez ajouter ici une logique pour envoyer les données au backend
//     navigate('/login'); // Redirection vers la page Login
//   };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form  className="register-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
            placeholder="Enter your name" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
            placeholder="Enter your email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleInputChange} 
            required 
            placeholder="Enter your password" 
          />
        </div>
        <button className="register-button" onClick={() => navigate('/login')}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
