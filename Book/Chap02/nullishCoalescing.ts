/*
Questo è uno shortcut per testare e asseganre valori non nulli
*/

const val1 = undefined;
const val2 = null;
const valr3 = 10;
const result = val1 ?? val2 ?? valr3;
console.log(result);

/*
 è simile all || 
 || è concentrato sul "truthyness"
 ma ?? è incentrato sull null o undefined
*/