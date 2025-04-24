import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@example.com",
    href: "mailto:contact@example.com"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com"
  }
];

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="prose dark:prose-invert">
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm always open to new opportunities, collaborations, and interesting projects.
                  Feel free to reach out if you'd like to discuss anything!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, title, value, href }) => (
                  <motion.a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                      <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={cn(
                      "w-full px-4 py-2 rounded-lg",
                      "bg-white/50 dark:bg-gray-700/50",
                      "border border-gray-200 dark:border-gray-600",
                      "focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400",
                      "focus:border-transparent outline-none",
                      "transition-all duration-300"
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={cn(
                      "w-full px-4 py-2 rounded-lg",
                      "bg-white/50 dark:bg-gray-700/50",
                      "border border-gray-200 dark:border-gray-600",
                      "focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400",
                      "focus:border-transparent outline-none",
                      "transition-all duration-300"
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg",
                      "bg-white/50 dark:bg-gray-700/50",
                      "border border-gray-200 dark:border-gray-600",
                      "focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400",
                      "focus:border-transparent outline-none",
                      "transition-all duration-300"
                    )}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full px-8 py-3 rounded-lg",
                    "bg-gradient-to-r from-purple-600 to-pink-600",
                    "text-white font-medium",
                    "hover:shadow-lg hover:shadow-purple-500/25",
                    "transition-all duration-300",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}