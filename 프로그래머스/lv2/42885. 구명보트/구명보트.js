function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=> a-b);
    
    let i = 0;
    num = people.length;
    for (let n = num-1; n >= 0; n--){
        if (people[n] + people[i] > limit) answer++;
        else {
            i++;
            answer++;
        }
        if (n == i || n == i-1) break;
    }
    return answer;
}