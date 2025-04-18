import "../../css/projects.css";
// import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image, id }) => {
  return (
    <div className="h-full">
      {/* <Link to={`/projects/single-project/${id}`} aria-label="Single Project"> */}
      <div className="project-card">
        {/* Card Container */}
        <div className="group relative h-full flex flex-col rounded-2xl border-2 border-gray-200 dark:border-ternary-dark bg-white dark:bg-ternary-dark">
          {/* Image Container */}
          <div className="project-image-container">
            <div className="relative w-full h-64">
              <div className="absolute inset-0 rounded-t-2xl overflow-hidden">
                <div className="w-full h-full relative">
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt={title}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Container */}
          <div className="flex-1 p-6 relative">
            <h2 className="font-general-medium text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.split(',').map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-[rgba(255,255,255,0.1)] rounded-full text-ternary-dark dark:text-ternary-light"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ProjectSingle;
