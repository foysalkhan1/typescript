// Variable 
let age: number = 50;
let club: string = 'Barcelona';
const isFamous: boolean = false;

// Functions

function add(num1: number, num2: number | string) {
    let result = num1 + num2;
    return result;
}
let total = add(50, 35);
console.log(total)


function fullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}

//Function without returning anything 

function doubleAndConsole(num: number): void {
    const result = num * 2;
    console.log(result);
}
const output = doubleAndConsole(10);
console.log('output', output);

//Arrow Function

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(25, 6));

// Arrays

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.push(20);

const friends: string[] = ['Abul', 'Habul', 'Rafayet', 'Bill'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name', megaName);

//Object
let player: {
    name: string,
    age: number
} = {
    name: 'Roshid',
    age: 20
}

// TypeScript Interface

interface Player {
    name: string,
    club: string,
    wife?: string,
    age: number,
    salary: number,
    isPlaying: boolean,
};

const messy: Player = {
    name: 'Johin',
    club: 'Real Madrid',
    wife: 'Dont know',
    age: 40,
    salary: 10000,
    isPlaying: true,
}
function getBonus(player: { salary: number }) {
    return player.salary * 0.1;
}

//TypeScript Classes [Readonly and Private]

class Person {
    name: string;
    private _parthner: string;
    readonly fatherName: string;
    constructor (name:string, fatherName: string) {
        this.name = name;
        this._parthner = name;
        this.fatherName = fatherName;
    }
    getName():string {
        return this.name;
    }
}
const sam = new Person ('Samuel', 'David');
console.log('Name', sam.name, sam.fatherName)
const samName: string = sam.getName()
sam.name = 'Robert'