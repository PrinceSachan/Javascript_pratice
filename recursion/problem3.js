// Print N to 1 using Recursion

//recursion
function problem3a(i,n) {
    if(i>n){
        return 
    } else {
        console.log(n)
        problem3a(i, n-1)
    }
}

problem3a(1,4)

// backtracking
function problem3b(i, n) {
    if (n<1) return
    else{
        console.log(n);
        problem3a(i, n-1)
    }
}

problem3b(1,4)