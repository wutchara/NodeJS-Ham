var fs = require("fs");

var myUser = {
	"name" : "wutchara",
	"id" : "563040205-0",
	"age" : 23
}

//create server
var http = require("http");


http.createServer(function (request, response) {
	//show text
	/*
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
   */

   //show html
   /*
	response.writeHead(200, {'Content-Type': 'text/html'});
   	var myStream = fs.createReadStream(__dirname + "/index.html", 'utf8');
   	myStream.pipe(response);
   	*/

   	//show JSON
   	response.writeHead(200, {'Content-Type': 'application/json'});
   	response.end(JSON.stringify(myUser));

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');