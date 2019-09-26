fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split("\n");

var n = parseInt(input[0])
var score = input[1].split(' ').map(x=> parseInt(x));
var maxScore = Math.max.apply(null, score)
var result = 0;

console.log(n)
console.log(score)

for(var i=0; i<n; i++){
	result += (score[i]/maxScore*100)
}

console.log((result/n).toFixed(2))

