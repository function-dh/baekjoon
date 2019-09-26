/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); */

var input = process.argv
var h = parseInt(input[2])
var m = parseInt(input[3])
var lateNum = 45;
var calM = 0;

// -45분을 해야해 (h는 0~23), (m은 0~59)

if(23 >= h && h >= 0 && 59 >= m && m >= 0){
	if(m < 45){
		calM = m-lateNum
		if(h == 0){
			console.log(23,calM+60)
		}else{
			console.log(h-1,calM+60)
		}
	}else{
		calM = m-lateNum
		console.log(h,calM)
	}
}