/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); */

fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split("\n");

var n = parseInt(input[0]);
var score = input[1].split(' ').map(x=> parseInt(x));

console.log(n)
console.log(score)

// 점수 중에서 최댓값을 뽑아내야함
// 점수/최댓값*100 식 만들어야 하고
// 소수점 2자리 까지 나타냄

