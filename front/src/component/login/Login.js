import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      // Envoie de la requête de connexion
      const response = await axios.post('http://127.0.0.1:5010/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      const { token } = response.data; // Récupération du token
      console.log('Login successful, token:', token);

      // Enregistrement du token dans le localStorage
      localStorage.setItem('authToken', token);

      // Redirection vers la page personnalisée après le succès
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage(error.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="login-button">
          Login
        </button>
        {errorMessage?<div><p style={{"color":"red"}}>{errorMessage} Invalid email or password <span onClick={()=>navigate("/forget-pass")} style={{"color":"blue","cursor":"pointer"}}>reset password ...</span></p> </div>:null }
      </form>
    </div>
  );
};

export default Login;
