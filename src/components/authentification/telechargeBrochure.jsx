import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';

const TelechargeBrochure = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Merci pour votre intérêt !</h2>
      <p style={styles.text}>
        Votre demande a bien été prise en compte. Vous pouvez maintenant télécharger notre brochure en cliquant sur le bouton ci-dessous.
      </p>
      <a
        href="/documents/etude_cas.pdf"
        download="Mobiliis_brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C90076'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#004080'}
      >
        <DownloadIcon style={styles.icon} /> Télécharger le PDF
      </a>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '80px auto',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '1.8rem',
    color: '#004080',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '25px',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: '#004080',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  },
  icon: {
    marginRight: '8px',
  },
};

export default TelechargeBrochure;
