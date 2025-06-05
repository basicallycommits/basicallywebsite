import { ProjectCard } from "@/app/components/ProjectCard";
import { projectList } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="pt-24">
      <div className="max-w-7xl space-y-12 mx-auto px-4 sm:px-6 lg:px-8">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export { Projects };
