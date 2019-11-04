fs = require('fs')
input = fs.readFileSync('/study/baekjoon/test.txt').toString().split('\n').map(Number)
people = input[0] // 설문조사에 참여한 사람 수
input.shift()
sum = input.reduce((sum, v) => sum + v , 0) // 투표 결과의 합
input = null
fs = null

/* 
	모두 홀수 이기 때문에 (n+1)/2 값이 과반수의 수가 됨
	(n+1)/2 <= sum 이면 과반수여서 cute임
*/

if((people+1)/2 <= sum){
	people = null
	sum = null
	console.log('Junhee is cute!')
}else{
	people = null
	sum = null
	console.log('Junhee is not cute!')
}

