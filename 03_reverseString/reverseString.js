const reverseString = function(string) {
    let tmp = '';
    let n = 0;
    console.log(string.length)
    for (let i = string.length - 1; i >= 0; i--){
        tmp += string[i]
        n++
    }
    return tmp
};

console.log(reverseString('hi'))
// Do not edit below this line
module.exports = reverseString;
