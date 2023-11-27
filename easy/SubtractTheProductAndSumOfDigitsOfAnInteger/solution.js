/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let mult = 1;
    let sum = 0;
    //создаем массив из цифр n
    let arr = Array.from(String(n), Number)
    //записываем в переменные сумму и произведение цифр числа n
    for(let i = 0; i < arr.length; i++) {
        mult = mult * arr[i]
        sum = sum + arr[i]
    }
    return mult - sum
};