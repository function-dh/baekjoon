fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split('\n')
var price = parseInt(input) // 물건의 가격
var change = 1000 - price // 거스름돈
var coin = [500, 100, 50, 10, 5, 1] // 거스름돈의 종류
var count = 0;

for(var i = 0; i < coin.length; i++){
	if(change / coin[i] >= 1){
		count += Math.floor(change / coin[i])
		change %= coin[i]
	}
}
console.log(count)