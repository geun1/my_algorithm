import sys
input = sys.stdin.readline
N = int(input())
table = [list(map(int, input().split())) for i in range(N)]
dp_table = [[0]*N for i in range(N)]
dp_table[0][0] = 1
for i in range(N):
    for j in range(N):
        if i == N-1 and j == N-1:
            print(dp_table[N-1][N-1])
            quit()
        if (table[i][j]+j < N):
            dp_table[i][j+table[i][j]] += dp_table[i][j]
        if (table[i][j]+i < N):
            dp_table[i+table[i][j]][j] += dp_table[i][j]