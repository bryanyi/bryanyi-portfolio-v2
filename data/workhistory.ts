import { WorkInfo } from "@/@types/interfaces";

const WorkHistory: WorkInfo[] = [
  {
    id: 1,
    companyName: "The Ridge",
    companyLink: "https://www.ridge.com",
    position: "Web Developer",
    timeEmployed: "July 2021 - Present",
    description: [
      "Engineered Next.js/Typescript, TailwindCSS, and Builder.io to build faster landing pages that can be quickly iterated by the marketing and design teams while maintaining speed performance from over a second to 500ms.",
      "Partnered closely with the design team to elevate the user experience, optimizing interface elements and mobile responsiveness through strategic SCSS adjustments and HTML restructuring, resulting in a 25% increase in mobile conversions and a 15% boost in overall customer satisfaction.",
      "Developed CLI tool using Node.js and TypeScript to sync master repo with 7 child repositories, enabling efficient code sharing and deployment across international stores while providing granular control over file exclusions, merge strategies, and environment settings.",
      "Collaborated closely with the art director to establish a streamlined design to development process, optimizing communication, reducing iteration cycles, and ensuring pixel-perfect implementation of design assets while maintaining code quality and maintainability."
    ],
  },
];

export default WorkHistory;
