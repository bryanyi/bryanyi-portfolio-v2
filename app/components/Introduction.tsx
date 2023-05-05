import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin);
const Introduction = () => {
  return (
    <>
      <section id="introduction" className="flex flex-col h-auto min-h-screen text-left gap-y-3 sm:gap-y-5 mt-48 md:mt-40 sm:mt-32 lg:mt-40">
        <h1 className="font-spacemono text-accent font-thin pl-1 text-sm sm:pl-3 lg:text-lg">Hi, my name is</h1>

        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Bryan Yi.</h2>
        <h2 className="text-secondary font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">I build things for the web.</h2>

        <p className="text-secondary text-sm md:text-base lg:w-5/6  lg:text-lg">
          I'm a self-taught software engineer with a passion for building robust applications and tinkering with technology. Currently, I'm focused on developing customer-centric web apps at{" "}
          <a className="fun-underline" href="https://www.ridge.com">
            The Ridge
          </a>{" "}
          and{" "}
          <a className="fun-underline" href="https://www.medium.com/@bryanyi">
            writing blogs
          </a>{" "}
          to give other self-taught engineers guidance that I wish I had.
        </p>

        <div className="flex gap-x-9 mt-2 text-sm lg:text-lg">
          <a href="https://www.linkedin.com/in/bryantaeyi/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={"base-icons"} icon={faLinkedin} />
          </a>
          <a href="https://github.com/bryanyi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={"base-icons"} icon={faGithub} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Introduction;
