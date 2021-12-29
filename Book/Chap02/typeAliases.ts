/*
Una volta definito un tipo di dato, posso poi 
usarlo come definizione per creare un altro
tipo uguale ma con nome diverso
*/

type Points = 20 | 30 | 40 | 50;
let score: Points = 20;

//score = 22; // Non compila

console.log(score);

type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
};

let tizio : ComplexPerson;
// tizio.aa; Non compila