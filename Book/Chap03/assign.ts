/*
 Assign non copia e ritorna un nuovo ogget. Mette tutto dentro il primo
 e ti ritorna il primo "aggiornato"
*/

let obj1 = {
    one: "one"
}

let obj2 = {
    two: "two"
}

let obj3 = Object.assign(obj1, obj2);

obj1.one = "aaa";
obj2.two = "bbb";

console.log(obj1.one);
console.log(obj2.two);
console.log(obj3.one);
console.log(obj3.two);