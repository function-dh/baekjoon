fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var num = parseInt(input[0])
var n=1
var result = ''
if(1 <= n <= 100){
	for(n; n<num+1; n++){
		console.log(result+='*')
	}
}