// frequent character

function countChar(str){
    let strArr = str.split('');
    let n = strArr.length;
    let i = 0;
    while(i<n){
        let first_index = strArr.indexOf(strArr[i]);
        let last_index = strArr.lastIndexOf(strArr[i]);
        i = last_index

        // count the frequency
        let eleFreq = last_index - first_index + 1;
        console.log(strArr[i], eleFreq);
        i++ 
    }
}

countChar('hello')