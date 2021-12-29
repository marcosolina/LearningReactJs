const callerObj = {
    name: 'john'
}

function checkMyThis(age){
    console.log("What is this " + this);
    console.log("Do I have a name? " + this.name);
    this.age = age;
    console.log("What is my age? " + this.age);
}

console.log("1------");
checkMyThis.call(callerObj, 25);
console.log("2------");
checkMyThis.apply(callerObj, [24]);
console.log("3------");
checkMyThis(undefined);
console.log("4------");
checkMyThis.bind(callerObj)(30); // bind ritorna una funzione legata al nuovo this
