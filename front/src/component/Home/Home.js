import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Vérification de la présence du token dans le localStorage
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Redirection vers la page de connexion si le token est absent
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Suppression du token du localStorage
    localStorage.removeItem('authToken');
    // Redirection vers la page de connexion
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>Vous êtes connecté !</p>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Home;
