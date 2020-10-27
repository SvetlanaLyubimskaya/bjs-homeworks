class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state = this.state * 1.5;
    }

    set state(Number) {
        if (Number < 0) {
            this._state = 0;
        } else if (Number > 100) {
            this._state = 100;
        } else {
            this._state = Number;
        }
    }

    get state() { 
        return this._state; 
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type)
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type)
        this.type = "fantastic";
    }    
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type)
        this.type = "detective";
    }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15


///////////////////////Задача 2
class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) { // не находит книгу.. Uncaught TypeError: Cannot read property 'name' of null
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].type === value) {
                return this.books[i];
            } else {
                return null;
            }
        }
    }

    giveBookByName(bookName) { 
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                //return delete this.books[i].book;
                return this.books.splice(i, 1); // как удалить одну нужную книгу из массива???
                // return this.books.length - i;
            } else {
                return null;
            }
        }    
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"  Uncaught TypeError: Cannot read property 'name' of null

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// 5. Протестируйте корректность работы классов и методов, разыграв тестовый сценарий:
// 1) Создайте библиотеку;
// 2) Добавьте в библиотеку несколько печатных изданий различных типов;
// 3) Найдите книгу, изданную в 1919 году(создайте такую книгу при необходимости);
// 4) Выдайте любую книгу;
// 5) Испортите выданную книгу;
// 6) Почините выданную книгу;
// 7) Попытайтесь добавить починенную книгу обратно в библиотеку.

//1
const librarySecond = new Library("Библиотека номер 2");

//2
librarySecond.addBook(new DetectiveBook("Эдгар Аллан По", "Убийство на улице Морг", 2017, 448));
librarySecond.addBook(new DetectiveBook("Фёдор Михайлович Достоевский", "Преступление и наказание", 2014, 672));
librarySecond.addBook(new FantasticBook("Льюис Кэрролл", "Алиса в стране чудес", 2019, 188));
librarySecond.addBook(new FantasticBook("Брэм Стокер", "Дракула", 2017, 384));
librarySecond.addBook(new NovelBook("Шарлотта Бронте", "Джейн Эйр", 2020, 512));
librarySecond.addBook(new NovelBook("Морис Дрюон", "Железный король", 2018, 352));
librarySecond.addBook(new Magazine("Непоседа", 2019, 32));
librarySecond.addBook(new Magazine("Красноармеец", 1919, 18));

//3
librarySecond.findBookBy("releaseDate", 1919).name;
console.log(librarySecond.findBookBy("releaseDate", 1919).name); //"Красноармеец"


//4
console.log("Количество книг до выдачи: " + librarySecond.books.length);
librarySecond.giveBookByName("Алиса в стране чудес");
console.log(librarySecond.giveBookByName("Алиса в стране чудес")); //не находит
console.log("Количество книг после выдачи: " + librarySecond.books.length);

//5
const aliceGive = new FantasticBook("Льюис Кэрролл", "Алиса в стране чудес", 2019, 188);
console.log(aliceGive.author); //Льюис Кэрролл
aliceGive.state = 50;
console.log(aliceGive.state); //50

//6
aliceGive.fix();
console.log(aliceGive.state); //75

//7
librarySecond.addBook(new FantasticBook("Льюис Кэрролл", "Алиса в стране чудес", 2019, 188));


///////////////////////Задача 3
// class StudentLog {
//     constructor(name) {
//         this.name = name;
//     }
    

//     getName(name) {
//         return this.name;
//     }

    

//     addGrade(grade, subject) {
//         this.grade = grade;
//         this.subject = subject;
//     }

//     getAverageBySubject(subject) {

//     }

//     getTotalAverage() {
        
//     }
// }

// const log = new StudentLog('Олег Никифоров');
