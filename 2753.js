/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); */

var input = process.argv
var a = parseInt(input[2])

// 4의 배수이면서, 100의 배수가 아닐 때 
// 400의 배수

if(a%4 === 0 && a%100 !== 0){
	console.log(1)
}else if(a%400 === 0){
	console.log(1)
}else{
	console.log(0)
}