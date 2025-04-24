import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const socialLinks = [
  { 
    Icon: Github, 
    href: "https://github.com",
    label: "GitHub Profile",
    className: "hover:text-purple-600 dark:hover:text-purple-400"
  },
  { 
    Icon: Linkedin, 
    href: "https://linkedin.com",
    label: "LinkedIn Profile",
    className: "hover:text-blue-600 dark:hover:text-blue-400"
  },
  { 
    Icon: Mail, 
    href: "mailto:contact@example.com",
    label: "Email Contact",
    className: "hover:text-red-600 dark:hover:text-red-400"
  },
  { 
    Icon: FileText, 
    href: "/resume.pdf",
    label: "Download Resume",
    className: "hover:text-green-600 dark:hover:text-green-400"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={item}
            className="relative mb-8 inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-25 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full relative z-10 border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            variants={item}
            className="mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              John Doe
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Final Year IT Engineering Student
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map(({ Icon, href, label, className }) => (
              <motion.a
                key={href}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg",
                  "transition-all duration-300 ease-out",
                  "hover:shadow-xl hover:-translate-y-1",
                  className
                )}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-8 py-3 rounded-full font-medium",
                "bg-gradient-to-r from-purple-600 to-pink-600",
                "text-white shadow-lg shadow-purple-500/25",
                "hover:shadow-xl hover:shadow-purple-500/40",
                "transition-all duration-300 ease-out",
                "flex items-center gap-2"
              )}
            >
              View Projects
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-8 py-3 rounded-full font-medium",
                "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
                "text-gray-900 dark:text-white",
                "shadow-lg hover:shadow-xl",
                "transition-all duration-300 ease-out",
                "flex items-center gap-2"
              )}
            >
              Contact Me
              <Mail className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}