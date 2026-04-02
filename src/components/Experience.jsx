import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedSection, { itemVariants } from './AnimatedSection';
import { experiences } from '../data/experience';

function Experience() {
  return (
    <SectionWrapper id="experience">
      <AnimatedSection>
        {/* Section heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-light-border dark:bg-dark-border" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 md:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 z-10 ${
                    exp.isCurrent
                      ? 'bg-green-500 border-green-400 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                      : 'bg-light-surface dark:bg-dark-surface border-gray-400 dark:border-gray-600'
                  }`}
                >
                  {exp.isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
                  )}
                </div>

                {/* Entry card */}
                <div className="p-5 md:p-6 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-sm md:text-base text-primary-500 font-medium mb-1">
                    {exp.company}
                  </p>

                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 mb-4">
                    {exp.startDate} — {exp.endDate} · {exp.location}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

export default Experience;
