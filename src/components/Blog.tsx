import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const posts = [
  {
    title: "Building Scalable Web Applications with React and TypeScript",
    excerpt: "Learn how to create maintainable and type-safe React applications using TypeScript",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["React", "TypeScript", "Web Development"]
  },
  {
    title: "Cloud Native Development: A Comprehensive Guide",
    excerpt: "Explore modern cloud-native development practices and technologies",
    date: "Mar 10, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    tags: ["Cloud", "DevOps", "Kubernetes"]
  },
  {
    title: "Getting Started with Machine Learning in JavaScript",
    excerpt: "Introduction to machine learning concepts using TensorFlow.js",
    date: "Mar 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
    tags: ["Machine Learning", "JavaScript", "AI"]
  }
];

export function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Latest Blog Posts
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <button className="flex items-center gap-1 font-medium text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}