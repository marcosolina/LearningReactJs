/*
Posso usare sia lo spread che "Array.concat".
In entrambi i casi gli array originali non vengono
modificati
*/


namespace SpreadArray {
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const c = [...a, ...b];
    const d = a.concat(b);

    console.log(a);
    a.push(10);
    console.log(a);
    console.log(c);
    console.log(d);
}