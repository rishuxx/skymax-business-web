const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Reverse the reckless replace
  let newContent = content.replace(/mb-5 md:mb-6 /g, '');
  newContent = newContent.replace(/mb-5 md:mb-6 /g, '');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Reverted ' + file);
  }
});
