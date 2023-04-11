import projects from "../../data/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <section id="projects" className="project-section">
        <h2 className="flex justify-start items-center text-3xl font-medium relative after:content-[''] after:block after:relative after:bg-silverGrey after:w-[300px] after:h-[1px] after:ml-8">
          Some Things I've Built
        </h2>

        <div className="projects-section-container">
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
