const fs = require('fs');
const p = 'src/app/data/works.ts';
let s = fs.readFileSync(p,'utf8');
// Insert tools: [] after any dimensions: "...", line that is followed by imageUrl
s = s.replace(/(dimensions:\s*"[^"]+",)\s*\r?\n\s*(imageUrl:)/g, `$1\n    tools: [],\n    $2`);
fs.writeFileSync(p,s,'utf8');
console.log('patched');
