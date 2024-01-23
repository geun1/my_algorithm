function solution(edges) {
        let myMap = new Map();

    for (let [a, b] of edges) {
        if (!myMap.has(a)) myMap.set(a, [0, 0]);
        if (!myMap.has(b)) myMap.set(b, [0, 0]);

        myMap.get(a)[0] += 1;
        myMap.get(b)[1] += 1;
    }
    // console.log(myMap);

    let result = [0, 0, 0, 0];

    for (let [key, value] of myMap) {
        // console.log(result)
        if (value[0] >= 2 && value[1] === 0) {
            result[0] = key;
        } else if (value[0] === 0 && value[1] >= 1) {
            result[2] += 1;
        } else if (value[0] === 2 && value[1] >= 2) {
            result[3] += 1;
        }
    }


    if (myMap.has(result[0])) {
        result[1] = myMap.get(result[0])[0] - result[2] - result[3];
    } else {
        result[1] = 0; 
    }
    // console.log(result)
    return (result);
}