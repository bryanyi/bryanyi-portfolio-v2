import { WorkInfo } from "@/app/@types/interfaces";

const WorkPlace: React.FC<WorkInfo> = ({
  companyName,
  companyLink,
  position,
  timeEmployed,
  description,
}) => {
  return (
    <>
      <div className="workplace">
        {companyName}
        {companyLink}
        {position}
        {timeEmployed}
        {description.map((desc) => {
          return <div>{desc}</div>;
        })}
      </div>
    </>
  );
};

export default WorkPlace;
