class A {
    name: string = 'A';
    go() {
        console.log(this.name);
    }
}

class B {
    name: string = 'B';
    go(){
        console.log(this.name);
    }
}

const a = new A();
a.go();

const b = new B();
b.go();
b.go = b.go.bind(a);
b.go();

/*
 bind accetta il "this" come primo parametro, e poi parametri opzionali
 - bind: usato per eseguier il "cambio dell this", così quando la funzione verrà poi eseguita userà il nuovo "this"
 - call: utilizza un numero indeterminato di parametri
 - apply: utilizza un array di parametri
*/