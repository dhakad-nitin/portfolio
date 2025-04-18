
const AboutmySkills = () => {
  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-12">
        My Skills
      </p>
      <div className="container m-auto place-items-center gap-y-12 grid grid-cols-2 md:grid-cols-4">
        {/* Python */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Python
            </p>
          </div>
        </div>
        {/* Javascript */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="Javascript logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Javascript
            </p>
          </div>
        </div>
        {/* Java */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Java
            </p>
          </div>
        </div>
        {/* C++ */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="C++ logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              C++
            </p>
          </div>
        </div>
        {/* React */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              React
            </p>
          </div>
        </div>
        {/* Node.js */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Node.js
            </p>
          </div>
        </div>
        {/* FastAPI */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
                alt="FastAPI logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              FastAPI
            </p>
          </div>
        </div>
        {/* Tailwind CSS */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Tailwind CSS logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Tailwind CSS
            </p>
          </div>
        </div>
        {/* Autogen */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://microsoft.github.io/autogen/stable//_static/logo.svg"
                alt="Autogen logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300 dark:invert"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Microsoft Autogen
            </p>
          </div>
        </div>
        {/* Hugging Face */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
                alt="Hugging Face logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Hugging Face
            </p>
          </div>
        </div>
        {/* LangGraph */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://brandlogos.net/wp-content/uploads/2025/04/langgraph-logo_brandlogos.net_nezpd.png"
                alt="LangGraph logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              LangGraph
            </p>
          </div>
        </div>
        {/* CrewAI */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://miro.medium.com/v2/resize:fit:1400/0*-7HC-GJCxjn-Dm7i.png"
                alt="CrewAI logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              CrewAI
            </p>
          </div>
        </div>
        {/* Google Cloud Platform */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                alt="Google Cloud Platform logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Google Cloud Platform
            </p>
          </div>
        </div>
        {/* GCP's Vertex AI */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.prod.website-files.com/64b3ee21cac9398c75e5d3ac/6576d498ba4e1da8271c0a52_Vertex%20Full.webp"
                alt="Vertex AI logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Vertex AI
            </p>
          </div>
        </div>
        {/* TRL */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://www.deepchecks.com/wp-content/uploads/2024/09/logo-trl.png"
                alt="TRL logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              TRL
            </p>
          </div>
        </div>
        {/* OpenAI */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                alt="OpenAI logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              OpenAI
            </p>
          </div>
        </div>
        {/* SQL */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="SQL logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              SQL
            </p>
          </div>
        </div>
        {/* MongoDB */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              MongoDB
            </p>
          </div>
        </div>
        {/* Git */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              Git
            </p>
          </div>
        </div>
        {/* GitHub */}
        <div className="group relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
              <img
                width="90"
                height="90"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub logo"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="absolute -bottom-6 text-center font-medium text-sm text-primary-dark dark:text-primary-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
              GitHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutmySkills;
