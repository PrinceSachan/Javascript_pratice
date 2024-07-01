// Problem: Print from 1 to N using Recursion

function print(i, n){
    if(i<=n){
        console.log(i)
        print(i+1, n)
    } else {
        return
    }
}

print(1,6)