// 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 
// 나머지 한 점의 좌표를 구하려고 합니다. 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때, 
// 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요. 
// 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.

// 제한사항
// v는 세 점의 좌표가 들어있는 2차원 배열입니다.
// v의 각 원소는 점의 좌표를 나타내며, 좌표는 [x축 좌표, y축 좌표] 순으로 주어집니다.
// 좌표값은 1 이상 10억 이하의 자연수입니다.
// 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 [x축 좌표, y축 좌표] 순으로 담아 return 해주세요.

// 입출력 예
// v	result
// [[1, 4], [3, 4], [3, 10]]	[1, 10]
// [[1, 1], [2, 2], [1, 2]]	[2, 1]

// 입출력 예 설명
// 입출력 예 #1
// 세 점이 [1, 4], [3, 4], [3, 10] 위치에 있을 때, [1, 10]에 점이 위치하면 직사각형이 됩니다.

// 입출력 예 #2
// 세 점이 [1, 1], [2, 2], [1, 2] 위치에 있을 때, [2, 1]에 점이 위치하면 직사각형이 됩니다.

function solution(v) {
	let rectPoint = v
	let firstNumArr = []
	let lastNumArr = []
	// 좌표를 찍어보면 알겠지만 중복되지 않은 숫자가 각각 x,y축의 좌표가 됨 (사각형이기 때문에)
	// for문으로 각각 x축, y축 숫자를 분리함
	for(let i = 0; i < v.length; i++){
		for(let j = 0; j < 2; j++){
			if(j === 0){
				firstNumArr.push(rectPoint[i][j])
			}else{
				lastNumArr.push(rectPoint[i][j])
			}
		}
	}
	// filter를 써서 중복체크(index가 다르면 중복됐다는 의미)
	// filter가 새 배열로 반환 되기 때문에 join과 parseInt로 숫자로 바꿈 
	const FIRSTNUM = parseInt(firstNumArr.filter((x,index, arr) => arr.indexOf(x) !== index).join())
	const LASTNUM = parseInt(lastNumArr.filter((y,index, arr) => arr.indexOf(y) !== index).join())
	
	// 사각형 이기 때문에 중복된 숫자 2개를 빼줘야함
	for(let i = 0; i < 2; i++){
		firstNumArr.splice(firstNumArr.indexOf(FIRSTNUM),1)
		lastNumArr.splice(lastNumArr.indexOf(LASTNUM),1)
	}

	// 중복된 숫자를 제거한 숫자를 합쳐 [x, y]축 배열값을 만듬
	Array.prototype.push.apply(firstNumArr, lastNumArr)
	const ANSWER = firstNumArr
	console.log(ANSWER)
}
solution([[1,4],[3,4],[3,10]])


