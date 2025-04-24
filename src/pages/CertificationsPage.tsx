import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, ExternalLink, Eye, Download } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { useState } from 'react';
// Update the path to match your project's asset structure
import azureCertImage from '../assets/certificates/general/azure-fundamentals-az900.png';
image: "/certificates/general/AKS_Course_Completion_Certificate_.png"
image: "/certificates/general/Certified_Kubernetes_Administrator_by_KodeKloud.png"
image: "/certificates/general/Course-Certificate_Docker-Mahesh-Ravaji.png"
image: "/certificates/general/Course-Certificate_GIT-Mahesh-Ravaji.png"
image: "/certificates/general/Course-Certificate_Istio-Service-Mesh_Mahesh-Ravaji.png"
image: "/certificates/general/Course-Certificate_Jenkins_Mahesh-Ravaji.png"
image: "/certificates/general/Course-Certificate_Kubernetes-_Mahesh-Ravaji.png"
image: "/certificates/general/Course-Certificate_Lens-Kubernetes-IDE_Mahesh-Ravaji.png"
image: "/certificates/general/Course-Certificate_Open-Source-for-Beginners_Mahesh-Ravaji.png"
image: "/certificates/general/Course-Certificate_Shell-Scripts-Mahesh-Ravaji.png"
image: "/certificates/general/Course-Certificate_Terraform-Basics-Training-Course_Mahesh-Ravaji.png"
image: "/certificates/general/Golang_by_KodeKloud_certificate.png"
image: "/certificates/general/Prometheus_Certified_Associate_[PCA]_Course_Completion.png"
image: "/certificates/general/Terrafor_Associate_Certification_by_Kodekloud.png"


