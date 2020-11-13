function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}
function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index])) {
        return true;
    } else {
        return false;
    }
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
    const memory = [];

    return function(...args) {

        const argsFind = memory.find((item) => compareArrays(item.args, args)); // в аргументы надо передать два массива

        if (argsFind == true) { //Если история о вызове функции fn найдена
            console.log(argsFind.result);
            return argsFind.result; // функция должна вернуть свойство result найденного объекта.
        } 

        const result = fn(...args); // Вычислить результат fn с переданными аргументами
        memory.push( {args: [args], result: result} ); // Добавить запись о вызове fn в memory.

        if (memory.length > limit) { // При количестве элементов memory более limit(5) удалить лишнее.
            memory.shift();
        } 
        
        return result; // Вернуть результат fn с переданными аргументами.
    }
}

const mSum = memorize(sum, 5); // 5 результатов может храниться в памяти

// Вызов этих функций даёт один и тот же результат
console.log(sum(3, 4)); // 7
/* 
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
console.log(mSum(3, 4)); // 7




// // 2.1 Возвращение функции
// // Напишите функцию memorize, которая должна возвращать другую функцию.
// // Сначала пустую функцию.Это важный момент, так как если это у вас не получается, 
// // значит вы не усвоили материал занятия функций высшего порядка.
// // function memorize() {
// //     return () => {};
// // }
// // let resultFunction = memorize();
// // resultFunction();
// // console.log(resultFunction()); // <= должно вызываться без ошибок

// // 2.2 Получение аргументов
// // Переделайте возвращаемую функцию, чтобы она принимала набор аргументов 
// // и выводила их на консоль.Тоесть выполнение должно быть примерно такое:

// function memorize() {
//     return (a,b,c,d) => { 
//         console.log(a,b,c,d);
//     }
// }
// let resultFunction = memorize();
// resultFunction(1, 2, 3, 4); // <= должно вывести: 1,2,3,4


// // 2.3 Вычисление функции
// // Переделайте memorize, чтобы она принимала функцию, 
// // возвращённой функции выполнять эту полученную функцию
// function memorize(fn) {
//     return fn1 = () => fn;
// } 
// resultFunction = memorize(fn);

// resultFunction(2); // <= должно вывести: 4
// resultFunction(5); // <= должно вывести: 25


// // 2.4 Поиск посчитанного элемента
// // В memorize сделайте массив с некоторыми значениями объектов.
// // Например возьмите тот же пример из задания:
// function memorize() {
//     const memory = [
//         {
//             args: [3, 4],
//             result: 7
//         },
//         {
//             args: [1, 3],
//             result: 4
//         }
//     ] 
