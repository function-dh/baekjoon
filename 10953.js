fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");
var testcase = Number(input[0]) 
var num = new Array

for(var i=0; i<testcase; i++){
	var num = input[i+1].split(',')
	var a = parseInt(num[0])
	var b = parseInt(num[1])

	console.log(a+b)
}