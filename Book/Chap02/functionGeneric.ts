function getLength<T>(arg: T): number {
    if(arg.hasOwnProperty("length")){
        return arg["length"];
    }
    return 0;
}

console.log(getLength<number>(22)); // Io specifico il tipo
console.log(getLength("hello world.")); // Il compilatore ricava il tipo in automatico

interface HasLength {
    length: number;
}

function getLength2<T extends HasLength>(arg: T): number {
    return arg.length;
}

// console.log(getLength2<number>(22)); // Non compila perchè number non ha la proprietà length
console.log(getLength2<string>("hello world."));
console.log(getLength2("hello world."));