import React from "react";

const Home = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
    
      minHeight: "100vh",
      background: "rgba(20, 20, 20, 1)", // Noir clair
      color: "white",
      fontFamily: "Arial, sans-serif",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      background: "rgba(0, 0, 0, 0.5)",
    },
    logo: {
      fontSize: "1.5em",
      fontWeight: "bold",
      animation: "fadeIn 2s",
    },
    nav: {
      display: "flex",
    },
    navLink: {
      margin: "0 15px",
      textDecoration: "none",
      color: "white",
      fontSize: "1em",
    },
    auth: {
      display: "flex",
      alignItems: "center",
    },
    login: {
      marginRight: "15px",
      textDecoration: "none",
      color: "white",
      fontWeight: "bold",
    },
    button: {
      backgroundColor: "white",
      color: "#e74c3c",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1em",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#ff6b6b",
      color: "white",
    },
    hero: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "40px",
      animation: "slideIn 1.5s ease-out",
    },
    heroText: {
      maxWidth: "50%",
    },
    heroHeading: {
      fontSize: "3em",
      margin: "0 0 20px",
    },
    heroParagraph: {
      fontSize: "1.2em",
      margin: "0 0 20px",
    },
    heroImage: {
      maxWidth: "500px",
      borderRadius: "10px",
      animation: "zoomIn 1.5s",
    },
    mediaQueries: `
      @media (max-width: 768px) {
        .hero {
          flex-direction: column;
          text-align: center;
        }
        .heroText {
          max-width: 100%;
        }
        .heroImage {
          max-width: 100%;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes slideIn {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }

      @keyframes zoomIn {
        from {
          transform: scale(0.5);
        }
        to {
          transform: scale(1);
        }
      }
    `,
  };

  return (
    <div style={styles.container}>
      <style>
        {styles.mediaQueries}
      </style>
      <header style={styles.header}>
        <div style={styles.logo}>MHM WebSite</div>
        <nav style={styles.nav}>
          <a href="#products" style={styles.navLink}>
            Produits
          </a>
          <a href="./Contact" style={styles.navLink}>
            contact
          </a>
          <a href="#resources" style={styles.navLink}>
            Ressources
          </a>
        </nav>
        <div style={styles.auth}>
          <a href="#login" style={styles.login}>
            Se connecter
          </a>
          <button style={styles.button}>Commencer</button>
        </div>
      </header>
      <div className="hero" style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>Un site web rend tout possible</h1>
          <p style={styles.heroParagraph}>
            Démarrez votre essai gratuit. Pas de carte bancaire requise.
          </p>
          <button style={styles.button}>Commencer</button>
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.R3q-BiQ5YEBsS-k2yJzHSwHaEh?rs=1&pid=ImgDetMain"
            alt="Décoratif"
            style={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
