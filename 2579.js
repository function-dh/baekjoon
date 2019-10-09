fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var stairNum = parseInt(input[0])
var dp = new Array  // i번째 계단 까지의 최댓값
var score = new Array // 계단 별 점수

// 계단은 한 번에 한 계단씩 또는 두 계단씩 오를 수 있다. 즉, 한 계단을 밟으면서 이어서 다음 계단이나, 다음 다음 계단으로 오를 수 있다.
// 연속된 세 개의 계단을 모두 밟아서는 안 된다. 단, 시작점은 계단에 포함되지 않는다.
// 마지막 도착 계단은 반드시 밟아야 한다.
// dp로 풀여야 함 - https://kwanghyuk.tistory.com/4 참고

// score배열에 각각의 점수를 넣어줌
for(var i = 0; i < stairNum; i++){
	score[i] = Number(input[i+1])
}

// dp배열에 -3을 해주기 때문에 0~2 배열값은 직접 지정해서 넣어줘야함
dp[0] = score[0] 
dp[1] = Math.max(score[0] + score[1], score[1])
dp[2] = Math.max(score[1] + score[2], score[0] + score[2])

for(var j = 3; j < stairNum; j++){
	dp[j] = Math.max(dp[j-2] + score[j], dp[j-3] + score[j-1] + score[j])
}

console.log(dp[stairNum-1])