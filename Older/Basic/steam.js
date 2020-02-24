//Read Stream
var fs = require("fs");
var data = "";

var readStream = fs.createReadStream("readFile.txt");

readStream.setEncoding("utf8");
readStream.on('data', function(txt){
	data += txt;
});

readStream.on("end", function(){
	console.log(data);
});
readStream.on('error', function(err){
	console.log(err.stack);
});


//Write Stream
data = "Wutchara Rachadach";
var writerStream = fs.createWriteStream("output.txt");
writerStream.write(data, 'utf8');
writerStream.on('finish', function(data){
	console.log("Write file success : " + data);
});
writerStream.on("error", function(err){
	console.log(err.stack);
});