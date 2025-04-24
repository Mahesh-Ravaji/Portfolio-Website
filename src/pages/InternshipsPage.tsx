import { motion } from 'framer-motion';
import { Calendar, Building2, ExternalLink } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { cn } from '../lib/utils';

const internships = [
  {
    company: "Tech Corp",
    role: "Software Engineering Intern",
    duration: "Jun 2023 - Aug 2023",
    description: "Developed and maintained microservices using Node.js and Docker. Implemented real-time analytics dashboard.",
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=200&h=200&fit=crop",
    certificate: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=400&fit=crop",
    technologies: ["Node.js", "Docker", "React", "MongoDB"]
  },
  {
    company: "Data Systems Inc",
    role: "Full Stack Developer Intern",
    duration: "Jan 2023 - Apr 2023",
    description: "Built and deployed scalable web applications. Optimized database queries and implemented caching solutions.",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop",
    certificate: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=400&fit=crop",
    technologies: ["Python", "Django", "PostgreSQL", "Redis"]
  },
  {
    company: "Cloud Solutions",
    role: "Cloud Engineering Intern",
    duration: "May 2022 - Aug 2022",
    description: "Managed cloud infrastructure and implemented CI/CD pipelines. Automated deployment processes.",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop",
    certificate: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=400&fit=crop",
    technologies: ["AWS", "Terraform", "Jenkins", "Kubernetes"]
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

export function InternshipsPage() {
  return (
    <PageLayout title="My Internships">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {internships.map((internship) => (
          <motion.div
            key={internship.company}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
                <img
                  src={internship.logo}
                  alt={internship.company}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{internship.company}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-600 dark:text-gray-300">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {internship.role}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {internship.duration}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {internship.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {internship.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={internship.certificate}
                  alt="Internship Certificate"
                  className="w-full h-full object-cover"
                />
                <a
                  href={internship.certificate}
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