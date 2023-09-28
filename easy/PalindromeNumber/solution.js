var isPalindrome = function(x) {
    //создаем массив с зеркальными элементами (числа массива Х превращаем в строки, делим, разворачиваем и склеиваем обратно)
    let reversed = x.toString().split('').reverse().join('')
    //превращаем оригинальный массив в строку
    let arr = x.toString()
    //при сравнении строк вернется true, если они равны и false, если нет
    return arr === reversed
};
