console.log("Hello HAM.");

var m = require('./method.js');
console.log('1>' + m.pi);
console.log('2>' + m.method);
console.log('3>' + m.opt);
console.log('4>' + m.opt.update);
m.opt.update();