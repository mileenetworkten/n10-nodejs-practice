import fs from 'fs';
import mkdirp from 'mkdirp';

const rootPath = require('path').resolve(__dirname, '../');
const testFilePath = rootPath + '/logging/test.json';

if (!fs.existsSync(rootPath + '/logging')) {
	mkdirp.sync(rootPath + '/logging');
}

async function readFile(filePath: string) {
	console.log('reading file started at: ' + filePath);
	fs.readFile(filePath, function(error: NodeJS.ErrnoException, dataBuffer: Buffer) {
		if (error) {
			throw error;
		}
		const results = dataBuffer.toString();
		console.log('reading file completed results appended\n', JSON.parse(results));
	});
}

async function writeFile(filePath: string, data: { [key: string]: any }) {
	fs.writeFile(
		filePath,
		JSON.stringify(data),
		{}, //options default to nothing
		function() {
			//on complete function
			console.log('file write completed');
		},
	);
}

async function Main() {
	// await readFile(testFilePath);
	// await writeFile(testFilePath, {});
}
Main();
