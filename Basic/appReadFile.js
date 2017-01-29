var fs = require('fs');
var text = fs.readFileSync('readFile.txt');
console.log(text);

console.log("==================================");

var text = fs.readFileSync('readFile.txt', 'utf8');
console.log(text);