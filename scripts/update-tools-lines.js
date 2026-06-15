const fs = require('fs');
const p = 'src/app/data/works.ts';
const lines = fs.readFileSync(p,'utf8').split(/\r?\n/);
let changed = 0;
for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i];
  const next = lines[i+1];
  if (/imageUrl:\s*".*\/projects\/ecom_photo\//.test(line) && /tools:\s*\[\s*\],?\s*$/.test(next)) {
    lines[i+1] = next.replace(/tools:\s*\[\s*\],?\s*$/, 'tools: ["Canva","Photoshop"],');
    changed++;
  }
  if (/imageUrl:\s*".*\/projects\/Tarpaulin\//.test(line) && /tools:\s*\[\s*\],?\s*$/.test(next)) {
    lines[i+1] = next.replace(/tools:\s*\[\s*\],?\s*$/, 'tools: ["Illustrator","Photoshop"],');
    changed++;
  }
}
fs.writeFileSync(p, lines.join('\n'), 'utf8');
console.log('updated', changed);
