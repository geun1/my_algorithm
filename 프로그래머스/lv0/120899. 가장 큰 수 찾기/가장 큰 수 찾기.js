function solution(array) {
    var answer = [];
    let max = 0;
    let i = -1;
    array.forEach((e,idx)=>{
    if (e > max) {
        max = e;
        i = idx;
    }
    })
    answer.push(max,i)
    return answer;
}