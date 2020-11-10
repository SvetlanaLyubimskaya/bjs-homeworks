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
    const result4 = weapons.filter((weapon) => weapon.durability > durability); // создаем новый массив прочность > знач
    return result4.map((weapon) => weapon.name); // из полученного массива возвращаем имена
}
console.log(getReliableWeaponsNames(200));


function getTotalDamage() { //которая вернёт общую сумму урона всех оружий.
    const result5 = weapons.map((weapon) => weapon.attack);
    return result5.reduce((sum, attack) => sum + attack);
} 
console.log(getTotalDamage());