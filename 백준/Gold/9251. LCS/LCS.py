import sys
input = sys.stdin.readline

line1 = input()
line2 = input()
table = [[0 for _ in range(len(line1))]for _ in range(len(line2))]
for i in range(1, len(line2)):
    for j in range(1, len(line1)):
        if (line1[j-1] == line2[i-1]):
            table[i][j] = table[i-1][j-1]+1
        else:
            table[i][j] = max(table[i-1][j], table[i][j-1])
print(table[-1][-1])