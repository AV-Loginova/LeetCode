/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    //создаем пустой массив
    ans = [];
    //запускаем цикл, который повторится два раза
    for (let j = 0; j < 2; j++) {
        //запускаем цикл, который даст нам индексы для массива
       for (let i = 0; i < nums.length; i++) {
            //добавляем к нашему массиву все элементы из двух циклов
          ans.push(nums[i])
       }
    }
    return ans
 };