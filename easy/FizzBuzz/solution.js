var fizzBuzz = function(n) {
    let answer = [];
    for(let i = 1; i < n + 1; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            answer.push('FizzBuzz')
        } else if(i % 3 == 0) {
            answer.push('Fizz')
        } else if (i % 5 == 0) {
            answer.push('Buzz')
        } else {
            i = i.toString()
            answer.push(i)
        }
    }
    return answer
};