fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var oxNum = parseInt(input[0])
var ox = new Array
var oNum = 0;
var result = 0;

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

// ox배열에 ox의 값을 받아줌
for(var i = 0; i < oxNum; i++){
	ox[i] = input[i+1]
	
	// 첫번째 문자가 O일때 값을 하나 더해줌
	if(ox[i][0] === 'O'){
		result += 1
	}
	// 연속되는 O을 확인하려고 1부터 시작, ox의 길이만큼 반복
	for(var j = 1; j < ox[i].length; j++){
		// 이전 문자가 O인지 X인지 체크 후 연속되면 값을 1씩 증가시킴
		if(ox[i][j-1] === 'O'){
			oNum += 1
		}
		// O이면 1점(기본점수) + 연속된 증가값(oNum)을 같이 더해줌
		if(ox[i][j] === 'O'){
			result += 1+oNum
		}else{
			oNum = 0  // x면 연속 점수 초기화
		}
	}
	console.log(result)
	result = 0;
	oNum = 0;
}