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
    const memory = [
        { 
            args: [theArgs], 
            result: sum 
        },
    ];

    //let argsFind = memory.find((elem) => elem.compareArrays(theArgs)

    return fn(...theArgs);
}

const mSum = memorize(sum, 5); // 5 результатов может храниться в памяти

// Вызов этих функций даёт один и тот же результат
console.log(sum(3, 4)); // 7
/* 
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
console.log(mSum(3, 4)); // 7

console.log(sum(1, 2, 3, 4));
console.log(mSum(1, 2, 3, 4));

