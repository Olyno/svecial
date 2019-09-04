const fs = require('fs');

fs.readdir(`${__dirname}/components`, (err, files) => {
	if (err) throw err;
	const inputs = [];
	for (let file of files) {
		inputs.push(`import ${file.replace(/\.svelte$/gmui, '')} from './components/${file}';`);
    }
	inputs.push(`export { ${files.join(', ').replace(/\.svelte/gmui, '')} };`);
	inputs.push(`export default { ${files.join(', ').replace(/\.svelte/gmui, '')} };`)
	fs.writeFileSync(`${__dirname}/index.js`, inputs.join('\n'));
})