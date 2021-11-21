/*
 Spread, crea una copia degli oggetti e poi li mette insieme
*/

let obj1 = {
    one: "one"
}

let obj2 = {
    two: "two"
}

let obj3 = {...obj1, ...obj2};

obj1.one = "aaa";
obj2.two = "bbb";

console.log(obj1.one);
console.log(obj2.two);
console.log(obj3.one);
console.log(obj3.two);