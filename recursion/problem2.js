// Print 1 to N using Recursion
// Since in this problem, there is no global variable that can be incremented each time we call a function, how can we keep a track of the number of integers being printed on the output screen?


// recursion
function problem2a(i, n){
    if(i > n) {
        return
    } else {
        console.log(i);
        i++
        problem2a(i, n)
    }
}

problem2a(1,4)


// backtracking
function problem2b(i, n){
    if(i<1){
        return
    } else {
        problem2b(i-1, n)
        console.log(i)
    }
}

problem2b(4, 4);
