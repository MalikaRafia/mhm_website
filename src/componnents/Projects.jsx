import React from "react";

function Projects() {
  const projects = [
    {
      title: "vacation rental",
      description: "Création d'un site e-commerce avec React.",
      image: "https://colorlib.com/wp/wp-content/uploads/sites/2/vacationrental-free-template.jpg.avif",
      link: "https://colorlib.com/wp/wp-content/uploads/sites/2/vacationrental-free-template.jpg.avif",
    },
    {
      title: "moderne house",
      description: "Refonte d'un site de location de maison pour une PME.",
      image: "https://colorlib.com/wp/wp-content/uploads/sites/2/oakberry-free-template-408x322.jpg.avif", // Remplacez par une URL réelle
      link: "https://www.example.com",
    },{
      title: "capital shop",
      description: "Création d'un site e-commerce de vente de vetement .",
      image: "https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template.jpg.avif", // Remplacez par une URL réelle
      link: "Création d'un site e-commerce avec React",
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <section style={{ padding: "2rem", backgroundColor: "#fff" }}>
      <h2 style={{ color: "#5a3e36", textAlign: "center", marginBottom: "1rem" }}>
        Nos Projets Réalisés
      </h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Voici quelques-uns des projets web que nous avons développés pour nos clients.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#000", // Fond noir par défaut
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
              padding: "1rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              color: "#fff", // Texte blanc par défaut
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#fff"; // Fond blanc au survol
              e.target.style.color = "#000"; // Texte noir au survol
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#000"; // Revenir au fond noir
              e.target.style.color = "#fff"; // Revenir au texte blanc
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              style={{
                display: "inline-block",
                marginTop: "1rem",
                color: "inherit", // Garde la couleur selon l'état (hover ou non)
                textDecoration: "none",
                fontWeight: "bold",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
