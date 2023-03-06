function solution(today, terms, privacies) {
    var answer = [];
    terms_map = new Map();
    privacies_arr = [];

    const check_days = (day) => {
        let day_days = 0;
    const [year, month, days] = day.split(".").map(Number);
    day_days += (year-2000)*12*28;
    day_days += (month-1)*28;
    day_days += days;
        return (day_days);
}
    let today_days = check_days(today);
    terms.forEach((e)=> {
        terms_map[e.split(" ")[0]] = +e.split(" ")[1];
    });
    privacies.forEach((e)=> {
        privacies_arr.push(e.split(" "));
    });
    // console.log(`today_days = ${today_days}`);
    privacies_arr.forEach((e,idx)=> {
        let days = check_days(e[0]);
        let add_days = terms_map[e[1]]*28;
        if ((days+add_days) <= today_days) answer.push(idx+1);
    })

    return answer;
}