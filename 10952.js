fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");
var num = input // 보기 쉽게

for(var i=0; i<num.length; i++){
	var numArray = num[i].split(' ')
	var a = parseInt(numArray[0])
	var b = parseInt(numArray[1])

	if(0 < a && b < 10){
		var result = a+b
	
		if(i<num.length-1){
			console.log(result)
		}
	}
}