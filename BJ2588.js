/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n'); */

var input = process.argv

var a = parseInt(input[2])
var b = parseInt(input[3])

var n1 = a*(Math.floor(b%10));
var n2 = a*(Math.floor((b%100)/10));
var n3 = a*(Math.floor(b/100));
var n4 = n1+n2*10+n3*100;

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);