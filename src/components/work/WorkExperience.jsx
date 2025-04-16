import { motion } from "framer-motion";
import { workExperienceData } from "../../data/workExperienceData";

const WorkExperience = () => {
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-3xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Work Experience
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 mt-10">
        {workExperienceData.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="flex items-center gap-4">
                {experience.logo && (
                  <img
                    src={experience.logo}
                    alt={`${experience.organization} logo`}
                    className="w-16 h-16 object-contain"
                  />
                )}
                <div>
                  <h3 className="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-ternary-dark dark:text-ternary-light">
                    {experience.organization}
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-ternary-dark dark:text-ternary-light mt-2 sm:mt-0">
                {experience.duration}
              </span>
            </div>
            
            <ul className="list-disc list-inside text-ternary-dark dark:text-ternary-light space-y-2 mb-4">
              {experience.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-light dark:bg-ternary-dark text-sm text-ternary-dark dark:text-ternary-light rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience; 