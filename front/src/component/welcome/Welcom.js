import React from 'react';
import "./welcome.css"; // Fichier CSS pour les styles

const Welcome = () => {
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
        <button className="welcome-button register-button">
          Register
        </button>
        <button className="welcome-button login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
