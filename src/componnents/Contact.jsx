import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire (envoyer par email ou API)
    alert("Message envoyé !");
  };

  return (
    <section style={{
      padding: '2rem',
      backgroundColor: '#fff'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#5a3e36',
        marginBottom: '1rem'
      }}>Contactez-nous</h2>
      <p style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>Vous avez un projet en tête ou des questions ? Nous serions ravis de discuter de la manière dont nous pouvons vous aider.</p>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
        <button type="submit" style={{
          padding: '0.8rem',
          backgroundColor: '#5a3e36',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
