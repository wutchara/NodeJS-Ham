var fs = require('fs');
var fileName = 'writeFile.txt';
var text = 'Hello HAM';
fs.writeFileSync(fileName, text);
console.log('Write File Success.');

fs.mkdir('temp', function(){
	console.log('Create Directory.');
	//call back function
	fs.writeFileSync('./temp/' + fileName, text);
	console.log('Write File Success.');
});