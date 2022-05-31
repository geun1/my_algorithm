import sys
input = sys.stdin.readline
n = int(input())
meeting = []
result = 0
ending = 0

for i in range(n):
    a, b = map(int, input().split())
    meeting.append((a, b))
meeting = sorted(meeting, key=lambda x: (x[1], x[0]))
for _ in meeting:
    if _[0] >= ending:
        result += 1
        ending = _[1]
print(result)