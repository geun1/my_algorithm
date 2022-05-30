n, kim, lim = map(int, input().split())
result = 0
while not (kim == lim):
    if kim % 2 == 0:
        kim /= 2
    else:
        kim = (kim+1)/2
    if lim % 2 == 0:
        lim /= 2
    else:
        lim = (lim+1)/2
    result += 1

print(result)