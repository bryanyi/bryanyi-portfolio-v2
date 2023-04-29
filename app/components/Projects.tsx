import projects from "../../data/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <section id="projects" className="project-section">
        <h2 className="flex justify-start items-center text-xl lg:text-3xl font-medium relative section-header-line after:w-[9vw] sm:after:w-[33vw] lg:after:w-[300px]">
          Some Things I've Built
        </h2>

        <div className="projects-section-container mt-14 mb-48">
          {projects.map((project) => {
            return (
              <Project
                key={project.projectId}
                projectId={project.projectId}
                projectName={project.projectName}
                technologies={project.technologies}
                githubLink={project.githubLink}
                projectDescription={project.projectDescription}
                projectImage={project.projectImage}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
