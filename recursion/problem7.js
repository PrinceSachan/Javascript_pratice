// Check if the given String is Palindrome or not

// apporach 1
function checkForPalin(str) {
    let left = 0;
    let right = str.length - 1
    for(let i = 0; i < str.length / 2; i++){
        if(str[left].toLowerCase() == str[right].toLowerCase()){
            left++
            right--
        } else {
            return false
        }
        return true
    }
}

console.log(checkForPalin("Madam"))

// apporach 2
function checkForPalin2(str, i){
    if(i >= Math.floor(str.length / 2)) {
        return true
    }
    if(str[i].toLowerCase() === str[str.length - i - 1].toLowerCase()) {
        return checkForPalin2(str, i + 1)
    } else {
        return false
    }
    
}

console.log(checkForPalin2("ABCDCBA", 0))