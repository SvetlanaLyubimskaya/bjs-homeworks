//////////////////задача 1
//String.prototype.isPalindrome - для задачи №1

// console.log('А роза упала на лапу Азора');
// console.log('Иван Васильевич меняет профессию');
// console.log('еле-еле шёл Емеля!');
// console.log('еле-еле');
// console.log('сел лес');
// console.log('Ад гонит иногда');


String.prototype.isPalindrome = function() {
    
    const str = this.toLowerCase().replace(/\s/g, '');

    return str === str.split('').reverse().join(''); 

}

//////////////////задача 2
function getAverageMark(marks) {

    let sumMarks = 0;

    if (marks.length == 0) {
        return 0;
    }
    
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }

    let average = sumMarks / marks.length; //средняя оценка ученика
    console.log(average);
    
    let roundedAverage = Math.round(average); //округлим до ближ целого

    return roundedAverage;
}

//////////////////задача 3
function checkBirthday(birthday) {
    
    const today = new Date();
    console.log(+today);
    
    // birthday = Date.parse(birthday);
    const parsedBirthday = new Date(birthday).getTime();
    console.log(+birthday);

    let diff = ((+today) - parsedBirthday);
    let age = diff / 31557600000; //365.25*24*60*60*1000
    
    verdict = (age > 18) ? true: false; 

    return verdict;
}