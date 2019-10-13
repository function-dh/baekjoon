fs = require('fs'); 
var input = fs.readFileSync('/Users/kimdonghyun/git/baekjoon/test.txt').toString().split("\n");

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
var num = input[0].split(' ') 
var month = parseInt(num[0])
var day = parseInt(num[1])

var today = new Date('2007-'+month+'-'+day).getDay();
console.log(week[today])