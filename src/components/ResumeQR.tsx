import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export function ResumeQR() {
  // Use relative path directly
  const resumePath = '/certificates/general/Certificates-pdf/Mahesh_Update_Resume_v3.pdf';

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl w-fit"
    >
      <div className="flex items-center gap-3 mb-4">
        <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Scan to View Resume
        </h3>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <QRCodeSVG
          value={resumePath} // ✅ relative path only
          size={200}
          level="H"
          includeMargin
          imageSettings={{
            src: "https://github.com/favicon.ico",
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
      </div>
      <motion.a
        href={resumePath}
        download
        whileTap={{ scale: 0.95 }}
        className="mt-4 flex items-center gap-2 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors text-sm font-medium"
      >
        <Download className="w-4 h-4" />
        Download Resume
      </motion.a>
    </motion.div>
  );
}
