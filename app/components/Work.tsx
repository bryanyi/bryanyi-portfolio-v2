import workhistory from "../../data/workhistory";
import WorkPlace from "./WorkPlace";
const Work = () => {
  return (
    <>
      <section className="work-section mt-10 max-w-3xl mx-auto">
        <h2 className="flex justify-start items-center text-3xl font-medium relative after:content-[''] after:block after:relative after:bg-[#233554] after:w-[300px] after:h-[1px] after:ml-8">
          Where I've Worked
        </h2>

        <div className="work-section-container flex justify-between items-start mt-14">
          <div className="tabs flex flex-col justify-start h-full">
            {workhistory.map((workplace) => {
              return (
                <button className="px-5 pb-[2px] border-l-[1px] border-l-accent transition-all duration-300 ease-in-out text-sm font-spacemono hover:bg-secondaryBg hover:text-accent">
                  {workplace.companyName}
                </button>
              );
            })}
          </div>
          <div className="work-content">
            {workhistory.map((workplace) => {
              return (
                <div className="work-section-container">
                  <WorkPlace
                    companyName={workplace.companyName}
                    companyLink={workplace.companyLink}
                    position={workplace.position}
                    timeEmployed={workplace.timeEmployed}
                    description={workplace.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
