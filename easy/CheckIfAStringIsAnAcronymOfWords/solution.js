/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let lenW = words.length
    let lenS = s.length
    //создаем условие на случай если количество слов количество букв в акрониме не равны
    if(lenS > lenW || lenW > lenS) {
        return false
    } 
    //запускаем цикл в котором сравниваем первую букву каждой строки в массиве слов и каждый символ в массиве s
    for(let i = 0; i < lenW; i++){
        if(words[i][0] != s[i]) {
            return false
        } 
    }
    return true
};