import {
  ExternalLink,
  FolderCode,
  Code2,
} from "lucide-react";

import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <p className="section-label">~/projects</p>
            <h2>Featured Projects</h2>
            <p className="section-description">
              Cybersecurity tools, security research, and web development
              projects.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              {/* Project Header */}
              <div className="project-top">
                <FolderCode size={30} />

                <span className="project-category">{project.category}</span>
              </div>

              {/* Project Title */}
              <h3>{project.title}</h3>

              {/* Description */}
              <p>{project.description}</p>

              {/* Technologies */}
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {/* Project Links */}
              {(project.github || project.live) && (
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 size={17} />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
