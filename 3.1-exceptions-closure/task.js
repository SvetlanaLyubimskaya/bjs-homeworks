///////////////Задача 1 Форматтер чисел

function parseCount(value) {

    let result = Number.parseInt(value, 10);

    if (isNaN(result))  {
        throw new Error("Невалидное значение");
    }

    return result;
} 

function validateCount(value) {

    try { 
        return parseCount(value);
    } catch (err) {
        return err;
    }

}


//////////////////Задача 2 Треугольник

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw new Error (`Треугольник с такими сторонами не существует`);
        }  

    }

    getPerimeter() {

        return this.a + this.b + this.c; 
    }

    getArea() {
     
        let p = (this.a + this.b + this.c) / 2; 
        let S = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)); 
        
        return +S.toFixed(3);
    }

}

function getTriangle(a, b, c) { // Аргументами функции являются 3 значения длин сторон

    try {// Попытайтесь вернуть новый объект треугольника
        return new Triangle(a, b, c);

    } catch (e) { // В случае перехвата исключения возвращайте объект с двумя методами getArea и getPerimeter, которые возвращают строку: "Ошибка! Треугольник не существует".
        return  {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    } 
    
}
