def solution(num_list):
    answer = 0
    answer2 = 0
    for i in range(len(num_list)):
        if (i % 2 == 0):
            answer = answer + num_list[i]
        else:
            answer2 = answer2 + num_list[i]
    return max(answer,answer2)