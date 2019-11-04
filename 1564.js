fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split(' ').map(Number)
var num = 1; // 팩토리얼 계산 값
var facNum = [] // 팩토리얼 값을 각각 담은 배열
var count = 0 // 0의 반복 갯수

// 팩토리얼 값을 구함
for(var i=2; i <= input; i++){
	num *= i;
}

// 뒷자리 5개를 구하기 위해 뒤집음
facNum = num.toString().split('').map(Number)
facNum.reverse()
console.log(num)
// 0이 아닌 뒤 5자리 구하기 위해 while문
var j = 0
while(0 === facNum[j]){
	j++
	count++ 
}
/* count 된 수 만큼 0을 자르고 
+5를 해서 slice된 부분부터 5자리를 자른다
그후 다시 reverse해서 원래 상태로 돌린다
join으로 배열을 합친다 */
console.log(facNum.slice(count,count+5).reverse().join(''))