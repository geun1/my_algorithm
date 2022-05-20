n,m = map(int,input().split())
result =[]
def backtracking():
    if (len(result) == m):
        for _ in range(m):
            print(result[_],end=' ')
        print('')
    else:
        for k in range(1,n+1):
            if  k not in result:
                result.append(k)
                backtracking()
                result.pop()
backtracking()