fs = require('fs');
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split('\n').map(Number)

var n = input[0] // 학생 수
input.shift()
var candySum = input.reduce((sum,v) => sum+v) // 두 학생의 캔디 수 총합
var candyEach = input.map(v => v) // 두 학생의 캔디 수 각각
var all = candySum/2 // 실제 캔디 수 총합

for(var i = 0; i < n; i++){
	var result = 0
	for (var j = 0; j < n; j += 2){
		result += candyEach[(i + j) % n];
		console.log(i,j,(i + j) % n)
	}
	console.log(result,all)
	console.log(result - all)
}



/* fs = require('fs');
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split('\n').map(Number)

var n = input[0] // 학생 수
input.shift()
var candySum = input.reduce((sum,v) => sum+v) // 두 학생의 캔디 수 총합
var candyEach = input.map(v => v) // 두 학생의 캔디 수 각각
var all = candySum/2 // 실제 캔디 수 총합
var candy = [] // 실제 캔디 수
console.log('총합', candyEach)

for(var i = 0; i < n; i++){
	if(5 <= n){
		candy[i] = all-(candyEach[i]+candyEach[i+2])
		if(i+2 >= n){
			candy[i] = all-(candyEach[i]+candyEach[i-3])
		}
	}else{
		candy[i] = all-(candyEach[i]) // 3이하는 공식에 맞지 않음
	}
}
candy.push(candy[0])
candy.shift()
for(var j = 0; j < candy.length; j++){
	console.log(parseInt(candy[j]))
} */

/* 
수학 공식
all-(1+3) = 5번째 숫자
all-(2+4) = 1번째 숫자
all-(3+5) = 2번째 숫자
all-(4+1) = 3번째 숫자
all-(5+2) = 4번째 숫자 
*/