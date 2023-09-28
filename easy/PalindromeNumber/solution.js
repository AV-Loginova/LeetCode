var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('')
    let arr = x.toString()
    return arr === reversed
};