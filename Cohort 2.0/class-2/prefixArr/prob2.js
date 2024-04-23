let n = 5;
let m = 3;
let q = [[2, 4], [1, 3], [1, 2]];

function operant(m, q){
    let max = 0;
    let arr = [0, 0, 0, 0, 0]

    for (let i = 0; i < m; i++){
        // define query for operant a and b
        let a = q[i][0]
        let b = q[i][1]

        // add 100 at the a postion and -100 at the b position
        arr[a - 1] += 100;
        arr[b] -= 100
    }

    for (let i = 1; i < n; i++){
        arr[i] += arr[i-1]

        // keep track of max value
        max = Math.max(max, arr[i])
    }
    return max
}

console.log(operant(m, q))