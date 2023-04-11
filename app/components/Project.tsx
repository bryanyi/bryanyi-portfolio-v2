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
  return (
    <>
      <div className="project-container grid grid-cols-12">
        <div className="project-image col-[1_/_8]">
          <img className="w-full h-full" src={projectImage} alt={projectName} />
        </div>
        <div className="project-info col-[8_/_11] text-right flex flex-col justify-start">
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
};

export default Project;
