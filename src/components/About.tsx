import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Rocket, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const skills = [
  { name: "Frontend Development", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Backend Development", level: 85, color: "from-green-500 to-emerald-500" },
  { name: "Cloud Computing", level: 80, color: "from-purple-500 to-indigo-500" },
  { name: "DevOps", level: 75, color: "from-red-500 to-orange-500" },
];

const achievements = [
  {
    icon: Code2,
    title: "20+ Projects",
    description: "Completed various web and mobile applications",
    link: "/projects"
  },
  {
    icon: Brain,
    title: "10+ Certifications",
    description: "Including AWS, Azure, and Google Cloud",
    link: "/certifications"
  },
  {
    icon: Rocket,
    title: "3 Internships",
    description: "At leading tech companies",
    link: "/internships"
  },
  {
    icon: Award,
    title: "5 Hackathons",
    description: "Won first place in 2 national competitions",
    link: "/hackathons"
  }
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300">
                As a final year IT Engineering student, I've developed a strong foundation in both frontend and backend development. My passion lies in creating beautiful, functional applications that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Through internships and personal projects, I've gained hands-on experience with modern technologies and best practices in software development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        skill.color
                      )}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, index) => (
              <Link key={achievement.title} to={achievement.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <achievement.icon className="w-10 h-10 mb-4 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}