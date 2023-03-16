import { VscChevronRight } from "react-icons/vsc";
import { WorkInfo } from "@/app/@types/interfaces";

interface WorkProps extends WorkInfo {
  tabPosition: number;
}

const WorkPlace: React.FC<WorkProps> = ({
  tabPosition,
  id,
  companyName,
  companyLink,
  position,
  timeEmployed,
  description,
}) => {
  const workSectionBaseStyles = `transition-all duration-500`;
  const displayWorkInfo = `${workSectionBaseStyles} block`;
  const hideWorkInfo = `${workSectionBaseStyles} hidden`;

  return (
    <>
      <div
        className={tabPosition == id ? displayWorkInfo : hideWorkInfo}
        data-workplace-tab={id}
      >
        <h2 className="text-2xl text-primary font-fontSans font-medium mb-1">
          {position}{" "}
          <a className="fun-underline text-accent" href={companyLink}>
            @ {companyName}
          </a>
        </h2>
        <p className="text-secondary font-spacemono mb-5">{timeEmployed}</p>
        {description.map((desc) => {
          return (
            <ul>
              <li className="flex gap-x-1 items-center text-accent mb-2">
                <VscChevronRight />
                <span className="text-secondary">{desc}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default WorkPlace;
