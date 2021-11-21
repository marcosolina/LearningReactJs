async function delayedResult(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I completed successfully");
        }, 5000);
    });
}

(async function execAsyncFunc(){
    const result = await delayedResult();
    console.log(result);
})();

/*
Mettere async davanti alla definizione di una funzione
dice al runtime che la funzione ritornerà una promise.

Per ora posso usare l'await solo se la mia funzione è async.
Questo vuol dire che non posso mettere un await al top level
(await al top level è parzialmente supportato)
*/