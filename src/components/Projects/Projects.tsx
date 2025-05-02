import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

const Projects = () => {
  return (
    <section
      id="projects"
      className=".section-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-white/90">
          A collection of projects showcasing my expertise in AI, mobile development,
          and full-stack applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
