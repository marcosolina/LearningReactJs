let val: unknown = 22;
val = "string value";
val = new Array();
//val.push(33); // Siccome abbiamo usato il tipo "unknown" il compilatore non riconosce questo metodo

// Devo quindi auitare il compilatore
if (val instanceof Array){
    val.push(33);
}

console.log(val);