const fs = require('fs');
const p = 'src/app/data/works.ts';
let s = fs.readFileSync(p,'utf8');
// replace all empty tools with Figma default
s = s.replace(/tools:\s*\[\s*\],/g, 'tools: ["Figma","Photoshop"],');
// then replace tarpaulin ones
s = s.replace(/imageUrl:\s*"(\/projects\/Tarpaulin\/[^"]+)",\s*\n\s*tools:\s*\["Figma","Photoshop"\],/g, 'imageUrl: "$1",\n      tools: ["Illustrator","Photoshop"],');
fs.writeFileSync(p,s,'utf8');
console.log('done');
