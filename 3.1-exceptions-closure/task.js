///////////////Задача 1 Форматтер чисел

function parseCount(value) {

    let result = Number.parseInt(value, Number);

    if (isNaN(result) == true)  {
        throw new Error("Невалидное значение");
    }

    return result;
} 

function validateCount(value) {

    let valueValidate;

    try { 
        valueValidate = parseCount(value);
    } catch (err) {
        return err;
    }

    return valueValidate;
}


//////////////////Задача 2 Треугольник

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // if(((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.c + this.b) < this.a)) {
    //     throw new Error(`Треугольника с такими сторонами не существует`);
    // }  // где нужно написать это условие? в каком методе?


    getPerimeter() {
        let P = this.a + this.b + this.c;
        return P; 
    }

    getArea() {
        let S;
        let p;

        p = (this.a + this.b + this.c) / 2; 
        S = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)); 
        
        S = +S.toFixed(3);
        return S;
    }

}

function getTriangle(a, b, c) { // Аргументами функции являются 3 значения длин сторон
    let result;

    try {// Попытайтесь вернуть новый объект треугольника
        const triangle1 = new Triangle(a,b,c);
        return triangle1;
    } catch (e) { // В случае перехвата исключения возвращайте объект с двумя методами getArea и getPerimeter, которые возвращают строку: "Ошибка! Треугольник не существует".
        return result = {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    } 
    
}
