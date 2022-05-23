import sys
input = sys.stdin.readline
m, n = map(int,input().split())

arr1 = list(map(int,input().split()))
arr2 = list(map(int,input().split()))

arr3 = arr1 + arr2
arr3 = sorted(arr3)
for _ in range(m+n):
    print(arr3[_],end = ' ')