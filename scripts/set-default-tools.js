const fs = require('fs');
const p = 'src/app/data/works.ts';
let s = fs.readFileSync(p,'utf8');
// Replace tools: [] after ecom_photo imageUrl
s = s.replace(/(imageUrl:\s*"\/projects\/ecom_photo\/[^"]+",\s*\n\s*)tools:\s*\[\s*\],/g, `$1tools: ["Canva","Photoshop"],`);
// Replace tools: [] after Tarpaulin imageUrl
s = s.replace(/(imageUrl:\s*"\/projects\/Tarpaulin\/[^"]+",\s*\n\s*)tools:\s*\[\s*\],/g, `$1tools: ["Illustrator","Photoshop"],`);
fs.writeFileSync(p,s,'utf8');
console.log('done');
