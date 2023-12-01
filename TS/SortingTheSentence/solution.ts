function sortSentence(s: string): string {
    //заводим пустой массив 
    let arr:string[] = [];
    //заводим массив, в который заносим строку, разделенную по пробелам 
    let strArr:string[] = s.split(' ')
    //заводим цикл, в котором проходим по каждому элементу массива страрр
    for(let i of strArr) {
        //достаем цифру из каждого слова
        let index:number = parseInt(i.charAt(i.length-1)) - 1;
        //вырезаем цифру из слова и добавляем в пустой массив по индексу
        arr[index] = i.slice(0, i.length - 1)
    }
    //формируем строку из массива по пробелам
    return arr.join(' ')
};
