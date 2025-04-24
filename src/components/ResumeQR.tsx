import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export function ResumeQR() {
  const resumeUrl = 'https://example.com/resume.pdf'; // Replace with actual resume URL

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <h3 className="text-lg font-semibold">Scan for Resume</h3>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <QRCodeSVG
          value={resumeUrl}
          size={200}
          level="H"
          includeMargin
          imageSettings={{
            src: "https://github.com/favicon.ico",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
      </div>
    </motion.div>
  );
}