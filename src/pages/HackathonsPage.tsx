import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, ExternalLink, Github } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { cn } from '../lib/utils';

const hackathons = [
  {
    name: "Smart India Hackethon 2024",
    date: "December 2023",
    teamSize: 4,
    position: 1,
    project: {
      name: "TechyGuys",
      description: "AI-powered solution for tracking and reducing carbon footprint",
      demo: "https://demo.example.com",
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop"
    },
    certificate: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=400&fit=crop",
    technologies: ["React", "TensorFlow.js", "Node.js", "MongoDB"]
  },
  {
    name: "Kavach Hackathon",
    date: "October 2023",
    teamSize: 3,
    position: 1,
    project: {
      name: "MedAlert",
      description: "Smart medication reminder and health monitoring system",
      demo: "https://demo.example.com",
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop"
    },
    certificate: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=400&fit=crop",
    technologies: ["Flutter", "Firebase", "Python", "scikit-learn"]
  },
  {
    name: "Smart Cities Hackathon",
    date: "August 2023",
    teamSize: 4,
    position: 2,
    project: {
      name: "UrbanFlow",
      description: "Real-time traffic optimization using IoT sensors",
      demo: "https://demo.example.com",
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?w=800&h=400&fit=crop"
    },
    certificate: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
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

export function HackathonsPage() {
  return (
    <PageLayout title="My Hackathons">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        {hackathons.map((hackathon) => (
          <motion.div
            key={hackathon.name}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <img
                src={hackathon.project.image}
                alt={hackathon.project.name}
                className="w-full h-full object-cover"
              />
              {hackathon.position <= 3 && (
                <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/90 text-yellow-900 font-medium">
                  <Trophy className="w-5 h-5" />
                  {hackathon.position === 1 ? "Winner" : `${hackathon.position}nd Place`}
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <h2 className="text-2xl font-bold">{hackathon.name}</h2>
                <div className="flex gap-4 text-gray-600 dark:text-gray-300">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {hackathon.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Team of {hackathon.teamSize}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  {hackathon.project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {hackathon.project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {hackathon.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={hackathon.project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={hackathon.project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={hackathon.certificate}
                  alt="Hackathon Certificate"
                  className="w-full h-full object-cover"
                />
                <a
                  href={hackathon.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="flex items-center gap-2 text-white font-medium">
                    <ExternalLink className="w-5 h-5" />
                    View Certificate
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
}