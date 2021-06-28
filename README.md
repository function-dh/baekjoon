# baekjoon 알고리즘 공부
개인 알고리즘 스터디 정리

### 파일을 불러와서 받는 법
- 원하는 경로에 txt 파일을 만들어 입력 값을 받을 수 있음
``` jsx
// 백준 node.js input 값 받아오기
fs = require('fs'); 
var input = fs.readFileSync('/study/baekjoon/test.txt').toString().split('\n')
```
       
### 콘솔 창 입력
- 0,1 배열에 파일 정보가 담기기 때문에 2번 index부터 사용 가능
``` jsx
// console.log(process.argv[0]);    // NODE_PATH\node.exe
// console.log(process.argv[1]);    // ARGUMENT.JS_PATH\arguments.js
// console.log(process.argv[2]);    // test1
var input = process.argv[2]
```
