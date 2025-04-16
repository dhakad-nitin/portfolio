import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="h-full"
    >
      {/* <Link to={`/projects/single-project/${id}`} aria-label="Single Project"> */}
      <div className="group h-full relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark overflow-hidden flex flex-col">
        <div className="relative w-full pt-[75%]">
          <img
            src={image}
            className="absolute top-0 left-0 w-full h-full object-contain p-4 bg-white dark:bg-ternary-dark"
            alt={title}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="text-center px-4 py-6 mt-auto">
          <p className="font-general-medium text-xl md:text-xl text-ternary-dark dark:text-ternary-light mb-3">
            {title}
          </p>
          <span className="inline-block px-4 py-2 rounded-full bg-primary-light dark:bg-[rgba(255,255,255,0.1)] text-sm font-medium text-ternary-dark dark:text-ternary-light">
            {category}
          </span>
        </div>
      </div>
      {/* </Link> */}
    </motion.div>
  );
};

export default ProjectSingle;
