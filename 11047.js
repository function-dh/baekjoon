fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split("\n");
/* var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n"); */

var inputbox = input[0].split(' ')
var n = parseInt(inputbox[0]) // N 동전의 갯수
var k = parseInt(inputbox[1]) // K 목표 원
var coin = [] // 각 동전의 값
var result = k;
var count = 0;

/* 첫째 줄에 K원을 만드는데 필요한 동전 개수의 최솟값을 출력한다. */

for(var i =0; i < n; i++){
	coin[i] = parseInt(input[i+1])
}
coin.sort(function(a, b){
	return b-a
})

for(var j = 0; j < n; j++){
	if(k / coin[j] >= 1 && result / coin[j] >= 1){
		count += Math.floor(result / coin[j]) // 4
		result = k % coin[j] // 200
	}
}
console.log(count)