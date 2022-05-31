import sys
input = sys.stdin.readline
d, k = map(int, input().split())


def fibo(n):
    if n < 2:
        return(n)
    return(fibo(n-1)+fibo(n-2))

x = fibo(d-2)
y = fibo(d-1)
for a in range(1, 100000):
    if (k-(x*a))%y == 0: 
        print(a, (k-(x*a))//y, sep="\n")
        break
