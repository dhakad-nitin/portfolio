import { motion } from 'framer-motion';
import { workExperience } from '../data/aboutMeData';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center text-primary-dark dark:text-primary-light mb-12">
        Professional Experience
      </h1>
      
      {workExperience.map((experience) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-secondary-light dark:bg-ternary-dark rounded-xl shadow-lg p-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="flex items-center gap-4">
              {experience.logo && (
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              <div>
                <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                  {experience.position}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {experience.company} • {experience.type}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  {experience.duration}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {experience.projects.map((project, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-3">
                  {project.title}
                </h3>
                <ul className="list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-base">
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience; 