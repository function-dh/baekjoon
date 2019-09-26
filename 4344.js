fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split("\n");

var c = parseInt(input[0]);
var testNum = new Array;
var overAverage = 0;
var average = 0;
var result = 0;

for(var i=0; i<c; i++){
	testNum[i] = input[i+1].split(' ').map(x=> parseInt(x));
	var testSum = 0;
	var peopleNum = testNum[i].shift()
	
	for(var j=0; j<peopleNum; j++){
		testSum += testNum[i][j]
	}
	average = testSum/peopleNum

	for(var n=0; n<peopleNum; n++){
		if(average<testNum[i][n]){
			overAverage += 1
		}
	}
	result = overAverage/peopleNum*100
	console.log(result.toFixed(3)+'%')
	overAverage = 0
}

