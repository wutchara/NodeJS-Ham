//console.log(__filename);
//console.log(__dirname);

function printHello(){
	console.log("Hello Wold.");
}

//setTimeout do a time.
var t = setTimeout(printHello, 2000);	//set Timeout
clearTimeout(t);	//Clear Timeout

//setInterval do infinity times.
setInterval(printHello, 2000);