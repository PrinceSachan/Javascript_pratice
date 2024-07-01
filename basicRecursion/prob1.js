// Problem: Print your Name N times using recursion

function print(i, n){
    if(i <= n){
        console.log('Prince');
        print(i+1, n)
    } else {
        return
    }
}

print(1, 4)