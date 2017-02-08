var fs = require("fs");
var reader = fs.createReadStream("readFile.txt");
var writer = fs.createWriteStream("output.txt");

reader.pipe(writer);//read file and write