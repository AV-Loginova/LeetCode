/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0;
    //заводим два цикла, чтобы сравнить элементы массива друг с другом
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            //сумма элементов и их индекс соответствуют условиям, то увеличиваем счетчик на 1
            if(i < j && nums[i] + nums[j] < target) {
                count++
            }
        }
    }
    return count
};