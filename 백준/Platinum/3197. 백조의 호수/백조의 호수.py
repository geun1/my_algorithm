import sys
from collections import deque
input = sys.stdin.readline
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]


def bfs():
    while sq:
        x, y = sq.popleft()
        if x == x2 and y == y2:
            return 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < row and 0 <= ny < column:
                if not table[nx][ny]:
                    if orginal[nx][ny] == '.':
                        sq.append([nx, ny])
                    else:
                        sq_temp.append([nx, ny])
                    table[nx][ny] = 1
    return 0


def melt():
    while wq:
        x, y = wq.popleft()
        if orginal[x][y] == 'X':
            orginal[x][y] = '.'
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < row and 0 <= ny < column:
                if not water_table[nx][ny]:
                    if orginal[nx][ny] == 'X':
                        wq_temp.append([nx, ny])
                    else:
                        wq.append([nx, ny])
                    water_table[nx][ny] = 1


row, column = map(int, input().split())
table = [[0]*column for _ in range(row)]
water_table = [[0]*column for _ in range(row)]

orginal = []
swan = []
sq, sq_temp, wq, wq_temp = deque(), deque(), deque(), deque()
for i in range(row):
    row_line = list(input().strip())
    orginal.append(row_line)
    for j, _ in enumerate(row_line):
        if orginal[i][j] == 'L':
            swan.extend([i, j])
            wq.append([i, j])
        elif orginal[i][j] == '.':
            water_table[i][j] = 1
            wq.append([i, j])

x1, y1, x2, y2 = swan
sq.append([x1, y1])
orginal[x1][y1], orginal[x2][y2], table[x1][y1] = '.', '.', 1
cnt = 0

while True:
    melt()
    if bfs():
        print(cnt)
        break
    sq, wq = sq_temp, wq_temp
    sq_temp, wq_temp = deque(), deque()
    cnt += 1