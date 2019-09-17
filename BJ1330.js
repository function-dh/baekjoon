/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); */

var input = process.argv

var a = parseInt(input[2])
var b = parseInt(input[3])

if(a>b){
	console.log('>')
}else if(a<b){
	console.log('<')
}else if(a==b){
	console.log('==')
}