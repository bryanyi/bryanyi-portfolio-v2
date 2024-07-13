import { ProjectInfo } from "@/@types/interfaces";
const projects: ProjectInfo[] = [
  {
    projectId: 1,
    projectName: "Microservice Architecture for E-Commerce Backend",
    technologies: ["Java/Spring Boot", "Open Feign", "API Gateway", "Eureka", "Docker"],
    githubLink: "https://github.com/bryanyi/siramiks-microservice-project-overview",
    projectDescription: "This microservices project was developed to deepen my understanding of modern, distributed system architectures. By implementing a set of interconnected services, I aimed to explore the core principles of microservices, including service discovery, inter-service communication, and distributed tracing.",
    projectImage: "./microservice_architecture_diagram.png",
    projectSecondLink: "",
  },

  {
    projectId: 2,
    projectName: "CLI YouTube Downloader",
    technologies: ["Rust"],
    githubLink: "https://github.com/bryanyi/cli-yt-downloader",
    projectDescription: "A CLI app written in Rust and published on Crates.io that downloads whole YouTube videos or just the audio file of the video.",
    projectImage: "./cli_app_cratesio.png",
    projectSecondLink: "https://crates.io/crates/cli-yt-downloader",
  },
];

export default projects;
