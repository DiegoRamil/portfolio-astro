import projects from "@/public/projects.json";
import TerminalLine from "@/components/terminal-line";

const Projects = () => {
  return (
    <section className="mb-4">
      <TerminalLine prompt="ls -l projects/" className="">
        {projects.map((project, index) => (
          <div key={index} className="mb-2">
            <span className="text-yellow-500">{project.name}</span> -{" "}
            {project.description}
            <a
              href={project.url}
              target="_blank"
              rel="noopener"
              className="ml-4 text-indigo-500 border-indigo-500 border-b-2"
            >
              View
            </a>
          </div>
        ))}
      </TerminalLine>
    </section>
  );
};

export default Projects;
