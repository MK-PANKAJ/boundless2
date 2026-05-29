const fs = require('fs');
let html = fs.readFileSync('C:/Users/Manish/.gemini/antigravity/brain/e6e9dd17-c56c-4ffb-b612-10e5c86f2e8c/.system_generated/steps/1899/content.md', 'utf8');
html = html.replace(/src="data:image[^"]+"/g, 'src="placeholder"');
fs.writeFileSync('cleaned.html', html);
