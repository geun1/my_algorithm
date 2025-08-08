from math import *
def time_cal(pos):
    pos_split = pos.split(":")
    m = int(pos_split[0])
    s = int(pos_split[1])
    if (s >= 60):
        # [num(s_m), num(s_s)] = [s/60, s % 60]
        s_m = floor(s/60)
        s_s = s% 60
    elif (s < 0):
        s_m = 0
        while(s < 0):
            s_m = s_m - 1
            s = s+60
        s_s = s
        # [num(s_m), num(s_s)] = []
    string = ""
    if (s_m+m < 10):
        string = "0" + str(s_m+m)
    else:
        string = str(s_m +m)
    string = string + ":" + str(s_s)
    return(string)

def time_ss(time):
    ss = 0
    mmss=time.split(":")
    ss = int(mmss[0])*60 + int(mmss[1])
    return(ss)

def time_mmss(ss):
    mm = floor(ss/60)
    sss = ss%60
    string = ""
    if (mm < 10):
        string = "0" + str(mm)
    else:
        string = str(mm)
    if (sss < 10):
        string = string + ":0" + str(sss)
    else:
        string = string + ":" + str(sss)
    return(string)

def solution(video_len, pos, op_start, op_end, commands):
    answer = ''
    video_len_ss = time_ss(video_len)
    pos_ss = time_ss(pos)
    op_start_ss = time_ss(op_start)
    op_end_ss = time_ss(op_end)
    print(video_len_ss, pos_ss, op_start_ss, op_end_ss)
    
    
    
    for i in commands:
        if (pos_ss >= op_start_ss and pos_ss <= op_end_ss):
            pos_ss = op_end_ss
        if (i == "prev"):
            pos_ss = pos_ss - 10
            if (pos_ss < 0):
                pos_ss = 0
        if (i == "next"):
            pos_ss = pos_ss + 10
            if (pos_ss > video_len_ss):
                pos_ss = video_len_ss
    if (pos_ss >= op_start_ss and pos_ss <= op_end_ss):
        pos_ss = op_end_ss    
    

    answer = time_mmss(pos_ss)
    return answer

# prev : 10초 전 
# next : 10초 후
# opening : op_start op_end 사이면 op_end로 이동
# commands : 사용자 입력 배열
# pos : 현재 위치 mm:ss 형식
# answer : mm:ss 형식
