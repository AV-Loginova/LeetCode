/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
  //заводим два цикла для нахождения суммы target
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
          //когда первая сумма найдена, добавляем индексы в массив arr 
            if(i != j && (nums[i] + nums[j]) === target && arr.length <= 2){
                 arr.push(i, j)
                 return arr
            }
        }
    }
};
