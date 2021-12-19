const fs = require('fs').promises;
const markdownTemplate = async () => {
   const markdown = await fs.readFile('./README.md.tpl', {encoding: 'utf8'})
   console.log(markdown);
}

markdownTemplate();