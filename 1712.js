fs = require('fs')
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split(' ').map(Number)
var fixnum = input[0]
var flownum = input[1]
var price = input[2]

if(flownum - price >= 0){
	console.log(-1)
}else{
	var sum = fixnum/(price-flownum)
	console.log(Math.floor(sum) + 1)
}


