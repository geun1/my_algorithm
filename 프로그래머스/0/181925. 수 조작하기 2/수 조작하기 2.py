def solution(numLog):
    answer = ''
    for i in range(len(numLog)-1):
        now = numLog[i]
        next = numLog[i+1]
        if (next-now == 1):
            answer = answer+"w"
        elif (next-now == -1):
            answer = answer+'s'
        elif (next-now == 10):
            answer = answer+'d'
        elif (next-now == -10):
            answer = answer+'a'
    return answer