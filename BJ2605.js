/* const readline=require("readline");
const rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
let input = new Array;
var studentOrder = new Array;
var totalOrder = new Array;

rl.on('line', function (line) {
	input = line.split(' ').map((el) => el);
	var studentNum = input.length
	var ticketNum  = input
	
	for(var ticket=0; ticket<studentNum; ticket++){
		studentOrder[ticket] = ticket+1
		
		if(ticketNum[ticket]>0){
			totalOrder.splice(ticket-ticketNum[ticket], 0, studentOrder[ticket])
		}else{
			totalOrder.splice(ticket, 0, studentOrder[ticket])
		}
	}
	if(studentNum === 1){
		totalOrder[0,1] = 1
		totalOrder.pop()
	}else{
		totalOrder.pop()
	}
})

.on('close', function () {
	console.log(totalOrder);
    process.exit();
}); */

/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); */

// 학생의 수 만큼 표를 나눠줌 o
// 줄을 선 차례대로 학생들이 뽑은 번호가 주어져야해 o
// 숫자가 하나씩 증가하는 랜덤 값을 어떻게 구하지? random으로 구함 o
// 구한 랜덤값 만큼 배열이 이동해야함 0
// 입력이 안돼..

/* var input = process.argv
var studentNum = parseInt(input[2])

var studentOrder = new Array; // 줄선 학생
var totalOrder = new Array; // 최종 순서
var max = 0; // 줄선 학생수 - 1 까지
var min = 0; // 번호표 최소 번호


for(var ticket=0; ticket<studentNum; ticket++){
	var randomTicket = Math.floor(Math.random()*(max-min+1)) + min;
	max++
	studentOrder[ticket] = ticket+1

	if(randomTicket>0){
		totalOrder.splice(ticket-randomTicket, 0, studentOrder[ticket])
	}else{
		totalOrder.splice(ticket, 0, studentOrder[ticket])
	}
}
console.log(totalOrder) */

fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split("\n");

var studentNum = Number(input[0])
var ticketNum = input[1].split(' ').map(x=> parseInt(x));
var studentOrder = new Array; // 줄선 학생
var totalOrder = new Array; // 최종 순서

for(var ticket=0; ticket<studentNum; ticket++){
	studentOrder[ticket] = ticket+1

	if(ticketNum[ticket]>0){
		totalOrder.splice(ticket-ticketNum[ticket], 0, studentOrder[ticket])
	}else{
		totalOrder.splice(ticket, 0, studentOrder[ticket])
	}
}
console.log(totalOrder.join(' '))