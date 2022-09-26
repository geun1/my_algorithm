n = int(input())
arr = []
result = []
for _ in range(n):
    arr.append(int(input()))

arr = sorted(arr)
for i in range(n):
    result.append(arr[i]*(n-i))
print(max(result))