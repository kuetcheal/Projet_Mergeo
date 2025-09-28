import React, { useState } from 'react';
import './forgetPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false); // 👉 nouvel état

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // 👉 active le message après clic
    // Logique d'envoi de l'email pour réinitialisation
    console.log('Email envoyé à:', email);
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-title">Mot de passe oublié</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Adresse e-mail du compte"
          className="forgot-password-input"
          required
        />
        <button type="submit" className="forgot-password-button">
          Valider
        </button>
      </form>

      {/* 👉 Message affiché seulement après clic */}
      {submitted && (
        <p className="forgot-password-message">
          Si l’adresse e-mail saisie est associée à un compte,
          vous recevrez un lien de réinitialisation dans votre boîte mail.
        </p>
      )}
    </div>
  );
};

export default ForgotPassword;
