/*
Intersection mi permette di unire più tipi insieme
in modo tale da create un unico tipo
*/

let obj: { name: string } & { age: number } = {
    name: "tom",
    age: 25
}

// obj = { test: "" }; // Compile error

console.log(obj);