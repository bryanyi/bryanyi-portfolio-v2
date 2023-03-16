"use client";
import { useState } from "react";
import workhistory from "../../data/workhistory";
import WorkPlace from "./WorkPlace";
const Work = () => {
  const [tabPosition, setTabPosition] = useState<number>(1);
  const [workplaceTransition, setWorkplaceTransition] =
    useState<string>("opacity-100");
  const [highligherPosition, setHighlighterPosition] =
    useState<string>("translate-y-0");
  const tabBaseStyles =
    "text-left text-xl font-thin h-11 px-5 pb-[2px] border-l-[2px] border-l-secondary transition-all duration-150 ease-in-out font-spacemono hover:bg-secondaryBg hover:text-accent";
  const unselectedTab = `${tabBaseStyles} text-secondary`;
  const selectedTab = `${tabBaseStyles} text-accent`;

  const handleChangeTabs = (e: any): void => {
    let newTabPosition = e.target.dataset.tab;
    let newHighlighterPosition = `${String((newTabPosition - 1) * 42)}px`;

    console.log("NEW TAB POSITION: ", newTabPosition, typeof newTabPosition);
    console.log(
      "NEW HIGHLIGHTER POSITION: ",
      newHighlighterPosition,
      typeof newHighlighterPosition
    );

    setWorkplaceTransition("opacity-0");

    setTimeout(() => {
      setTabPosition(newTabPosition);
      setHighlighterPosition(`translate-y-[${newHighlighterPosition}]`);
      setWorkplaceTransition("opacity-100");
    }, 400);
  };

  return (
    <>
      <section className="work-section mt-10 max-w-3xl mx-auto">
        <h2 className="flex justify-start items-center text-3xl font-medium relative after:content-[''] after:block after:relative after:bg-[#233554] after:w-[300px] after:h-[1px] after:ml-8">
          Where I've Worked
        </h2>

        <div className="work-section-container relative flex justify-start items-start mt-14 gap-x-10">
          <div className="relative tabs flex flex-col justify-start h-full">
            {workhistory.map((workplace) => {
              return (
                <button
                  data-tab={workplace.id}
                  onClick={(e) => handleChangeTabs(e)}
                  key={workplace.id}
                  className={
                    tabPosition == workplace.id ? selectedTab : unselectedTab
                  }
                >
                  {workplace.companyName}
                </button>
              );
            })}
            <div
              className={`highlight absolute top-0 left-0 z-10 w-[2px] h-11 rounded bg-accent transition-all duration-200 delay-100 transform ${highligherPosition}`}
            ></div>
          </div>
          <div
            className={`work-content relative transition-all duration-300 ease-in-out ${workplaceTransition}`}
          >
            {workhistory.map((workplace) => {
              return (
                <WorkPlace
                  tabPosition={tabPosition}
                  id={workplace.id}
                  companyName={workplace.companyName}
                  companyLink={workplace.companyLink}
                  position={workplace.position}
                  timeEmployed={workplace.timeEmployed}
                  description={workplace.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
