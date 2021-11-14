/*
 Uso membri statici
*/

class ClassA {
    static typeName: string;

    constructor(){}

    static getFullName(){
        return "ClassA " + ClassA.typeName;
    }
}

ClassA.typeName = "Hello";
console.log(ClassA.typeName);
console.log(ClassA.getFullName());