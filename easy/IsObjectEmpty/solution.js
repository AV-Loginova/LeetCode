var isEmpty = function(obj) {
    //созаем цикл в условии которого узнаем равна ли нулю длина массива, состоящего из ключей объекта
    if (Object.keys(obj).length == 0) {
        return true
    } else {
        return false
    }
};
