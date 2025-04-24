import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { ParticlesBackground } from './ParticlesBackground';
import { ScrollProgress } from './ScrollProgress';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ParticlesBackground />
      <ScrollProgress />
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            {title}
          </h1>

          {children}
        </motion.div>
      </div>
    </div>
  );
}