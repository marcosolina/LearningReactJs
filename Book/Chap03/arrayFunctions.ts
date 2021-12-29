const items = [
    {name: "john", age: 20},
    {name: "linda", age: 22},
    {name: "john", age: 40}
]

// Finds returns the first "true" item
const john = items.find((item) => {
    return item.name === "john"; // Truth check
});

console.log(john);

// Filter retursn all the matching
const results = items.filter((item, index) => {
    return item.name === "john"; // Truth check
});

console.log(results);

// It converts (map) every items into a new one
const elements = items.map((item, index) => {
    return `<div>${item.age} - ${item.name}</div>`;
});

console.log(elements);


// Reduce works on all the elements of the array, and it 
// returns a single value
const allTrucks = [2,5,7,10];
const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
    totalCapacity = totalCapacity + currentCapacity;
    return totalCapacity;
}, initialCapacity);

console.log(allTonnage);


/*
 Some and every sono designate a testare il criterio,
 quindi ritornano solo true o false
 Some cerca se c'è almeno un elemento che soddisfi il criterio
 Every invece guarda se tutti gli elementi vanno bene
*/

console.log("There are some John", items.some(item => item.name === "john"));
console.log("There are only John", items.every(item => item.name === "john"));