import { VscChevronRight } from "react-icons/vsc";
import Img from "next/image";
const About = () => {
  return (
    <>
      <section id="about" className="about-section mb-40">
        <h2 className="flex justify-start items-center text-3xl font-medium relative after:content-[''] after:block after:relative after:bg-[#233554] after:w-[300px] after:h-[1px] after:ml-8">About Me</h2>

        <div className="text-secondary text-lg flex flex-col md:grid grid-cols-aboutGrid mt-8 gap-x-7">
          <div className="flex flex-col gap-y-4">
            <div>
              Hello! My name is Bryan, and I enjoy the creative and systematic process of bringing software to life. My interest in web development started when my friend introduced me to a web development Udemy course. It was a light-bulb moment
              that made me realize my passion for building and creating.
            </div>
            <div>
              Today, I have the priveledge of building and maintaining web technologies at{" "}
              <a className="fun-underline" href="https://www.ridge.com">
                The Ridge.
              </a>{" "}
            </div>
            <div>
              I also recently started blogging on{" "}
              <a className="fun-underline" href="https://www.medium.com/@bryanyi">
                Medium
              </a>{" "}
              to provide resources that I wish I had for other self-taught software engineers.
            </div>
            <div>Here are a few technologies I've been working with lately:</div>
            <ul className="about-technologies">
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">Java / Spring Boot</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">Go</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">NextJS</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">Typescript</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">Docker</span>
              </li>
              <li className="flex gap-x-1 items-center text-accent">
                <VscChevronRight />
                <span className="text-secondary">NodeJS</span>
              </li>
            </ul>
          </div>
          <div className="portfolio-image">
            <Img src={"/bryan_profile.jpeg"} alt={"Bryan's Profile Picture"} width={550} height={250} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
