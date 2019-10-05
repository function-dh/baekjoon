fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var tel = input[0]
var telNum = 0

// 첫째 줄에 알파벳 대문자로 이루어진 단어가 주어진다. 단어는 2글자~15글자로 이루어져 있다(o).
// 알파벳을 숫자로 치환 해야함
// 치환된 숫자 +1 = 시간

//단어 2~15글자만 실행
if(2 <= tel.length <= 15){
	for(var i=0; i<tel.length; i++){
		if(tel[i]==='A' || tel[i]==='B' || tel[i]==='C'){
			telNum += 2
		}else if(tel[i]==='D' || tel[i]==='E' || tel[i]==='F'){
			telNum += 3
		}else if(tel[i]==='G' || tel[i]==='H' || tel[i]==='I'){
			telNum += 4
		}else if(tel[i]==='J' || tel[i]==='K' || tel[i]==='L'){
			telNum += 5
		}else if(tel[i]==='M' || tel[i]==='N' || tel[i]==='O'){
			telNum += 6
		}else if(tel[i]==='P' || tel[i]==='Q' || tel[i]==='R' || tel[i]==='S'){
			telNum += 7
		}else if(tel[i]==='T' || tel[i]==='U' || tel[i]==='V'){
			telNum += 8
		}else if(tel[i]==='W' || tel[i]==='X' || tel[i]==='Y' || tel[i]==='Z'){
			telNum += 9
		}
	}
	console.log(telNum+tel.length)
}