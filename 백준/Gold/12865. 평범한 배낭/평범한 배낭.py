import sys
input = sys.stdin.readline

num, jun_weight = map(int, input().split())
dp = [[0 for _ in range(jun_weight+1)] for _ in range(num+1)]

for i in range(1, num+1):
    weight, value = map(int, input().split())
    for j in range(1, jun_weight+1):
        if (weight > j):
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight]+value)
print(dp[-1][-1])
