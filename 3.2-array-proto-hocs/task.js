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
    return (arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index]));
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
    const memory = [];

    return function(...args) {
        
        // С помощью функции find найдите в массиве memory, объект, 
        // у которого в свойстве args находится такой же массив, 
        // как и массив аргументов с которыми была вызвана возвращаемая memorize функция.
        const argsFind = memory.find(item => compareArrays(item.args, args)); // undefined
        console.log(argsFind);

        if (argsFind) { //Если история о вызове функции fn найдена
            console.log(argsFind.result);
            return argsFind.result; // функция должна вернуть свойство result найденного объекта.
        } 

        const result = fn(...args); // Вычислить результат fn с переданными аргументами
        console.log(args); // выводит массив аргументов [2, 3]

        // let obj = {};
        // obj.args = args;
        // obj.result = result;
        // memory.push(obj); // тот же результат(
        // memory.push({ args: Array.from(arguments), result: result});
        memory.push({args: args, result: result}); // Добавить запись о вызове fn в memory.

        if (memory.length > limit) { // При количестве элементов memory более limit(5) удалить лишнее.
            memory.shift();
        } 
        
        console.log(memory);
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

console.log(sum(2, 3, 4));
console.log(mSum(2, 3, 4));
