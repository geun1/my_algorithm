import sys
input = sys.stdin.readline
a, b = map(int, input().split())
c = 1000000007
lst = [1]
for i in range(1, a+1):
    lst.append((lst[-1]*i) % c)


def square(n, k):
    if k == 0:
        return 1
    elif k == 1:
        return n

    tmp = square(n, k//2)
    if k % 2:
        return tmp * tmp * n % c
    else:
        return tmp * tmp % c


top = lst[a]
bot = lst[a-b]*lst[b] % c
answer = top*square(bot, c-2) % c
print(answer)