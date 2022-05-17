num = int(input())
stack = []
result=[]
flag = True
a = 1

for _ in range(num):
    pop_num = int(input())
    while (a <= pop_num):
        stack.append(a)
        result.append('+')
        a += 1
    if stack[-1] == pop_num:
        stack.pop()
        result.append('-')
    else:
        flag = False
if flag == False:
    print('NO')
else:
    for i in result:
        print(i)