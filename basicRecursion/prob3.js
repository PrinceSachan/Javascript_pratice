// Problem: Print from N to 1 using Recursion

function print(i, n){
    if(n>=i){
        console.log(n)
        print(i, n-1)
    } else {
        return
    }
}

print(1,6)