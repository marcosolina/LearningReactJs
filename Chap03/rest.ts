/*
    Rest è un tipo di parametro che indica un numero indefinito
    parametri. Significa "the rest of the items" ed è un array
*/

function doSomething(a, ...others){
    console.log(a, others, others[others.length - 1]);
}

doSomething(1,2,3,4,5,6,7);