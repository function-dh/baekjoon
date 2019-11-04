people = int(input()) 
voteList = [0]*people

for v in range(people):
	voteList[v] = int(input())

""" 모두 홀수 이기 때문에 (n+1)/2 값이 과반수의 수가 됨
(n+1)/2 <= sum 이면 과반수여서 cute임 """
if((people+1)/2 <= sum(voteList)):
	print('Junhee is cute!')
else:
	print('Junhee is not cute!')
