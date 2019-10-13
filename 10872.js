fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");
var num = parseInt(input) 
var result = 1
// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
// 첫째 줄에 정수 N(0 ≤ N ≤ 12)가 주어진다.

if(0 <= num <= 12){
	for(var i = 0; i < num; i++){
		result = result*(i+1)
	}
	console.log(result)
}