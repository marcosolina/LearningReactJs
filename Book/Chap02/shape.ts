class Person {
    name: string;
}

/*
Qui dichiaro jill a definisco il "tipo"
al volo. Il compilatore usa la "forma"
dell'oggetto, non il tipo. Quindi jill
è uguale a Person
*/
const jill: {name: string } = {
    name: "jill"
};

const person: Person = jill;
console.log(person);