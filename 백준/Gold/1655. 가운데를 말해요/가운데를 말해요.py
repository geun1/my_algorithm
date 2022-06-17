import sys
import heapq
input = sys.stdin.readline

n = int(input())
left = []
right = []

for _ in range(n):
    num = int(input())

    if (len(left) == len(right)):
        heapq.heappush(left, -num)
    else:
        heapq.heappush(right, num)

    if (left and right and left[0] * -1 > right[0]):
        to_right = heapq.heappop(left)
        to_left = heapq.heappop(right)

        heapq.heappush(left, to_left*-1)
        heapq.heappush(right, to_right*-1)

    print(left[0]*-1)
