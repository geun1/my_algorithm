def solution(myString, pat):
    if (myString.upper().find(pat.upper()) == -1):
        return 0
    else:
        return 1