function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";

    if (Number.isNaN(percent) === false) {
        percent = parseInt(percent, Number);
    } else {
        return `Параметр "Процентная ставка содержит неправильное значение ${percent}`
    }

    if (Number.isNaN(contribution) === false) {
        contribution = parseInt(contribution, Number);
    } else {
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`
    }

    if (Number.isNaN(amount) === false) {
        amount = parseInt(amount, Number);
    } else {
        return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`
    }

    let bodyCredit = amount - contribution; // тело кредита
    let amountMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()); // количество выплачиваемых месяцев
    let rate = percent / 12 / 100; // 1/12 процентной ставки / 100 
    let payment = bodyCredit * (rate + rate / (((1 + rate) ** amountMonths) - 1)); // ежемес платеж
    let totalAmount = payment * amountMonths ; // сумма, кот выплатит клиент
   
    totalAmount = +totalAmount.toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
    "use strict";
    
    if ((!name) || (name == typeof (undefined)) || (name === 'null') || (name == `''`)) {
        name = 'Аноним';
    }
    
    // if ((name == '') || (name == undefined) || (name === null) || (name === 'null') || (name === 'undefined') || (name === ' ')) {
    //     name = 'Аноним';
    // } 

    let greeting = `Привет, мир! Меня зовут ${name}`;
    
    return greeting; 
}