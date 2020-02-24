var buffer = new Buffer(10);
var bufLength = buffer.write("HAM");
var buffer2 = new Buffer([10]);
var buffer3 = new Buffer("wutchara");
var buffer4 = new Buffer("wutchara", "utf8");


console.log(buffer);
console.log("Length : " + bufLength);
console.log(buffer2);
console.log(buffer3);
console.log(buffer3.toString());
console.log(buffer4.toString());

//Buffer JSON
var bufJSON = new Buffer("Wutchara");
var json = bufJSON.toJSON(bufJSON);
console.log(json);

var conBuf = Buffer.concat([bufJSON, buffer]);
console.log(conBuf);