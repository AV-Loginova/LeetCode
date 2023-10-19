var shuffle = function(nums, n) {
    let arr = [];
    //запускаем цикл для занесения в пустой массив новых элементов, каждую итерацию в массив будут занесены по индексу элемент с начала массива и с середины
    for(let i = 0; i < n; i++) {
        arr.push(nums[i])
        arr.push(nums[n + i])
    }    
    return arr
};