const certifications = [
  {
    title: "Microsoft Azure Administrator",
    organization: "Microsoft",
    date: "August 2024",
    image: azureCertImage,
    credentialUrl: "https://azure.microsoft.com",
    description: "Proficiency in implementing, monitoring, and maintaining Azure solutions",
    skills: ["Azure VMs", "Azure AD", "Storage", "Networking"]
  },
  {
    title: "Certified Kubernetes Administrator",
    organization: "Cloud Native Computing Foundation",
    date: "July 2023",
    image: "certificates/general/Certified Kubernetes Administrator by KodeKloud.png",
    credentialUrl: "https://kubernetes.io",
    description: "Advanced knowledge in managing Kubernetes clusters and workloads",
    skills: ["Container Orchestration", "Security", "Networking", "Storage"]
  },
  {
    title: "AWS Solutions Architect Associate",
    organization: "Amazon Web Services",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    credentialUrl: "https://aws.amazon.com",
    description: "Comprehensive understanding of AWS services and architectural best practices",
    skills: ["EC2", "S3", "Lambda", "CloudFormation", "VPC"]
  },

  {
    title: "AKS Course Completion Certificate",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/AKS Course Completion Certificate .png",
    credentialUrl: "/certificates/general/AKS Course Completion Certificate .pdf",
    description: "Certificate of completion for mastering Azure Kubernetes Service (AKS).",
    skills: ["AKS", "Kubernetes", "Azure"]
  },
  {
    title: "Certified Kubernetes Administrator",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Certified Kubernetes Administrator by KodeKloud.png",
    credentialUrl: "/certificates/general/Certified Kubernetes Administrator by KodeKloud.pdf",
    description: "Validated expertise in Kubernetes cluster management and orchestration.",
    skills: ["Kubernetes", "Containers", "DevOps"]
  },
  {
    title: "Course Certificate Docker",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Course-Certificate_Docker-Mahesh-Ravaji.png",
    credentialUrl: "/certificates/general/Course-Certificate_Docker-Mahesh-Ravaji.pdf",
    description: "Comprehensive understanding of Docker for containerized applications.",
    skills: ["Docker", "Containers", "DevOps"]
  },
  {
    title: "Course Certificate Git",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Course-Certificate_GIT-Mahesh-Ravaji.png",
    credentialUrl: "/certificates/general/Course-Certificate_GIT-Mahesh-Ravaji.pdf",
    description: "Essential skills in version control using Git.",
    skills: ["Git", "Version Control", "Collaboration"]
  },
  {
    title: "Course Certificate Istio Service Mesh",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Course-Certificate_Istio-Service-Mesh_Mahesh-Ravaji.png",
    credentialUrl: "/certificates/general/Course-Certificate_Istio-Service-Mesh_Mahesh-Ravaji.pdf",
    description: "Certificate of completion for learning Istio Service Mesh integration.",
    skills: ["Istio", "Service Mesh", "Microservices"]
  },
  {
    title: "Course Certificate Jenkins",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Course-Certificate_Jenkins_Mahesh-Ravaji.png",
    credentialUrl: "/certificates/general/Course-Certificate_Jenkins_Mahesh-Ravaji.pdf",
    description: "Certificate of completion in Jenkins for CI/CD automation.",
    skills: ["Jenkins", "CI/CD", "Automation"]
  },
  {
    title: "Course Certificate Kubernetes",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Course-Certificate_Kubernetes-_Mahesh-Ravaji.png",
    credentialUrl: "/certificates/general/Course-Certificate_Kubernetes-_Mahesh-Ravaji.pdf",
    description: "Hands-on course in Kubernetes orchestration and resource management.",
    skills: ["Kubernetes", "Containers", "Cluster Management"]
  },
  {
    title: "Course Certificate Lens Kubernetes IDE",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Course-Certificate_Lens-Kubernetes-IDE_Mahesh-Ravaji.png",
    credentialUrl: "/certificates/general/Course-Certificate_Lens-Kubernetes-IDE_Mahesh-Ravaji.pdf",
    description: "Mastered usage of Lens IDE for Kubernetes cluster visualization.",
    skills: ["Lens", "Kubernetes", "IDE"]
  },
  {
    title: "Course Certificate Open Source for Beginners",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Course-Certificate_Open-Source-for-Beginners_Mahesh-Ravaji.png",
    credentialUrl: "/certificates/general/Course-Certificate_Open-Source-for-Beginners_Mahesh-Ravaji.pdf",
    description: "Introduction to contributing and working with open-source technologies.",
    skills: ["Open Source", "GitHub", "Collaboration"]
  },
  {
    title: "Course Certificate Shell Scripts",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Course-Certificate_Shell-Scripts-Mahesh-Ravaji.png",
    credentialUrl: "/certificates/general/Course-Certificate_Shell-Scripts-Mahesh-Ravaji.pdf",
    description: "Practical usage of Bash shell scripting for automation.",
    skills: ["Shell", "Scripting", "Bash"]
  },
  {
    title: "Course Certificate Terraform Basics",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Course-Certificate_Terraform-Basics-Training-Course_Mahesh-Ravaji.png",
    credentialUrl: "/certificates/general/Course-Certificate_Terraform-Basics-Training-Course_Mahesh-Ravaji.pdf",
    description: "Infrastructure as Code using Terraform basics.",
    skills: ["Terraform", "IaC", "Cloud Infrastructure"]
  },
  {
    title: "Golang Certificate",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Golang by KodeKloud certificate.png",
    credentialUrl: "/certificates/general/Golang by KodeKloud certificate.pdf",
    description: "Introduction to Golang programming and its application in cloud systems.",
    skills: ["Go", "Programming", "Backend"]
  },
  {
    title: "Prometheus Certified Associate (PCA)",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Prometheus Certified Associate [PCA] Course Completion.png",
    credentialUrl: "/certificates/general/Prometheus Certified Associate [PCA] Course Completion.pdf",
    description: "Comprehensive training in Prometheus monitoring and alerting.",
    skills: ["Prometheus", "Monitoring", "Alerting"]
  },
  {
    title: "Terraform Associate Certification",
    organization: "KodeKloud",
    date: "2024",
    image: "/certificates/general/Terrafor Associate Certification by Kodekloud.png",
    credentialUrl: "/certificates/general/Terrafor Associate Certification by Kodekloud.pdf",
    description: "Validated skills in Terraform usage for infrastructure provisioning.",
    skills: ["Terraform", "DevOps", "IaC"]
  },




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
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <PageLayout title="My Certifications">
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-11/12 max-w-4xl bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <button
                onClick={() => setPreviewUrl(null)}
                className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 text-lg font-bold"
              >
                ✕
              </button>
              <img
                src={previewUrl}
                alt="Certificate Preview"
                className="w-full max-h-[80vh] object-contain rounded-md"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {cert.title}
                </h2>
                <div className="flex items-center gap-2 text-white/90">
                  <Award className="w-4 h-4" />
                  {cert.organization}
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                <Calendar className="w-4 h-4" />
                {cert.date}
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setPreviewUrl(cert.image)}
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>

                <a
                  href={cert.credentialUrl}
                  download
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Credential
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
}