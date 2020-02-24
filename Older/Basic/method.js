var pi=3.1;
var method={};
method.update=function(){
	console.log("update");
}
method.delete=function(){
	console.log("delete");
}
method.pi=pi;

exports.pi=pi;
exports.opt=method;