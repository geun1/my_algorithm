# import sys
# input = sys.stdin.readline
# def fibonacci(n):
#     if (n == 0):
#         return (0)
#     elif (n == 1):
#         return (1)
#     else:
#         return (fibonacci(n-1)+ fibonacci(n-2))

# num = int(input())
# for _ in range(num):
#     input_num = int(input())
#     if (input_num == 0):
#         print("1 0")
#     elif (input_num == 1):
#         print("0 1")
#     else:
#         print(str(fibonacci(input_num-1))+ ' '+ str(fibonacci(input_num)))

zero = [1,0,1]
one = [0,1,1]

def fibonacci(n):
    longest_len = len(one)
    if longest_len <=n:
        for i in range(longest_len, n+1):
            zero.append(zero[i-2]+ zero[i-1])
            one.append(one[i-2]+ one[i-1])
    print(str(zero[n]) + ' ' + str(one[n]))

a = int(input())

for _ in range(a):
    fibonacci(int(input()))