/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); */

var input = process.argv
var a = parseInt(input[2])
var b = parseInt(input[3])
var c = parseInt(input[4])

// 두번째로 큰 정수 출력

if(a >= b && a >= c){
	if(b >= c){
		console.log(b)
	}else{
		console.log(c)
	}
}else if(a <= b && a <= c){
	if(b >= c){
		console.log(c)
	}else{
		console.log(b)
	}
}else if(a <= b && a >= c){
	console.log(a)
}else if(a >= b && a <= c){
	console.log(a)
}

