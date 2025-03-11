def solution(my_strings, parts):
    length = len(my_strings)
    answer = ''
    for i in range(length):
        [s,e] = parts[i]
        answer = answer+my_strings[i][s:e+1]
    return answer