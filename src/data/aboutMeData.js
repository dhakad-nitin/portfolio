export const aboutMeData = [
  {
    id: 1,
    bio: "Hello there! I'm thrilled to welcome you to my portfolio. I'm Nitin Dhakad, a passionate software developer with a deep-rooted fascination for artificial intelligence and machine learning. Exploring the vast realm of technology is my driving force, and I'm constantly seeking to push the boundaries of innovation.",
  },
  {
    id: 2,
    bio: "As a software developer, I've had the privilege of translating intricate ideas into functional, user-friendly applications. My journey in the world of programming has been an exhilarating one, characterized by problem-solving, creativity, and an unwavering commitment to refining my craft. ",
  },
  {
    id: 3,
    bio: "I take pride in my ability to write clean, efficient code that not only meets current standards but is also adaptable to the ever-evolving tech landscape.",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Genpact",
    position: "AI/ML Intern",
    duration: "July 2024 - December 2024",
    type: "Certificate",
    logo: "https://i.pinimg.com/736x/cf/85/b5/cf85b5439da2e0e867ac183bcd214fe6.jpg",
    projects: [
      {
        title: "Optimizing Invoice-PO Matching using RLHF",
        details: [
          "Improved Invoice-PO matching accuracy on LLaMA 2 7B using RLHF",
          "Explored two approaches: Vertex AI RLHF pipeline (GCP) and TRL library(Hugging Face)",
          "Employed QLoRA with 4-bit quantization for efficient model loading",
          "Achieved 78.41% accuracy, a 9.3% increase over the SFT-tuned model, leveraging the TRL library"
        ],
        technologies: ["Python", "Vertex AI", "TRL"]
      },
      {
        title: "SPARQL Query Automation with Agents",
        details: [
          "Automated SPARQL query generation, execution, and optimization using AutoGen",
          "Used multiple agents for query generation, execution, feedback, and refinement",
          "Achieved 86% accuracy with a 32-second average response time, covering the full agent conversation in AutoGen"
        ],
        technologies: ["Python", "Autogen"]
      },
      {
        title: "Web App for SPARQL Automation",
        details: [
          "Developed a full-stack web app with React and Tailwind CSS (frontend) and FastAPI (backend) for automating SPARQL query generation",
          "Integrated a feature to upload .ttl files and ask questions, triggering the AutoGen agent pipeline",
          "Demonstrated Agentic AI by showcasing agent conversations, final outcomes, and answers to solve complex problems"
        ],
        technologies: ["Python", "Autogen", "FastAPI", "React", "TailwindCSS", "JavaScript"]
      }
    ]
  }
];
