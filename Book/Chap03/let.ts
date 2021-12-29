namespace lets {
    let val1 = 1;
    val1 = 2;
    if (true){
        let val2 = 3;
        val2 = 3;
    }

    console.log(val1);
    // console.log(val2); // Non compila per via dello scope
    // val1 = ""; non compila per via del tipo diverso


    /*
    Let limita lo scope al blocco di codice, ma permette alla
    variabile di essere riassegnata. Ovviamente con lo stesso
    tipo perchè siamo in TypeScript.
    */
}