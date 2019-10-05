fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var num = input[0].split(' ')
var numInt = input[1].split(' ');
var n = parseInt(num[0])
var x = parseInt(num[1])
var result = []

for(var i=0; i<n; i++){
	if(parseInt(numInt[i])<x){
		result += parseInt(numInt[i])+' '
	}
}
console.log(result)