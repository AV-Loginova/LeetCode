/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    //находим самое большое число в массиве
    let maxCandies = Math.max(...candies)
    candies.forEach(candy => {
        //узнаем сумму каждой конфеты с лишними конфетами
        let sum = candy + extraCandies
        //создаем условие, целью которого выявить будет ли сумма конфет ребенка и лишних конфет больше самого большого количества конфет у одного из детей
        sum >= maxCandies ? result.push(true) : result.push(false)
    })
    return result
}