import React, { useState } from 'react';
import './contact.css';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Map from './map';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    ville: '',
    pays: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, telephone: value }); // Met à jour uniquement le champ téléphone
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message envoyé avec succès, on vous contactera dans les brefs délais !');
        setTimeout(() => {
          setStatusMessage(''); // Réinitialise le message après 7 secondes
        }, 7000);

        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          ville: '',
          pays: '',
          message: '',
        }); // Réinitialiser le formulaire après succès
      } else {
        setStatusMessage('Erreur lors de l\'envoi du message.');
        setTimeout(() => {
          setStatusMessage('');
        }, 7000);
      }
    } catch (error) {
      setStatusMessage('Erreur réseau : Impossible d\'envoyer le message.');
      setTimeout(() => {
        setStatusMessage('');
      }, 7000);
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="contact-container">
      <div className="infos-contact">
        <div className="localisation">
          <p> <PlaceIcon className="icone" style={{ fontSize: '60px' }} /></p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Ndogbong-Douala Rue du commissariat 10ème</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}> Horaires: lundi-vendredi 08h-17h30</p>

        </div>
        <div className="phone">
          <p><CallIcon className="icone" style={{ fontSize: '60px' }} /></p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>+237 675 07 00 50 / +237 6 55 19 62 54</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}> +33 7 58 10 31 17</p>
        </div>
        <div className="mail">
          <p > <MailOutlineIcon className="icone" style={{ fontSize: '60px' }} /></p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}> akuetche55@gmail.com</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>wwww.mobiliis.com</p>
        </div>
      </div>
      <div className="bloc-contact">
        <div className="map"><Map /></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 style={{ color: '#1976d2' }}>Nous Contacter</h2>

          <div className="form-row">
            <div>
              <label>Nom<span>*</span></label>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
            </div>
            <div>
              <label>Prénom<span>*</span></label>
              <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Email<span>*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label>Téléphone<span>*</span></label>
              <input
                type="tel"
                name="telephone"

                value={formData.telephone}
                onChange={handleChange}
                required
              />

            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Ville<span>*</span></label>
              <input type="text" name="ville" value={formData.ville} onChange={handleChange} required />
            </div>
            <div>
              <label>Pays<span>*</span></label>
              <input type="text" name="pays" value={formData.pays} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-full">
            <label>Message<span>*</span></label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </div>

          <button type="submit">Envoyer</button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}

      </div>
    </div>
  );
};

export default ContactForm;
