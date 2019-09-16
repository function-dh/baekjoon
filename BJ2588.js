/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); */

var input = process.argv
var input1 = input[2]
var input2 = input[3]

var n1 = Math.floor(input2/100) // 백의 자리를 구함
var n2 = Math.floor((input2%100)/10) // 백의 자리를 나눈 나머지 즉 십의 자리부터 구해짐
var n3 = Math.floor((input2%10)/1) // 십의 자리 이상을 빼서 일의 자리를 구함

var cal1 = input1*n3 
var cal2 = input1*n2 
var cal3 = input1*n1 
var cal4 = input1*input2
console.log(cal1, cal2, cal3, cal4)