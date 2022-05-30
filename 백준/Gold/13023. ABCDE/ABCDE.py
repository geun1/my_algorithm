import sys
input = sys.stdin.readline
n, m = map(int, input().split())
graph = [[] for i in range(n)]
visited = [False] * n

for _ in range(m):
    a, b = map(int, input().rstrip().split())
    graph[a].append(b)
    graph[b].append(a)


def dfs(index, depth):
    if depth == 4:
        print(1)
        exit()
    for i in graph[index]:
        if not visited[i]:
            visited[i] = True
            dfs(i, depth + 1)
            visited[i] = False


for target in range(n):
    visited[target] = True
    dfs(target, 0)
    visited[target] = False

print(0)