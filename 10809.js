fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var txt = input[0]

// 첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.(o)
// 단어에 포함되어 있지 않다면 -1을 출력 , 0,1 순서로 위치
// 알파벳이 해당 위치에 (26자리), 처음 등장 위치가 출력 되어야 함

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var result = ''

if(txt.length <=100){
	for (var i = 0; i < txt.length; i++) {
		for (var j = 0; j < alphabet.length; j++) {
			if (txt[i] === alphabet[j]) {
				alphabet[j] = i;
			} 
		}
	}
	for (var k = 0; k < alphabet.length; k++) {
		if (typeof(alphabet[k]) == "string") {
			alphabet[k] = -1;
		}
		result += alphabet[k]+' '
	}
	console.log(result)
}

// 모범 답안
// const data = require("fs").readFileSync("/dev/stdin", "utf8").toString().trim()
// let str = ""
// for(let i = 97; i < 123; i++){
//   let char = String.fromCharCode(i)
//   str += data.indexOf(char) + " ";
// }
// console.log(str)