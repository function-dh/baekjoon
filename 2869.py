""" 노드랑 방식은 똑같은데 속도차이가.. """
import math
a, b, v = map(int, input().split())
day = (v-a) / (a-b)
print(math.ceil(day)+1)