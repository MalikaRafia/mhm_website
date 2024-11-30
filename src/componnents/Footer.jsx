import React from "react";

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '1rem',
      backgroundColor: '#333',
      color: '#fff',
      marginTop: '2rem'
    }}>
      <p>&copy; 2024 [Nom de l'entreprise]. Tous droits réservés.</p>
      <div>
        <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" style={{
          color: '#fff',
          textDecoration: 'none',
          marginRight: '1rem'
        }}>
          Facebook
        </a>
        |
        <a href="https://www.linkedin.com/in/yourcompany" target="_blank" rel="noopener noreferrer" style={{
          color: '#fff',
          textDecoration: 'none',
          marginLeft: '1rem',
          marginRight: '1rem'
        }}>
          LinkedIn
        </a>
        |
        <a href="mailto:contact@yourcompany.com" style={{
          color: '#fff',
          textDecoration: 'none',
          marginLeft: '1rem'
        }}>
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
