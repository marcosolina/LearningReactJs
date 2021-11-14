class Person{
    constructor(){}

    msg: string;
    speak(){
        console.log(this.msg);
    }
}

const tom = new Person();
tom.msg = "Hello";
tom.speak();

/*
Aggiungo encapsulation
*/
class Person2{
    constructor(private msg: string){}

    speak(){
        console.log(this.msg);
    }
}

const tom2 = new Person2("hello");
tom.speak();