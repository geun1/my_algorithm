n = input()
lth = len(n)
result = 0
if (int(n) < 10):
    print(n)
else:
    result += (int(n)-(10**(lth-1))+1) * lth
    for i in range(lth-1):
        result += (9*(10 ** i))*(i+1)
    print(result)