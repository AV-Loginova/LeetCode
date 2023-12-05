function removeOuterParentheses(s: string): string {
    //заводим счетчик и пустую строку для ответа
    let count: number = 0;
    let answer: string = '';
    //заводим цикл по каждому символу из строки
    for(let sym of s) {
        //если символ - ( и счетчик не равен нулю, добавляем символ в ответ
        if(sym === "(") {
            if(count != 0) {
                answer = answer + sym
            }
            //увеличиваем счетчик
            count++
        } else {
            //уменьшаем счетчик(если попали сюда, значит скобка закрывающая)
            count--
            //если счетчик не равен одному, записываем в ответ
            if(count != 0){
                answer = answer + sym
            }
        }
    }
    return answer
};