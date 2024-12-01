import React, { useState } from 'react';
import './forgetPass.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
        const response = await axios.post('http://127.0.0.1:5010/api/auth/getone', { email });

        console.log('Email verified:', response.data);
        setSuccessMessage(
            'An email has been sent to reset your password. Please check your inbox.'
        );
        setErrorMessage('');
    } catch (error) {
        console.error('Error verifying email:', error);
        setErrorMessage(
            error.response?.data?.message || 'Failed to find the user with this email.'
        );
        setSuccessMessage('');
    }
};


  return (
    <div className="forget-pass-container">
      <h1>Forgot Your Password?</h1>
      <p>Enter your email address and we'll send you a link to reset your password.</p>
      <form className="forget-pass-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && (
        <p className="success-message">
          {successMessage} <span onClick={() => navigate('/login')} style={{ color: 'blue', cursor: 'pointer' }}>Go back to login.</span>
        </p>
      )}
    </div>
  );
};

export default ForgetPass;
