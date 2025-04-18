import { workExperience } from '../../data/aboutMeData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WorkExperience = () => {
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-3xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Work Experience
        </p>
        <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
          My professional journey and achievements
        </h3>
      </div>

      <div className="mt-8 sm:mt-10">
        {workExperience.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 p-6 bg-secondary-light dark:bg-ternary-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="flex items-center gap-4">
                {experience.logo && (
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-1">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
                    {experience.position}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {experience.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {experience.duration}
                  </p>
                </div>
              </div>
              <Link
                to="/experience"
                className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="View Experience"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience; 