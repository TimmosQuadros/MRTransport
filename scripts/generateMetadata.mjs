import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Set up paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.join(__dirname, '../src/pages');
const outputPath = path.join(__dirname, '../src/data/pagesMetadata.tsx');

// Function to extract metadata from a page file
const extractMetadata = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract the name (usually the first line or title in JSX/TSX)
    const nameMatch = content.match(/<h1>(.*?)<\/h1>/);
    const name = nameMatch ? nameMatch[1] : path.basename(filePath, path.extname(filePath));

    // Extract a snippet of text content for search indexing
    const textMatch = content.match(/<p>(.*?)<\/p>/);
    const snippet = textMatch ? textMatch[1] : '';

    return { name, snippet };
};

// Function to generate the metadata
const generateMetadata = () => {
    const files = fs.readdirSync(pagesDir);
    const metadata = files.filter(file => file.endsWith('.tsx')).map(file => {
        const filePath = path.join(pagesDir, file);
        const { name, snippet } = extractMetadata(filePath);
        return {
            name,
            path: `/${path.basename(file, path.extname(file)).toLowerCase()}`,
            content: snippet,
        };
    });

    const outputContent = `export const pages = ${JSON.stringify(metadata, null, 2)};`;
    fs.writeFileSync(outputPath, outputContent);
    console.log(`Metadata generated at ${outputPath}`);
};

generateMetadata();