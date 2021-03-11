"use strict";
// Variable 
let age = 50;
let club = 'Barcelona';
const isFamous = false;
// Functions
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}
let total = add(50, 35);
console.log(total);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
//Function without returning anything 
function doubleAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleAndConsole(10);
console.log('output', output);
//Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
// Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(20);
const friends = ['Abul', 'Habul', 'Rafayet', 'Bill'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name', megaName);
//Object
let player = {
    name: 'Roshid',
    age: 20
};
;
const messy = {
    name: 'Johin',
    club: 'Real Madrid',
    wife: 'Dont know',
    age: 40,
    salary: 10000,
    isPlaying: true,
};
function getBonus(player) {
    return player.salary * 0.1;
}
//TypeScript Classes [Readonly and Private]
class Person {
    constructor(name, fatherName) {
        this.name = name;
        this._parthner = name;
        this.fatherName = fatherName;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Samuel', 'David');
console.log('Name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Robert';
