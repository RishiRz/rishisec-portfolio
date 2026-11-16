export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;

  live?: string;
}


export const projects = [
  {
    title: "ReconX - Web Content Discovery Tool",
    category: "Cybersecurity",

    description:
      "Developed a Gobuster-inspired Python CLI tool for web content discovery and authorized security testing. Features wordlist scanning, extension enumeration, wildcard detection, rate limiting, scan profiles, and JSON, CSV, Markdown, and HTML reports.",

    technologies: [
      "Python",
      "HTTP",
      "CLI",
      "pytest",
      "Web Reconnaissance",
    ],

    github: "https://github.com/RishiRz/ReconX",
  },

  {
    title: "PhishGuard - ML Phishing Email Detection",
    category: "Cybersecurity / Machine Learning",

    description:
      "Built a machine learning application that classifies emails into Legitimate, Spam, and Phishing categories using TF-IDF and Logistic Regression. Achieved 98.18% accuracy with a FastAPI backend, React frontend, and PostgreSQL database.",

    technologies: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Machine Learning",
    ],

    github: "https://github.com/RishiRz/phishGuard",
  },

  {
    title: "E-Commerce Platform",
    category: "Web Development",

    description:
      "Developed an e-commerce website featuring user authentication, product search and filtering, and a session-based shopping cart with a Buy Now flow.",

    technologies: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
    ],
  },

  {
    title: "Premier Senior Secondary School Website",
    category: "Web Development",

    description:
      "Designed and deployed an official school website with responsive web pages and an online admission form supporting document uploads.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],

    live: "https://premierseniorsecondaryschool.in",
  },
];
