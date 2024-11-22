import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './inscription.css';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    mot_de_passe: '',
    telephone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
    }
  };
  
  return (
    <div className="inscription-container">
      <h2 className="inscription-title">Inscription</h2>
      <form onSubmit={handleSubmit} className="inscription-form">
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Nom"
          className="inscription-input"
        />

        <input
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          placeholder="Prénom"
          className="inscription-input"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Adresse email"
          className="inscription-input"
        />

        <input
          type="password"
          name="mot_de_passe"
          value={formData.mot_de_passe}
          onChange={handleChange}
          placeholder="Mot de passe"
          className="inscription-input"
        />

        <input
          type="text"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Numéro de téléphone"
          className="inscription-input"
        />

        <button type="submit" className="inscription-button">
          Valider
        </button>
      </form>

      <p className="inscription-login-link">
        Déjà inscrit ? <Link to="/connexion" style={{ color: '#A93D87' }}>Connectez-vous</Link>
      </p>
    </div>
  );
};

export default Inscription;
