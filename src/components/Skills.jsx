import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedSection, { itemVariants } from './AnimatedSection';
import { skillCategories } from '../data/skills';

const categoryColors = {
  Frontend: 'bg-blue-500',
  Backend: 'bg-green-500',
  'Testing & QA': 'bg-yellow-500',
  'DevOps & Tools': 'bg-purple-500',
  'AI Tools': 'bg-pink-500',
};

function Skills() {
  return (
    <SectionWrapper id="skills">
      <AnimatedSection>
        {/* Section heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <motion.div key={cat.category} variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {cat.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-primary-500/40 transition-colors"
                  >
                    {/* Icon circle with first letter */}
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 ${
                        categoryColors[cat.category] || 'bg-primary-500'
                      }`}
                    >
                      {skill.name.charAt(0)}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

export default Skills;
