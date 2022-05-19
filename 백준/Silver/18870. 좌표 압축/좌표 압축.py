import sys
input = sys.stdin.readline
n = int(input())
arr = list(map(int,input().split()))
index_only_one_arr = sorted(set(arr))
result = []
dic = {index_only_one_arr[i]:i for i in range (len(index_only_one_arr))}
for i in arr:
    print(dic[i],end=' ')