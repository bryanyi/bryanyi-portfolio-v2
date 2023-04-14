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
  let gridImageLeft = "col-[1_/_8]";
  let gridDescriptionRight = "col-[8_/_13]";
  let gridDescriptionLeft = "col-[1_/_5]";
  let gridImageRight = "col-[5_/_13]";

  if (projectId % 2 != 0) {
    return (
      <>
        <div className="project-container grid grid-cols-12">
          <div className={`project-image ${gridImageLeft}`}>
            <img
              className="w-full h-full"
              src={projectImage}
              alt={projectName}
            />
          </div>
          <div
            className={`project-info text-right flex flex-col justify-start ${gridDescriptionRight}`}
          >
            <div className="project-title">{projectName}</div>
            <div className="project-desc">{projectDescription}</div>
            <div className="project-tech flex justify-between gap-x-1">
              {technologies.map((tech) => {
                return tech;
              })}
            </div>
            <div className="project-links"></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="project-container grid grid-cols-12">
          <div
            className={`project-info text-right flex flex-col justify-start ${gridDescriptionLeft}`}
          >
            <div className="project-title">{projectName}</div>
            <div className="project-desc">{projectDescription}</div>
            <div className="project-tech flex justify-between gap-x-1">
              {technologies.map((tech) => {
                return tech;
              })}
            </div>
            <div className="project-links"></div>
          </div>

          <div className={`project-image ${gridImageRight}`}>
            <img
              className="w-full h-full"
              src={projectImage}
              alt={projectName}
            />
          </div>
        </div>
      </>
    );
  }
};

export default Project;
