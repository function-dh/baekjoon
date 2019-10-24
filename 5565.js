fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split('\n').map(Number)
var totalPrice = input[0]
var bookPrice = input.map(v => v)
bookPrice.shift()
var sum = bookPrice.reduce((total, price) => total + price , 0)
console.log(totalPrice-sum)

/* 
*map
배열.map((요소, 인덱스, 배열) => {
	return 요소 
});

var bookPrice = input.map(function(v){
	return v
}) 

*reduce
배열.reduce((누적값, 현잿값, 인덱스, 요소) => { 
	return 결과 
}, 초깃값);
*/