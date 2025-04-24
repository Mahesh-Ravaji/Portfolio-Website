import { motion } from 'framer-motion';
import { Github, Globe, Star } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { cn } from '../lib/utils';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and language translation capabilities.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop",
    techStack: ["Next.js", "OpenAI", "Socket.io", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    title: "Cloud Dashboard",
    description: "Analytics dashboard for monitoring cloud resources and costs with detailed insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    techStack: ["Vue.js", "AWS", "D3.js", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false
  }
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
  return (
    <PageLayout title="My Projects">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
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