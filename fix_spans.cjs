const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find spans that have uppercase and are likely the labels we want.
  // We want to add explicitly "mb-5 md:mb-6" to them.
  let modified = false;

  const lines = content.split('\n');
  const newLines = lines.map(line => {
    // If it's a label span (uppercase, some tracking, text-[#1D5EA8] or similar) inside a header block
    if (line.includes('<span ') && line.includes('uppercase') && line.includes('tracking')) {
      // Don't add multiple times
      if (!line.includes('mb-5')) {
          return line.replace(/<span className="/, '<span className="mb-5 md:mb-6 ');
      }
    }
    // Also handle <p> tags that are used as labels like in AboutView and HomeView
    if (line.includes('<p className="') && line.includes('uppercase') && line.includes('tracking-')) {
       if (!line.includes('mb-5') && line.includes('text-[#1D5EA8]')) {
          return line.replace(/<p className="/, '<p className="mb-5 md:mb-6 inline-block ');
      }
    }
    return line;
  });

  if (lines.join('\n') !== newLines.join('\n')) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    console.log('Fixed ' + file);
  }
});
