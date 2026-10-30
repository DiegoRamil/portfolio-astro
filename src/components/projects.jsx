import projects from "@/data/projects.json";
import TerminalLine from "@/components/terminal-line";

const Projects = () => {
  return (
    <TerminalLine prompt="ls -l projects/" heading="Projects">
      {projects.map((project, index) => (
        <div key={index} className="mb-2">
          <span className="text-yellow-500">{project.name}</span> -{" "}
          {project.description}
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            aria-label={`View ${project.name} on GitHub`}
            className="ml-4 text-indigo-500 border-indigo-500 border-b-2"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </TerminalLine>
  );
};

export default Projects;
