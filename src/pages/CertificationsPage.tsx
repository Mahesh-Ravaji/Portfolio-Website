import { motion } from 'framer-motion';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { cn } from '../lib/utils';

const certifications = [
  {
    title: "Azure Fundamentals [AZ900]",
    organization: "Microsoft",
    date: "May 2023",
    image: "/certificates/thumbnails/azure.png", // Optional thumbnail image
    credentialUrl: "/certificates/general/Azure_Fundamentals_AZ900.pdf",
    description: "Demonstrated foundational knowledge of Microsoft Azure services and cloud concepts.",
    skills: ["Cloud Basics", "Azure Services", "Security", "Governance"]
  },
  {
    title: "AWS Solutions Architect Associate",
    organization: "Amazon Web Services",
    date: "December 2023",
    image: "/certificates/thumbnails/aws.png",
    credentialUrl: "/certificates/general/AWS_Solutions_Architect_Associate.pdf",
    description: "Comprehensive understanding of AWS services and architectural best practices.",
    skills: ["EC2", "S3", "Lambda", "CloudFormation", "VPC"]
  },
  {
    title: "Google Cloud Professional Developer",
    organization: "Google Cloud",
    date: "October 2023",
    image: "/certificates/thumbnails/googlecloud.png",
    credentialUrl: "/certificates/general/Google_Cloud_Professional_Developer.pdf",
    description: "Expert-level knowledge in developing applications for Google Cloud Platform.",
    skills: ["App Engine", "Cloud Functions", "BigQuery", "Kubernetes"]
  },
  {
    title: "Certified Kubernetes Administrator",
    organization: "Cloud Native Computing Foundation",
    date: "July 2023",
    image: "/certificates/thumbnails/kubernetes.png",
    credentialUrl: "/certificates/general/Certified_Kubernetes_Administrator.pdf",
    description: "Advanced knowledge in managing Kubernetes clusters and workloads.",
    skills: ["Container Orchestration", "Security", "Networking", "Storage"]
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

export function CertificationsPage() {
  return (
    <PageLayout title="My Certifications">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-bold text-white mb-1">{cert.title}</h2>
                <div className="flex items-center gap-2 text-white/90">
                  <Award className="w-4 h-4" />
                  {cert.organization}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                <Calendar className="w-4 h-4" />
                {cert.date}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                download // Remove this line if you want to open instead of download
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
}
