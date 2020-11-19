class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null; //для хранения id
    }

    addClock(time, callback, id) {
        if (id === undefined) { //Если параметр не передан
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан'); 
        } 
        if (this.alarmCollection.some(elem => elem.id === id)) { 
            console.error('Будильник с таким id уже существует');
        } 
        
        this.alarmCollection.push({ time, callback, id });
    
    }

    removeClock(id) {
        const removeId = this.alarmCollection.filter(elem => elem.timerId === id); 
        if (removeId) {
            this.alarmCollection.splice(removeId, 1);
        }
        return this.alarmCollection;
    }

    getCurrentFormattedTime() {
        const today = new Date(); //возвращает текущее время в строковом формате HH:MM
        let timeNow = (today.getHours() + ':' + today.getMinutes());
        return timeNow;
    }

    start() {
        function checkClock(time) {
            const timeNow = this.getCurrentFormattedTime();
            if (timeNow == time) { //если текущее время совпадает со временем звонка
                return callback(); // то вызывайте колбек.
            }
        }

        if (timerId == null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(elem => checkClock(elem.timerId)));
        }
        
    }

    stop() {
        if (timerId) {
            clearInterval(this.timerId);
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников: ${this.alarmCollection.length}`);

        this.alarmCollection.forEach(elem => elem.timerId);
    }

    clearAlarms() {
        clearInterval(this.timerId);
    }

}


let phoneAlarm = new AlarmClock();

phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
phoneAlarm.addClock('09:01', () => console.log('Давай, вставай уже!'), 2);
phoneAlarm.addClock('09:02', () => console.log('Давай вставай!!!'), 3);
phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!!!'), 4);

phoneAlarm.removeClock(3); // удалил третий звонок

phoneAlarm.printAlarms(); // напечатал 3 будильника

phoneAlarm.addClock('09:10', () => console.log('Позавтракать уже не успеешь.'), 1);// id существует, но ошибку не вывел

phoneAlarm.start();