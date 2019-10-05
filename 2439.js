fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var num = parseInt(input[0])
var result = ''
var space = ''
if(1 <= num <= 100){
	for(var n = 0; n < num; n++){
		for(var i = num-1; i>n ;i--){
			space += ' '
		}
		result += '*'
		console.log(space+result)
		space=''
	}
}