/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    let bin = '';
    for(let i = 0; i < nums.length; i++) {
        //в переменную записываем строку с бинарным числом индекса и убираем из нее нули
        bin = i.toString(2).replaceAll('0', '')
        //если длина получившейся строки равна k то складываем числа под этими индексами
        if(bin.length === k) {
            sum = sum + nums[i]
        }
    }
    return sum
};