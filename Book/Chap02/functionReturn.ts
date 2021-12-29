/*
Posso definire il tipo di dato ritornato anche
quando definisco le funzioni
*/


function runMore(distance: number): number {
    return distance + 10;
}

function nothingToReturn(distance: number): void {
    distance + 10;
    //return distance + 10; // non compila
}

function eat(calories: number){
    console.log("I ate " + calories + " calories");
}

let ate = eat(500);
console.log(ate); // it will print undefined

let ate2: number;
//ate2 = eat(400); // non compila

/*
 La funzione accetta un parametro di tipo "number" e ritorna un "number"
 Dentro le parentesi definisco i parametri di input ed il loro tipo, appena
 dopo la chisura della parentesi definisco il tipo di ritorno
*/