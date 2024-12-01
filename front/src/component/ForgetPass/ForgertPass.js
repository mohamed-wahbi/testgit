import React, { useState } from 'react';
import './forgetPass.css';

const ForgetPass = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Password reset requested for:', email);
//     // Ajoutez ici la logique pour envoyer une demande de réinitialisation au serveur
//     alert('A password reset link has been sent to your email!');
//   };

  return (
    <div className="forget-pass-container">
      <h1>Forgot Your Password?</h1>
      <p>Enter your email address and we'll send you a link to reset your password.</p>
      <form  className="forget-pass-form">
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
    </div>
  );
};

export default ForgetPass;