function getSolutions(a, b, c) {

    let D = b ** 2 - 4 * a * c;

    if (D < 0) { 
        return {
            D:D,
            roots:[]
        }
    } else if (D == 0) {
        let x1 = - b / (2 * a);
        return {
            D:D, 
            roots:[x1]
        }
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D:D,
            roots:[x1,x2]
        }
    }
    return;
}

function showSolutionsMessage(a, b, c) {

    let result = getSolutions(a, b, c);
    
    let D = b ** 2 - 4 * a * c;

    console.log(`Вычисляем корни квадратного уравнения ${a} * x ** 2 + ${b} * x + ${c}`);
    console.log(`Значение дискриминанта: ${D}`);

    if (D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
        return [];
    } else if (D == 0) {
        let x1 = - b / (2 * a);
        console.log(`Уравнение имеет один корень x1 = ${x1}`);
        return [x1];
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log(`Уравнение имеет два корня. x1 = ${x1}, x2 = ${x2}`);
        return [x1,x2];
    }

}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


///////////////////////////////////
let data;
let marks;

function getAverageScore(data) {

    let result = {};
    let average = 0;
    let sumResult = 0;
    let count = 0;

    for (let prop in data) {
        result[prop] = getAverageScore(data[prop]);
        sumResult += result[prop];
        count++;
        result.average = sumResult / count;
    }

    return result;
}

function getAverageMark(marks) {
    
    if (marks.length == 0) {
        return 0;
    }

    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }

    let averageMark = sumMarks / marks.length;
    return averageMark;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));


/////////////////////////////
//Задача 3
// let firstName;
// let lastname;
// let aaa;
// let bbb;
// let secretData;
// let secret;

// function getPersonData(secretData) {

//     secretData = {
//         firstName: 'Эмильо',
//         lastName: 'Родриго ',
//     }

//     let resultPerson = getDecodedValue();
//     return resultPerson;
// }

// let getDecodedValue;

// function getDecodedValue(secret) {//вспом функция

//     secret = {
//         aaa: 1,
//         bbb: 0,
//     }
// }

// console.log(getPersonData({
//     aaa: 0,
//     bbb: 0,
// }));

// console.log(getPersonData({
//     aaa: 0,
//     bbb: 1,
// }));

// console.log(getPersonData({
//     aaa: 1,
//     bbb: 0,
// }));

// console.log(getPersonData({
//     aaa: 1,
//     bbb: 1,
// }));