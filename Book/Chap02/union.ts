/*
 Union è leggermente diverso dalla intesection
 in quanto fa un ragionamento del tipo:
 o uno o l'altro
*/

let unionObj: null | { name: string } = null; // accetta il null
unionObj = { name: "John"}; // ora accetta un obj con string name
//unionObj = {a: "a"}; // Compile Error

console.log(unionObj);