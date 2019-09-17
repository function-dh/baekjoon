/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); */

var input = process.argv
var a = parseInt(input[2])

if(100 >= a && a >= 90){
	console.log('A')
}else if(90 > a && a >= 80){
	console.log('B')
}else if(80 > a && a >= 70){
	console.log('C')
}else if(70 > a && a >= 60){
	console.log('D')
}else if(60 > a){
	console.log('F')
}