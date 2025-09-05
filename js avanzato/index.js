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

//----------------------------------------------------------------------------------------

//classe
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const p = new Rectangle(20, 30);
console.log(p);

//metodo
class Area extends Rectangle {
    area() {
        return this.height * this.width;
    }
}

const ar = new Area(30, 40);
console.log(ar);
console.log(ar.area());

//mappe
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
map1.set('a', 97);
console.log(map1.get('a'));
console.log(map1.size); //associano ad una chiave un valore

//----------------------------------------------------------------------------

//set
const mySet1 = new Set();

mySet1.add(1); //aggiungo 1
mySet1.add(5); //aggiungo 5
mySet1.add(5); //ho già aggiunto 5, non cambia nulla
mySet1.add("killua"); //posso aggiungere anche testo

mySet1.has(1); //vero perché c'è nel set
mySet1.has(3); //falso perché non c'è

mySet1.size; //ritorna la dimensione

console.log(mySet1.forEach((a) => console.log(a))); //stampo tutto

//come togliere i doppioni in un array
const numeri = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
const set = new Set(numeri);
const nuovoArray = [...set];
//const nuovoArray = Array.from(set);
console.log(nuovoArray); //trasormo l'array in set così ta togliere i doppioni per poi ritrasformarlo in array

//---------------------------------------------------------------------------------

//satck e stackblitz
function prima1() {
    debugger;
    console.log('prima');
}

function seconda1() {
    debugger;
    prima1();
    console.log('seconda');
}

function terza1() {
    debugger;
    seconda1();
    console.log('terza');
}

terza1(); //call stack aggiunge le funzione allo stack che viene tolta una volta finita

//programmazione asincrona e callback
document
    .querySelector('#app')
    .addEventListener('click', () => console.log('cliccato'));

console.log('sync');

function prima() {
    console.log(1);
}

function seconda(callback) {
    setTimeout(() => { //setTimeout serve per simulare un'attesa
        console.log(2);
        callback(); //esegue solo dopo l'attesa
    }, 1000);
}

function terza() {
    console.log(3);
}

prima();
seconda(terza); //senza callback stampa 1 3 2 per via dell'attesa

//----------------------------------------------------------------------------------

//promises
//sono un oggetto ritornato da una funzione asincrona che fornisce metodi che gestiscono il successo o il fallimento dell'operazione
//hanno tre stadi: pending(attesa), resolved(successo), rejected(fallimento)
const promise = new Promise((resolve, reject) => {
    const res = false;
    setTimeout(() => {
        if (res) {
            resolve('Resolved!');
        } else {
            reject(Error('Error'));
        }
    }, 1000)
});

promise
    .then((res) => console.log(res)) //.then è chiamato in caso di resolved e ritorna i dati
    .catch((err) => console.log(err.message)) //.catch è chiamato in caso di rejected
    .finally(() => console.log('finito')); //.finally è sempre chiamato ialla fine di tutta la promise

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 5000);
});

Promise.all([promise1, promise2]).then((res) => { //.all gestisce un array di promises aspettando le promise più lente ritornandole in ordine
    console.log(res[0]);
    console.log(res[1]);
});

//------------------------------------------------------------------------------------

//async/await
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World!');
        }, 2000);
    });
}

const msg = async () => {
    try { //catchare gli errrori
        console.log('calling');
        const msg = await helloWorld();
        console.log('Message:', msg);
    } catch (error) { //catchare gli errrori
        console.log(error);
    }
}; //questa parte serve per restare in ascolto delle chiamate

msg();

//--------------------------------------------------------------------------------

//ajax
//serve per far richieste a un server e far ritornare dati
//XMLHttpRequest
//.onload serve per chiamare una funzione quando il server risponde
//.open apre il canale, specificando il tipo di comunicazione
//.send invia
const xhr1 = new XMLHttpRequest();

xhr1.open('GET', 'https://jsonplaceholder.typicode.com/posts/');

xhr1.onload = () => {
    console.log(JSON.parse(xhr1.response));
};

xhr1.send(); //se l'esempio reale non funziona commenta questo esempio

//esempio reale
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=douglasadams');

xhr.onload = () => {
    document.querySelector('.paragraph').innerHTML = JSON.parse(
        xhr.response
    ).totalItems;
    const books = JSON.parse(xhr.response).items.map(
        (item) => item.volumeInfo.title
    );
    console.log(books);
    books.forEach((book) => {
        let p = document.createElement('p');
        p.innerText = book;
        document.body.appendChild(p);//queste 3 righe sono DOM manipulation
        //nel mondo real però non si usa, si usano dei framework appositi
    });
};

xhr.send();

//------------------------------------------------------------------------------

//fetch API
//sostituisce XMLHttpRequest
const fetchNewImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((res) => {
            console.log(res);
            document.querySelector('.immagine').src = res.message;
        });
};

document.querySelector('.fetch').addEventListener('click', fetchNewImage); //quando clicchi pulsante chiami fetchNewImage

//chiamata post
//aggiungere un elemento
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ //rende l'oggetto una stringa
        title: 'foo',
        body: 'bar', //contenuto della request
        userId: 1984,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json()) //dentro si scrive la callback 
    .then((json) => console.log(json)); //risultato del server

//async await
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world');
        }, 2000);
    });
}

const msg1 = async () => {
    console.log('calling');
    const msg = await helloWorld();
    helloWorld().then(response => console.log(response));
    console.log('message', msg);
};

msg1();

//----------------------------------------------------------------------------------

//moduli
//parti in cui viene diviso il codice
import squareArea, { name } from './module.js'; //importo dati dal modulo
console.log(name);
console.log(squareArea(14));
//per far funzionare ciò serve un web server

//-------------------------------------------------------------------------------

//node.js
//serve per scrivere programmi server-side
//installa la versione che ti serve dal sito
//da terminale
//node //lancia node
//console.log(14); //puoi scrive codice come se fosse js
//touch node.js
//node node.js //esegue il file

//npm
//packet manager di node.js
//sito per ulteriori info

//express
//installazione da terminale
//cd express
//npm init
//lascia default premendo invio più volte
//npm install express

//esempio
//touch index.js //creazione file js in cui puoi inserire codice
//codice esempio
/*const express = require('express') //importo la libreria
const app = express() //creo un app
const port = 3000 //specifico il nome di una porta

app.get('/', (req, res) => { //in caso di chiamata get risponde con la send
    res.send('hello world')
})

app.listen(port, () => { //quando il server è pronto si mette in ascolto di chiamate
    console.log('example app listening on port ' + port)
})*/
//node index.js //lancia il programma esempio

//------------------------------------------------------------------------------------

//frameworks
//forniscono strumenti per creare  applicazione web
//i più utilizzati sono: react, angular, vue, svelte, express

//vue
//npm init vue@latest //per creare e iniziare il progetto
//npm run build //crea la build dell'applicativo
//puoi creare componenti per gestire più cose insieme
//npm run dev //per lanciare l'applicazione
//puoi gestire gli eventi

//react
//npm init react-app my-app //per creare e iniziare il progetto

//angular
//npm install -g @angular/cli
//ng new my-first-project //per creare e iniziare il progetto

//---------------------------------------------------------------------------------

//deploy
//publicare l'applicazione tramite hosting
//github pages, netlify, firebase hosting, heroku