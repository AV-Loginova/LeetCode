/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    //объявлеяем переменную, содержащую градусы по Кельвину
    let kelvin = celsius + 273.15;
    //объявлеяем переменную, содержащую градусы по Фаренгейту
    let farenheit = celsius * 1.80 + 32.00;
    //создаем пустой массив
    let answer = [];
    //добавляем в пустой массив переменные с градусами по Кельвину и Фаренгейту
    answer.push(kelvin, farenheit)
    return answer
    
    
};
