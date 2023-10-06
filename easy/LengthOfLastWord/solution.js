var lengthOfLastWord = function(s) {
    //создаем новый массив, в котором строку поделят по пробелам
    let newArr = s.split(' ');
    //создаем условие для массивов с одним элементом
    if(s.length == 1) {
        return newArr.length
    } 
    //создаем цикл с условием внутри для поиска последнего не пустого элемента в массиве
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[newArr.length - (i + 1)] != '') {
            console.log(newArr.length)
            return newArr[newArr.length - (i + 1)].length
        } 
    }
}