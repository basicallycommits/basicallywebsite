import { Projects } from "@/app/components/Projects";

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="heading h1">My Projects</h1>
      <div className="text-center">
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-prose mx-auto">
          Below, you can find some examples of my{" "}
          <span className="text-sky-500">projects</span>. Some are personal,
          some are collaborative. You can learn more about each of these by{" "}
          <span className="text-sky-500">clicking</span> on each card. Enjoy!
        </p>
      </div>

      <Projects />
    </div>
  );
};
export default ProjectsPage;
