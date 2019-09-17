/* var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' '); */

var input = process.argv
var num1 = parseInt(input[2])
var num2 = parseInt(input[3])

var n1 = num1*(Math.floor(num2%10)) // 십의 자리 이상을 빼서 일의 자리를 구함
var n2 = num1*(Math.floor((num2%100)/10)) // 백의 자리를 나눈 나머지 즉 십의 자리부터 구해짐
var n3 = num1*(Math.floor(num2/100)) // 백의 자리를 구함, 소수점 까지 나누기 때문에 Math를 써서 소수점 아래로 내림
var n4 = n1+n2*10+n3*100

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
