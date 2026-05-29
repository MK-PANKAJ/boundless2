const fs = require('fs'); 
const lines = fs.readFileSync('C:/Users/Manish/.gemini/antigravity/brain/e6e9dd17-c56c-4ffb-b612-10e5c86f2e8c/.system_generated/logs/transcript.jsonl', 'utf8').split('\n'); 
let cssContent = ''; 
for (let line of lines) { 
  if (line.includes('"step_index":516')) { 
    const obj = JSON.parse(line); 
    cssContent = obj.content; 
    break; 
  } 
} 
fs.writeFileSync('recovered_css.txt', cssContent, 'utf8'); 
console.log('Wrote to recovered_css.txt');
