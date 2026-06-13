const fs = require('fs');
const p = 'src/app/data/works.ts';
let s = fs.readFileSync(p,'utf8');
const objRegex = /\{[\s\S]*?\},/g;
let m; let countAdded=0;
while((m = objRegex.exec(s)) !== null){
  const obj = m[0];
  if(!/\btools:\s*\[\s*\]/.test(obj)){
    // insert tools before imageUrl line
    const newObj = obj.replace(/(\n\s*)(imageUrl:\s*\"[^\"]+\",)/, `$1tools: [],\n    $2`);
    s = s.slice(0,m.index) + newObj + s.slice(m.index + obj.length);
    // move regex index forward to avoid infinite loop
    objRegex.lastIndex = m.index + newObj.length;
    countAdded++;
  }
}
fs.writeFileSync(p,s,'utf8');
console.log('tools added:', countAdded);
