const fs = require('fs');
let html = fs.readFileSync('cleaned.html', 'utf8');

// Extract the body content (from <!-- Hero Section --> to </footer>)
const start = html.indexOf('<!-- Hero Section -->');
const end = html.indexOf('</body>');
if(start !== -1 && end !== -1) {
  html = html.substring(start, end);
}

// Convert HTML to JSX
html = html.replace(/class=/g, 'className=');
html = html.replace(/for=/g, 'htmlFor=');
html = html.replace(/stroke-dasharray/g, 'strokeDasharray');
html = html.replace(/stroke-width/g, 'strokeWidth');
html = html.replace(/preserveaspectratio/g, 'preserveAspectRatio');
html = html.replace(/viewbox/g, 'viewBox');
html = html.replace(/<img(.*?)>/g, (match) => {
  if (match.endsWith('/>')) return match;
  return match.slice(0, -1) + ' />';
});
html = html.replace(/<hr(.*?)>/g, (match) => {
  if (match.endsWith('/>')) return match;
  return match.slice(0, -1) + ' />';
});
html = html.replace(/<br(.*?)>/g, (match) => {
  if (match.endsWith('/>')) return match;
  return match.slice(0, -1) + ' />';
});
html = html.replace(/<input(.*?)>/g, (match) => {
  if (match.endsWith('/>')) return match;
  return match.slice(0, -1) + ' />';
});

// Style replacement
html = html.replace(/style="([^"]*)"/g, (match, styleString) => {
  if(styleString.includes('background-image')) {
    // Just replace with empty style for now, or handle specifically
    return 'style={{}}';
  }
  return 'style={{}}';
});

const jsxCode = `import React from 'react';
import IndiaMap from './IndiaMap';
import hero_mountains from './assets/hero_mountains.png';

export default function StitchHero({ onExplore, events }) {
  return (
    <>
      ${html}
    </>
  );
}
`;

fs.writeFileSync('src/StitchHero.jsx', jsxCode);
