// Store project details separately from the display code.
const projects = [
  {
    id: "inventory-management",
    name: "Inventory Management System",
    description:
      "A console application for managing products and stock, importing data, and generating reports.",
    technologies: "C#, .NET, JSON, CSV",
    githubUrl: "https://github.com/EphraimLex/InventoryManagementSystem",
  },
  {
    id: "asset-tracking",
    name: "Asset Tracking",
    description:
      "A console application for tracking company equipment, including purchase dates, office locations, and prices in different currencies.",
    technologies: "C#, .NET, JSON",
    githubUrl: "https://github.com/EphraimLex/AssetTracking",
  },
  {
    id: "modern-cv",
    name: "Modern CV",
    description:
      "A responsive CV website presenting my skills, experience, and education.",
    technologies: "HTML, CSS",
    githubUrl: "https://github.com/EphraimLex/ModernCV",
    liveUrl: "https://ephraimlex.github.io/ModernCV/",
  },
  {
    id: "nordicbrew",
    name: "Nordic Brew",
    description:
      "A responsive café website combining business information with interactive features.",
    technologies: "HTML, CSS, JavaScript",
    githubUrl: "https://github.com/EphraimLex/NordicBrew",
    liveUrl: "https://ephraimlex.github.io/NordicBrew/",
  },
];

// Projects component: displays a card for each project.
function Projects() {
  return (
    // This ID matches the Projects link in the main navigation.
    <section id="projects">
      <h2>Projects</h2>

      {/* Turn each project in the array into a project card. */}
      <div className="projects-grid">
        {projects.map((project) => (
          // A unique key helps React identify each item in the list.
          <article key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            {/* Display the technologies used for this project. */}
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>

            {/* Group the available project links together. */}
            <div className="project-links">
              {/* Display the repository link only when provided. */}
              {project.githubUrl && (
                <a href={project.githubUrl}>View on GitHub</a>
              )}

              {/* Display the live website link only when provided. */}
              {project.liveUrl && <a href={project.liveUrl}>View website</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Allow App.jsx to import and display this component.
export default Projects;
