import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';
import { cn } from '../lib/utils';
import { projects } from "../data/projects";


// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "A complete e-commerce web application with product listing, cart management, order tracking, and secure payment integration.",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
//     tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
//     links: {
//       github: "https://github.com"
//     }
//   },
//   {
//     title: "3-Tier Application Deployment using Jenkins Pipeline",
//     description: "Automated the deployment of a 3-tier web application (frontend, backend, database) using Jenkins CI/CD pipelines on AWS infrastructure.",
//     image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop",
//     tags: ["Jenkins", "AWS EC2", "Nginx", "Tomcat", "MySQL", "Shell Scripting"],
//     links: {
//       github: "https://github.com"
//     }
//   },
//   {
//     title: "2-Tier Application Deployment on DockerHub",
//     description: "Containerized a 2-tier web application and deployed it via DockerHub, ensuring seamless scalability and simplified deployment workflows.",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
//     tags: ["Docker", "DockerHub", "Nginx", "Node.js", "MongoDB"],
//     links: {
//       github: "https://github.com"
//     }
//   },
//   {
//     title: "AWS VPC Creation Using Terraform (IaC)",
//     description: "Designed and provisioned a custom AWS Virtual Private Cloud (VPC) using Terraform scripts, implementing best practices for networking and security.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
//     tags: ["Terraform", "AWS VPC", "Infrastructure as Code", "Cloud Networking"],
//     links: {
//       github: "https://github.com"
//     }
//   }
// ];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium",
                        "text-gray-600 dark:text-gray-400",
                        "hover:text-gray-900 dark:hover:text-gray-200",
                        "transition-colors duration-300"
                      )}
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}