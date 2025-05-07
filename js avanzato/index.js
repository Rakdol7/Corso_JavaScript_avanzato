"use strict"


console.log(typeof null);


let a = 1;
let b = a;
console.log(a, b);
b = 3;
console.log(a, b);

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
        console.log(`hi, I'm ${this.name[0]}. ${this.address.city}`);
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