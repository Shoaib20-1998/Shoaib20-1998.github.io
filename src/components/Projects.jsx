import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedSection, { itemVariants } from './AnimatedSection';
import { projects } from '../data/projects';

function Projects() {
  return (
    <SectionWrapper id="projects">
      <AnimatedSection>
        {/* Section heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Projects
        </motion.h2>

        {/* Responsive grid: 1 col mobile, 2 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow ${
                project.highlight
                  ? 'md:col-span-2 bg-gradient-to-br from-primary-500/10 via-light-surface to-light-surface dark:from-primary-500/10 dark:via-dark-surface dark:to-dark-surface border-2 border-primary-500/30 hover:shadow-primary-500/20 dark:hover:shadow-primary-500/20 relative overflow-hidden'
                  : 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border dark:hover:shadow-primary-500/10'
              }`}
            >
              {/* Highlight badge */}
              {project.highlight && (
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full bg-primary-500 text-white uppercase tracking-wider">
                  ✨ AI-Powered
                </span>
              )}
              {/* Project name */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Impact */}
              <p className="text-primary-500 text-sm font-medium mb-4">
                {project.impact}
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 mt-auto pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.name}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.name}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

export default Projects;
