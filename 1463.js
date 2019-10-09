fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var num = parseInt(input[0])
var dp = new Array // n을 1로 만드는 최소 횟수

// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

// 1일 때는 무조건 최솟값이 0
dp[1] = 0

for(var i = 2; i<=num; i++){
	dp[i] = dp[i-1]+1
	if(i%2 === 0){
		dp[i] = Math.min(dp[i], dp[i/2]+1)
	}
	if(i%3 === 0){
		dp[i] = Math.min(dp[i], dp[i/3]+1)
	}
}
console.log(dp[num])

// do{
// 	if(num%3 !== 0 && num%2 !== 0){
// 		num = num-1
// 		result += 1
// 	}
// 	if(num%3 === 0){
// 		num = num/3
// 		result += 1
// 	}
// 	if(num%2 === 0){
// 		num = num/2
// 		result += 1
// 	}
// }while(num !== 1)

// console.log(num)
// console.log(result)