fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var result = new Array
var sumNum = 0
// 첫째 줄부터 셋째 줄까지 한 줄에 하나씩 결과
// 도는 A, 개는 B, 걸은 C, 윷은 D, 모는 E로 출력한다.

// 배 = 0 등 = 1, 배가 1이면 도(A)
for(var i = 0; i < input.length; i++){
	result[i] = input[i].split(' ')

	for(var j = 0; j < 4; j++){
		sumNum += parseInt(result[i][j])
	}

	if(sumNum === 0){
		console.log('D')
	}else if(sumNum === 1){
		console.log('C')
	}else if(sumNum === 2){
		console.log('B')
	}else if(sumNum === 3){
		console.log('A')
	}else if(sumNum === 4){
		console.log('E')
	}
	sumNum = 0;
}
