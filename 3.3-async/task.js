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
            return console.error('Будильник с таким id уже существует');
        } 
        
        this.alarmCollection.push({ time, callback, id });
    
    }

    removeClock(id) {
        const removeId = this.alarmCollection.findIndex(elem => elem.id === id); 
        if (removeId) {
            this.alarmCollection.splice(removeId, 1);
        }
        return this.alarmCollection;
    }

    getCurrentFormattedTime() {
        const today = new Date(); //возвращает текущее время в строковом формате HH:MM
        const hours = today.getHours();
        const minutes = today.getMinutes();

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        let timeNow = (hours + ':' + minutes);
        return timeNow;
    }

    start() {
        const timeNow = this.getCurrentFormattedTime;

        function checkClock(time) {
            if (timeNow() == time.time) { //если текущее время совпадает со временем звонка
                return time.callback(); // то вызывайте колбек.
            }
        }

        if (this.timerId == null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(elem => checkClock(elem));
            }, 60000); // таймер через минуту
        } 
         
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.timerId = null;
    }

    printAlarms() {
        console.log(`Печать всех будильников: ${this.alarmCollection.length}`);

        this.alarmCollection.forEach(elem => elem.timerId);
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }

}


let phoneAlarm = new AlarmClock();

phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
phoneAlarm.addClock('09:01', () => console.log('Давай, вставай уже!'), 2);
phoneAlarm.addClock('09:02', () => console.log('Давай вставай!!!'), 3);
phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!!!'), 4);

phoneAlarm.removeClock(3); // удалил третий звонок

phoneAlarm.printAlarms(); // напечатал 3 будильника

phoneAlarm.addClock('09:10', () => console.log('Позавтракать уже не успеешь.'), 1);// id существует, ошибку вывел

phoneAlarm.start();

phoneAlarm.clearAlarms();