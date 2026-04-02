import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedSection, { itemVariants } from './AnimatedSection';
import { personalInfo } from '../data/personalInfo';
import { impactStats } from '../data/stats';

const competencies = [
  'Micro Frontends',
  'Performance Optimization',
  'Test-Driven Development',
  'Workflow Automation',
  'CI/CD & DevOps',
  'Real-time Systems',
];

function About() {
  return (
    <SectionWrapper id="about">
      <AnimatedSection>
        {/* Section heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* Two-column layout: image left, summary right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Profile image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-primary-500/20 blur-lg" />
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} profile`}
                loading="lazy"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-primary-500/30"
              />
            </div>
          </motion.div>

          {/* Professional summary */}
          <motion.div variants={itemVariants}>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Software Engineer with 4+ years of experience building high-performance web
              applications. I've gone from writing HTML to architecting micro frontend platforms
              at Infor India — an enterprise serving Fortune 500 clients. My work is measurable:
              40% load time reduction, 90% Jest test coverage, and 10x productivity gains from
              workflow automation using React Flow.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Led microfrontend migration using Single-SPA, accelerating release cycles by 30%.
              Created the testing architecture for integrating React Testing Library and Jest
              across micro frontends, and authored 2,000+ test cases to drive standardization.
            </p>
          </motion.div>
        </div>

        {/* Impact stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {impactStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="p-6 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core competencies */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {competencies.map((comp) => (
              <span
                key={comp}
                className="px-4 py-2 text-sm font-medium rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20"
              >
                {comp}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

export default About;
