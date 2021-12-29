/*
 Quando dichiaro un tipo, altre che a stabilire
 il tipo degli attributi come string, numberic etc,
 posso anche definirli come funzioni
*/

type Run = (miles: number) => boolean; // definsco la firma di una funzione (Tipo le interfacce in Java)
let runner: Run;

/*
 Il tipo di funzione è definito da: (miles: number) => boolean
 "Run" l'ho messo come alias per rendere più corta la definizione
*/

let runner2: (miles: number) => boolean;

runner = function (miles: number): boolean {
    if(miles > 10){
        return true;
    }
    return false;
};

console.log(runner(9));
console.log(runner(11));