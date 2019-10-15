fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split(' ').map(Number)
var a = input[0]
var b = input[1]
var v = input[2]
var day = 0

day = (v-a) / (a-b)
console.log(Math.ceil(day)+1)




/* while(v >= 0){
	v -= a
	if(v <= 0){
		console.log(day+1)
		return false
	} 
	v += b
	day++
} 
 */