function getResult(a,b,c){
    
    'use strict';
    let discriminant = Math.pow(b,2) - 4*a*c;
    let x1 = - b / (2 * a);
    let x2 = (- b + Math.sqrt(discriminant)) / (2 * a);
    let x3 = (- b - Math.sqrt(discriminant)) / (2 * a);

    if (discriminant < 0) {
        return [];
    } else if (discriminant == 0) {
        return [x1];
    } else if (discriminant > 0) {
        return [x2,x3];
    }

}

function getAverageMark(marks){

    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        marks = marks.slice(0,5);
        console.log('Аргументов больше 5, программа будет считать только первые 5');
    } 

    let sumMarks = 0;

    for (let i = 0; i < marks.length; i++) {
        sumMarks = sumMarks + marks[i];        
    }
    
    let averageMark = sumMarks / marks.length; 
    return averageMark;
    
}

function askDrink(name,dateOfBirthday){

    const year = new Date().getFullYear();
    let age = year - dateOfBirthday.getFullYear();
    
    if ( age < 18 ) {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else if (age >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    }

}