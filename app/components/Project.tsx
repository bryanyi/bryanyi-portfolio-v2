import { ProjectInfo } from "@/app/@types/interfaces";
interface ProjectProps extends ProjectInfo { }
const Project: React.FC<ProjectProps> = ({
  projectId,
  projectName,
  technologies,
  githubLink,
  projectDescription,
  projectImage,
}) => {
  const gridDescriptionLeft = "row-[1/2] col-[1_/_8]";
  const gridImageRight = "row-[1/2] col-[7_/_13]";
  const gridImageLeft = "row-[1/2] col-[1_/_7]";
  const gridDescriptionRight = "row-[1/2] col-[6_/_13]";

  const projectContainerStyles = `grid grid-cols-12`;
  const projectTitleStyles = "text-accent text-xl mb-8 w-10/12";
  const projectDescriptionStyles = "text-project p-4 rounded bg-secondaryBg";
  const projectTechNameStyles = "font-spacemono mx-1 mt-8 text-project";
  const projectLinksStyles = "mt-4";
  const githubIconStyles = "text-2xl image-hover";

  if (projectId % 2 === 0) {
    return (
      <>
        <div className={`project-container mt-32 ${projectContainerStyles}`}>
          <div className={`project-image ${gridImageLeft}`}>
            <a href={githubLink}>
              <img
                className="w-full h-full"
                src={projectImage}
                alt={projectName}
              />
            </a>
          </div>
          <div
            className={`project-info text-right flex flex-col justify-start items-end ${gridDescriptionRight}`}
          >
            <div className={`project-title ${projectTitleStyles}`}>
              {projectName}
            </div>
            <div className={`project-desc ${projectDescriptionStyles}`}>
              {projectDescription}
            </div>
            <div className="project-tech flex justify-between gap-x-1 text-right">
              {technologies.map((tech) => {
                return <span className={projectTechNameStyles}>{tech}</span>;
              })}
            </div>
            <div className={`project-links ${projectLinksStyles}`}>
              <a href={githubLink} className="github-link">
                <i className={`fab fa-github ${githubIconStyles}`}></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={`project-container ${projectContainerStyles}`}>
          <div
            className={`project-info z-10 text-left flex flex-col justify-start items-start ${gridDescriptionLeft}`}
          >
            <div className={`project-title ${projectTitleStyles}`}>
              {projectName}
            </div>
            <div className={`project-desc ${projectDescriptionStyles}`}>
              {projectDescription}
            </div>
            <div className="project-tech flex justify-between gap-x-1">
              {technologies.map((tech) => {
                return <span className={projectTechNameStyles}>{tech}</span>;
              })}
            </div>
            <div className={`project-links ${projectLinksStyles}`}>
              <a href={githubLink} className="github-link">
                <i className={`fab fa-github ${githubIconStyles}`}></i>
              </a>
            </div>
          </div>

          <div className={`project-image ${gridImageRight}`}>
            <a href={githubLink}>
              <img
                className="w-full h-full"
                src={projectImage}
                alt={projectName}
              />
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default Project;
