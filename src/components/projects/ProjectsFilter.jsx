const selectOptions = [
  "Research Paper",
  "Regional Economic Analysis"
];

const ProjectsFilter = ({ setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium 
                px-4
                py-2
                border-2
                border-gray-200
                dark:border-[rgba(255,255,255,0.1)]
                rounded-xl
                text-sm
                sm:text-base
                font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
                outline-none
                focus:ring-2
                focus:ring-primary-light
                dark:focus:ring-ternary-light
                cursor-pointer
                transition-all
                duration-300
                min-w-[180px]
            "
    >
      <option value="" className="text-sm sm:text-base">
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option className="text-sm sm:text-base" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;
