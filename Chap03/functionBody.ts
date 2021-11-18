if(true){
    var val1 = 1;
}

function go(){
    var val2 = 2;
}

/*
In Javascript, lo scope delle variabli dichiara con "var"
è ristretto alla funzione che le "tiene dentro".
val1 non è dichiarata dentro una funzione, quindi il suo scope
è questo file. Val2 invece è visibile solo dentro la funzione go
*/
console.log(val1);
// console.log(val2); // Non compila

