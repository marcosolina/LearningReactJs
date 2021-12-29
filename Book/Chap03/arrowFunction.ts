// Funzione normale
const myFunc = (message: string) : void => {
    console.log(message);
}

myFunc("hello");

/*
Le funzioni non "arrow" hanno accesso all'array "arguments", 
le arrow function no. Quest'ultime però hanno accesso
all'arguments della funzione che le chiama
*/

// Tre tipi di stile per scrivere le arrow function
const func = () => console.log('func'); // Nulla viene ritornato
const func1 = () => ({name: 'dave'}); // Una riga e qualcosa viene ritornato. La parola non serve, e le parentesi servono solo se un oggetto viene restituito
const func2 = () => { // Qui ci servono le graffe perchè abbiamo più righe
    const val = 20;
    return val;
}

console.log(func());
console.log(func1());
console.log(func2());