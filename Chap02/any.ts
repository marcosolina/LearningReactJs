/*
Il tipo any mi permette si associare alla variabile
qualsiasi cosa. Posso continuare ad associare valori
di tipo diverso senza alcun problema, il compilatore
non mi darà mai errore
*/

let val: any = 22;
val = "string value";
val = new Array();
val.push(33); // Il push funziona perchè è una funzione di array
console.log(val);

/*
Supponiamo di chiamare una funzione che non esiste
se provo a compilare (tsc any.ts) il compilatore non
ritornerà alcun error. Questo perchè stiamo usando
"any" come tipos
*/

val.doesNotExist(33);
console.log(val);