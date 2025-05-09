"use strict"


console.log(typeof null);


let a1 = 1;
let b1 = a1;
console.log(a1, b1);
b1 = 3;
console.log(a1, b1);

const ogg1 = {
    valore: 2,
};
const ogg2 = ogg1;
console.log(ogg1.valore, ogg2.valore);
ogg2.valore = 3;
console.log(ogg1.valore, ogg2.valore);

const data = new Date("02-02-2022");
let dataB = data;
console.log(data, dataB);
dataB.setFullYear(2023);
console.log(data, dataB);


const nomeProprieta = "age";

const person = {
    name: ["Bob", "Smith"],
    address: {
        city: "Milano",
    },
    [nomeProprieta]: 32, //braket notation
    introduce: function () {
        console.log(`hi, I'm ${this.name[0]}. ${this.address.city}`);//usa gli accenti gravi alt+96
    }
};
person.introduce();

//optional chaining
console.log(person.state?.city); //da undefined al posto dell'errore

//braket notation
console.log(person["age"]); //come usare il punto

function Person(name) {
    this.name = name;
    this.introduce = function () {
        console.log(`hi, I'm ${this.name}.`);
    };
};
const io = new Person("Fabrizio");
const lui = new Person("Luca");
io.introduce();
lui.introduce();


//prototype
Person.prototype.addLastName = function (lastname) { //aggiungo una funzione al prototype
    this.lastname = lastname;
};
io.addLastName("Rizzi");
lui.addLastName("Caputo");
console.log(io.lastname);
console.log(lui.lastname);


//destructuring
const coord = {
    x: 100,
    y: 200,
};
const { x, y } = coord; //questa è la riga fondamentale
console.log(x);
console.log(y);
const { x: new1, y: new2 } = coord; //cambio nomi

//rest operator
const oggt = { a: 100, b: 200, c: 300, d: 400, e: 500 };
const { a, b, ...args } = oggt;
console.log(a);
console.log(b);
console.log(args);//args contiene c d e

const pers = {
    name: "Fabrizio",
    city: "Milano",
    age: 32,
    introduce: function () {
        console.log("Ciao, sono " + this.name);
    }
};
const { introduce, ...soloDatiAnagrafici } = pers;
console.log(soloDatiAnagrafici);


//copia di un oggetto
const persona = {
    name: "Fabrizio",
    address: {
        city: "Milano",
    },
    birthday: new Date(),
};
const personCopy = { ...persona }; //shallow copy: oggetto diventa reference
const personCopy2 = Object.assign({}, persona); //array.from //shallow copy
const personCopy3 = JSON.parse(JSON.stringify(persona)); //deep copy: data diventa stringa