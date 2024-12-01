import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import pour la navigation
import './welcome.css'; // Fichier CSS pour les styles

const Welcome = () => {
  const navigate = useNavigate(); // Hook pour gérer la navigation

  return (
    <div className="welcome-container">
      {/* Image de bienvenue */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="Welcome" 
        className="welcome-image"
      />

      {/* Texte de bienvenue */}
      <h1 className="welcome-title">Welcome</h1>
      <p className="welcome-text">Bienvenue sur notre plateforme!</p>

      {/* Boutons de navigation */}
      <div className="button-container">
        <button 
          className="welcome-button register-button" 
          onClick={() => navigate('/register')} // Redirection vers la page Register
        >
          Register
        </button>
        <button 
          className="welcome-button login-button" 
          onClick={() => navigate('/login')} // Redirection vers la page Login
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
