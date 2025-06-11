import { WorkInfo } from "@/@types/interfaces";

const WorkHistory: WorkInfo[] = [
  {
    id: 1,
    companyName: "The Ridge",
    companyLink: "https://www.ridge.com",
    position: "Web Developer",
    timeEmployed: "July 2021 - Present",
    description: [
      "Designed and optimized high-performance Node.js APIs handling 500+ daily requests, implementing caching and reducing redundant API calls by 50%, which decreased load times, improved frontend responsiveness, and enhanced user experience by speeding up data retrieval by 40%.",
      "Optimized the data fetching and server-side rendering architecture for high-performance product pages using Next.js/TypeScript, decreasing critical page load times by 70% (1000ms to 300ms). This robust foundation enabled rapid content iteration, contributed to a 35% increase in user engagement, and drove a 5% improvement in conversion rates by ensuring optimal web performance.",
      "Engineered a high-performance CLI synchronization tool using Node.js and TypeScript that managed code synchronization across 7 repositories, implementing advanced features like customizable file exclusions and intelligent merge strategies that reduced deployment time by 80%, eliminated 95% of conflicts, and saved the engineering team 3.5 hours weekly.",
    ]
  },
];

export default WorkHistory;
