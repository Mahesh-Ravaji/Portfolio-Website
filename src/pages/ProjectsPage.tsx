import { motion } from 'framer-motion';
import { Github, Globe, Star } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { cn } from '../lib/utils';
import { useState } from 'react';

const categories = ["All", "Web Apps", "DevOps", "Cloud"];


const projects = [
  {
    title: "Campus Lost & Found",
    description: "A web app where students can report lost or found items on campus, featuring user authentication, image uploads, and notification system.",
    image: "src/assets/images/campus_lost_find.jpeg",
    techStack: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/campus-lost-found",
    demo: "https://campus-lost-found.example.com",
    featured: true,
    category: "Web Apps",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard.",
    image: "src/assets/images/DevOps_Project_100.jpeg",
    techStack: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-platform.example.com",
    featured: true,
    category: "Web Apps",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered smart replies and multilingual support.",
    image: "src/assets/images/ai.jpeg",
    techStack: ["Next.js", "OpenAI API", "Socket.io", "TypeScript"],
    github: "https://github.com/yourusername/ai-chat-application",
    demo: "https://ai-chat-app.example.com",
    featured: true,
    category: "Web Apps",
  },

  {
    title: "DevOps Portfolio (100DaysOfDevOps)",
    description: "A curated portfolio showcasing automation scripts, CI/CD pipelines, Kubernetes setups and monitoring tools from my #100DaysOfDevOps challenge.",
    image: "src/assets/images/DevOps_Project_100.jpeg",
    techStack: ["Docker", "Jenkins", "Terraform", "Kubernetes", "AWS", "Ansible"],
    github: "https://github.com/yourusername/devops-portfolio",
    demo: "https://devops-portfolio.example.com",
    featured: true,
    category: "DevOps",
  },
  {
    title: "Server Automation Scripts",
    description: "A collection of Bash, Ansible, and Python scripts to automate server setup, backups, and monitoring.",
    image: "src/assets/images/Scrpt-for-server.jpeg",
    techStack: ["Bash", "Python", "Ansible"],
    github: "https://github.com/yourusername/server-automation",
    demo: "https://server-automation.example.com",
    featured: false,
    category: "DevOps",
  },
  {
    title: "Containerized Microservices",
    description: "Built microservices architecture using Docker Compose and Kubernetes deployments for scalability.",
    image: "src/assets/images/k8s.jpeg",
    techStack: ["Docker", "Kubernetes", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/containerized-microservices",
    demo: "https://microservices.example.com",
    featured: false,
    category: "DevOps",
  },
  {
    title: "Cloud Cost Dashboard",
    description: "Interactive analytics dashboard to monitor and optimize cloud costs and resources.",
    image: "src/assets/images/cost.jpeg",
    techStack: ["Vue.js", "AWS", "D3.js", "TailwindCSS"],
    github: "https://github.com/yourusername/cloud-dashboard",
    demo: "https://cloud-dashboard.example.com",
    featured: false,
    category: "Cloud",
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
  ? projects
  : projects.filter((project) =>
      project.category.toLowerCase() === activeCategory.toLowerCase()
    );

  return (
    <PageLayout title="My Projects">
      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-12">
      {categories.map((category) => (
  <button
    key={category}
    onClick={() => setActiveCategory(category)}
    className={cn(
      "px-4 py-2 rounded-full text-sm font-medium border transition",
      activeCategory === category
        ? "bg-purple-600 text-white border-purple-600"
        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
    )}
  >
    {category}
  </button>
))}
      </div>

      {/* Project Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className={cn(
              "rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300",
              project.featured && "md:col-span-2"
            )}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-400/90 text-yellow-900 text-sm font-medium">
                  <Star className="w-4 h-4" />
                  Featured
                </div>
              )}
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
}
