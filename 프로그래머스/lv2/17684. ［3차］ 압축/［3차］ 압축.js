function solution(msg) {
    var answer = [];
    // const dict = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const dict  = [];
    const  msg_arr = msg.split("");

    let i = 0;
    while (1) {
        let w = msg_arr[i];
    let c = msg_arr[i+1];
        if (i+1 > msg_arr.length) break;
    
    while(dict.includes(w+c)) {
        w += c;
        i++;
        c = msg_arr[i+1];
    }
        if (w.length === 1) answer.push(w.charCodeAt(0)-64)
        else (answer.push(27+dict.indexOf(w)))
    dict.push(w+c);
        i++;
    }
    // console.table(dict)
    
    return answer;
}