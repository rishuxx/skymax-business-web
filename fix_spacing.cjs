const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // text-center max-w-2xl mx-auto space-y-4 md:space-y-5
  newContent = newContent.replace(
    /className="text-center max-w-2xl mx-auto space-y-4 md:space-y-5([^"]*)"/g,
    'className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4 md:gap-5$1"'
  );

  // text-center text-center max-w-3xl mx-auto space-y-5 md:space-y-6
  newContent = newContent.replace(
    /className="text-center max-w-3xl mx-auto space-y-5 md:space-y-6"/g,
    'className="flex flex-col items-center text-center max-w-3xl mx-auto gap-5 md:gap-6"'
  );

  // text-center md:text-left max-w-3xl space-y-4 md:space-y-5
  newContent = newContent.replace(
    /className="text-center md:text-left max-w-3xl space-y-4 md:space-y-5"/g,
    'className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl gap-4 md:gap-5"'
  );

  // text-center space-y-4 md:space-y-5 mb-10
  newContent = newContent.replace(
    /className="text-center space-y-4 md:space-y-5 mb-10"/g,
    'className="flex flex-col items-center text-center gap-4 md:gap-5 mb-10"'
  );

  // text-center md:text-left space-y-3 md:space-y-4
  newContent = newContent.replace(
    /className="text-center md:text-left space-y-3 md:space-y-4"/g,
    'className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4"'
  );

  // space-y-1 text-left
  newContent = newContent.replace(
    /className="space-y-1 text-left"/g,
    'className="flex flex-col items-start gap-1 text-left"'
  );

  // space-y-2 text-left
  newContent = newContent.replace(
    /className="space-y-2 text-left"/g,
    'className="flex flex-col items-start gap-2 text-left"'
  );

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Fixed spacing in ' + file);
  }
});
