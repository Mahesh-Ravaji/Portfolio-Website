import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { convert } from 'pdf-poppler';

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfDir = path.join(__dirname, 'public/certificates/general');
const outputDir = path.join(__dirname, 'public/certificates/thumbnails');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(pdfDir).forEach(file => {
  if (file.endsWith('.pdf')) {
    const filePath = path.join(pdfDir, file);
    const outputFileName = file.replace('.pdf', '');

    const options = {
      format: 'png',
      out_dir: outputDir,
      out_prefix: outputFileName,
      page: 1
    };

    convert(filePath, options)
      .then(() => {
        console.log(`✅ Thumbnail created for: ${file}`);
      })
      .catch(err => {
        console.error(`❌ Error processing ${file}:`, err);
      });
  }
});
