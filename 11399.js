fs = require('fs');
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split('\n')
var peopleNum = input[0] // 사람 수
var min = input[1].split(' ').map(Number) // 각 인출하는 시간
var sum = 0; // 현재 까지의 시간의 합
var result = 0
min.sort((a,b) => a-b) // 오름차순 정렬

for(var i = 0; i < peopleNum; i++){
	sum += min[i]
	result += sum
}
console.log(result)