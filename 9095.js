fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var testcase = parseInt(input[0]) // 테스트 케이스
var n = new Array // 정수 n
var dp = new Array

// 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램

for(var i = 0; i < testcase; i ++){
	n[i] = parseInt(input[i+1])
	
	if(n[i] === 1){
		console.log(1)
	}
	if(n[i] === 2){
		console.log(2)
	}
	if(n[i] === 3){
		console.log(4)
	}

	dp[0] = 1  // 1
	dp[1] = 2  // 11, 2
	dp[2] = 4  // 111, 12, 21, 3
	
	// 현재 경우의 수는 전의 3개의 경우의 수를 합한 값이랑 같다
	if(n[i] >= 4){
		for(var j = 3; j < n[i]; j++){
			dp[j] = dp[j-3] + dp[j-2] + dp[j-1]
		}
		console.log(dp[j-1])
	}
}