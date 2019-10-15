fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split("\n");
/* var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n"); */

var inputbox = input[0].split(' ')
var cardbox = input[1].split(' ') // 각각의 카드 점수
var num = parseInt(inputbox[0]) // N개의 카드
var score = parseInt(inputbox[1]) // M점수
var result = 0;

// N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.
// N개의 카드 중에 3장을 골라서 M이랑 가장 가까운 카드 3개를 뽑으면 됨

// n개중에 a를 순서 없이 뽑는 경우(경우의 수 순서없이 뽑기)
// 5개 중에 3개를 뽑는 경우면 5x4x3 / 3x2x1 = 10가지
for (var i = 0; i < num-2; i++){
	for(var j = i+1; j < num-1; j++){
		for(var k = j+1; k < num; k++){
			if(parseInt(cardbox[i]) + parseInt(cardbox[j]) + parseInt(cardbox[k]) <= score && score-(parseInt(cardbox[i]) + parseInt(cardbox[j]) + parseInt(cardbox[k])) < score-result){
				result = parseInt(cardbox[i]) + parseInt(cardbox[j]) + parseInt(cardbox[k])
			}
		}
	}
}

console.log(result)


