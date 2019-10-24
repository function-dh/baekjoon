fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split('\n')
var sentence = input
var cipher = []

for(var i = 0; i < sentence.length; i++){
	cipher[i] = ''
	for(var j = sentence[i].length-1; j >= 0; j--){
		cipher[i] += sentence[i][j]
	}
	if(cipher[i] === 'DNE'){
		break
	}
	console.log(cipher[i])
}