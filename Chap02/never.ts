/*
Una funzione può ritornare il tipo "never".
Vuol dire che la funzione non teminerà, il che
può sembrare strano. Per come la interpreto io
è un come le throw Exception in Java. 
Tu dichiari un metodo che ritorna qualcosa, ma
se il metodo lancia una eccezzione è come se
non finisse
*/

function oldEnough(age: number): never | boolean {
    if (age > 59){
        throw Error("Too old!");
    }

    if (age <= 18){
        return false;
    }
    return true;
}

let result = oldEnough(15);
console.log(result);