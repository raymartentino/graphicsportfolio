import fs from 'fs';
import path from 'path';

const sourceFolders = [
  { dir: 'projects/ecom_photo', category: 'Product Design' },
  { dir: 'projects/Tarpaulin', category: 'Tarpaulin Design' },
];

const normalizeTitle = (name) =>
  name
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const resolveSourceDir = (dir) => {
  const base = path.join(process.cwd(), path.dirname(dir));
  if (!fs.existsSync(base)) return dir;
  const targetName = path.basename(dir).toLowerCase();
  const match = fs.readdirSync(base).find((entry) => entry.toLowerCase() === targetName);
  return match ? path.join(path.dirname(dir), match) : dir;
};

const inferCategory = (title, sourceDir) => {
  if (sourceDir.toLowerCase().includes('tarpaulin')) return 'Tarpaulin Design';
  if (/perfume|fragrance|meow|incantho|bare vanilla|premium perfume|collection/i.test(title)) return 'Fragrance Design';
  if (/soap|toothpaste|shampoo|conditioner|lotion|botox|cysteine|hair/i.test(title)) return 'Personal Care';
  if (/dishwashing|axistar|calamansi|cleaning|comfy/i.test(title)) return 'Household Design';
  return 'Product Design';
};

const safe = (str) => str.replace(/"/g, '\\"');

const items = [];
let id = 1;

for (const folder of sourceFolders) {
  const sourceDir = resolveSourceDir(folder.dir);
  const dir = path.join(process.cwd(), sourceDir);
  if (!fs.existsSync(dir)) continue;

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.match(/\.(png|jpe?g)$/i))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

  const urlSourceDir = sourceDir.split(path.sep).join('/');
  const defaultTools = sourceDir.toLowerCase().includes('tarpaulin')
    ? ['Illustrator', 'Photoshop']
    : ['Figma', 'Photoshop'];

  for (const file of files) {
    const title = normalizeTitle(file);
    const category = inferCategory(title, folder.dir);
    const description = `A visual concept for ${title}, styled as ${folder.category.toLowerCase()} and promotional artwork.`;

    items.push(`  {
    id: "${id}",
    title: "${safe(title)}",
    category: "${safe(category)}",
    year: "2026",
    description: "${safe(description)}",
    medium: "Digital Design",
    dimensions: "Promotional",
      imageUrl: "/${urlSourceDir}/${file.replace(/\"/g, '')}",
      tools: ${JSON.stringify(defaultTools)},
    },`);
    id += 1;
  }
}

const output = `export interface Work {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  medium: string;
  dimensions: string;
  tools: string[];
  imageUrl: string;
}

export const works: Work[] = [
${items.join('\n')}
];
`;

fs.writeFileSync(path.join('src', 'app', 'data', 'works.ts'), output, 'utf8');
console.log(`works.ts generated with ${items.length} entries`);
