def solution(num_list, n):
    answer = num_list[n:]
    for i in range(n):
        answer.append(num_list[i])
    return answer