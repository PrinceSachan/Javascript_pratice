// Print Name N times using Recursion
// Since in this problem, there is no count that can be incremented each time we call a function, how can we keep a track of how many times we have printed the name?

function problem1(i, n) {
    if(i > n){
        return
    } else {
        console.log("recursion")
        i++;
        problem1(i, n)
    }
}

problem1(1, 4)