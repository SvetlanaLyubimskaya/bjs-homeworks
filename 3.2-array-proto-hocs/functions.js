//////// Задача 1
console.clear();

const weapons = [
    new Knife(), 
    new Staff(), 
    new Axe(), 
    new StormStaff(), 
    new LongBow(), 
    new Bow()
];
console.log(weapons);


function getNames() {  // getNames, которая будет возвращать имена всех оружий.
    return weapons.map((weapon) => weapon.name);
}
console.log(getNames()); 


function getCountReliableWeapons(durability) { // которая принимает значение прочности и возвращает количество оружий больше принимаемой прочности
    return weapons.filter((weapon) => weapon.durability > durability).length;
}
console.log(getCountReliableWeapons(300)); 


function hasReliableWeapons(durability) { //которая принимает значение прочности и возвращает вердикт: есть ли оружия прочней принимаемой прочности?
    return weapons.some((weapon) => weapon.durability > durability);
}
console.log(hasReliableWeapons(300));


function getReliableWeaponsNames(durability) { //которая принимает значение прочности и возвращает имена оружий, которые прочней полученного значения.
    return weapons.filter((weapon) => weapon.durability > durability).map((weapon) => weapon.name); // создаем новый массив прочность > знач и из полученного массива возвращаем имена
}
console.log(getReliableWeaponsNames(200));


function getTotalDamage() { //которая вернёт общую сумму урона всех оружий.
    return weapons.map((weapon) => weapon.attack).reduce((sum, attack) => sum + attack);
} 
console.log(getTotalDamage());