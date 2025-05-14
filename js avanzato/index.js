"use strict"

//----------------------------------------------------------------------------------------------------------

console.log(typeof null);

//---------------------------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------------------------------------

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

//----------------------------------------------------------------------------------------------------------------

//prototype
Person.prototype.addLastName = function (lastname) { //aggiungo una funzione al prototype
    this.lastname = lastname;
};
io.addLastName("Rizzi");
lui.addLastName("Caputo");
console.log(io.lastname);
console.log(lui.lastname);

//--------------------------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------------

//default parameters
function convertiEuroDollari(quantita, valoreAttuale = 1.2) {
    return valoreAttuale * quantita;
}
console.log(convertiEuroDollari(2)); //se non gli passo il secondo parametro lo assegna automaticamente

//rest parameters
function prova(...argomenti) {
    console.log(argomenti)
}
prova(1, 2, "sas"); //posso usare un numero di argomenti indefinito

//------------------------------------------------------------------------------------------------------------------------

//arrow function
/*function prova1(a) { //function normale
    return a * 2;
}*/
const prova1 = (a) => a * 2; //arrow function
console.log(prova1(3));
//nelle arrow function non funziona il this

//--------------------------------------------------------------------------------------------------------------------------

var colors = ["Violet", "indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

//destructuring assignment
var [a2, b2, ...args1] = colors;
console.log(a2);
console.log(b2);
console.log(args1);

//Swapping values
let x1 = 100;
let y1 = 200;
[x1, y1] = [y1, x1];
console.log(x1);
console.log(y1);

//spread operator
let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore = [...numberStore, newNumber]; //aggiunge elementi
console.log(numberStore);
console.log(...numberStore); //stampa i singoli elementi

//--------------------------------------------------------------------------------------------------------------------------------

//prototype degli array
const array1 = ["a", "b", "c"];

//ciclo for migliorato simile al foreach
for (const element of array1) { // uso in al posto di of per gli oggetti
    console.log(element);
}

//foreach
array1.forEach((element) => console.log(element));

const numbers = [2, 6, 45];
const moltiplicaPerDue = (number) => number * 2;

//map
const numbersMoltiplicati = numbers.map(moltiplicaPerDue); //creo un nuovo array che differisce da quello originale perchè applico la funzione moltiplicaPerDue
console.log(numbersMoltiplicati);

const names = ["Fabrizio", "Lorenzo", "Luca"];
const namesObj = names.map(name => ({ nome: name })); //creo un nuovo array che differisce da quello originale perchè trasformo le stringhe in oggetti
console.log(namesObj);

const letters = ['a', 'b', 'a', 'b'];

//filter
const aOccurencies = letters.filter(letter => letter === "a"); //divido l'array in 2: uno composto dalle a e uno dalle b
const bOccurencies = letters.filter(letter => letter === "b"); //sto creando 2 nuovi array
console.log(aOccurencies.length > bOccurencies.length);

//modificano l'array originale
/*letters.push("a");
letters.pop();
letters.shift("a");
letters.unshift();*/

const array = [
    { id: '1', enabled: true },
    { id: '2', enabled: false },
    { id: '3', enabled: true },
];

//filter
console.log(array.filter(element => element.enabled)); //ritorna solo quelli true
console.log(array.filter(element => element.enabled).map((element, i) => ({ id: element.id, indice: i }))); //prima filtro quelli true, poi ho fatto ritornare solo gli id con l'indice

//prova reale
fetch('https://jsonplaceholder.typicode.com/posts/') //chiamata AJAX ad un API che torna dei post
    .then((res) => res.json())
    .then((res) => {
        //senza filtro stampa 100 oggetti
        console.log(res.filter(post => post.userId === 1)); //restituisce solo quelli scritti dall'utente 1
    });

const array2 = [1, 2, 3, 4];

//reduce 
const initialValue1 = 0;
const sumWithInitial = array2.reduce((a, b) => { //trasforma l'array in un solo valore sommando sempre quello precedente
    console.log(a, b);
    return a + b;
},
    initialValue1
);
console.log(sumWithInitial);

// esempio rest parameters
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}
console.log(sum(1, 2, 3, 2, 21, 42, 12, 4, 42, 1, 214)); //numero di argomenti indefinito