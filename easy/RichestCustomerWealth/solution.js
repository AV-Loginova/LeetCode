/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sumMax = [];
    //зобрабатываем элементы массива 
    for(let i = 0; i < accounts.length; i++) {
        //заводим новую переменную для записи в нее суммы элементов массивов в массиве
            let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum = sum + accounts[i][j]
        }
        //добавляем в новый массив суммы массивов
        sumMax.push(sum) 
    }
    //возвращаем самую крупную сумму
    return Math.max(...sumMax)
};