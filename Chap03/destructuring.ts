function getEmployee(id){
    return {
        name: "John",
        age: 35,
        address: "123 St",
        country: "United States"
    }
}

/*
Con il destructuring prendo solo quello che mi interessa,
così ci accedo più rapidamente
*/
const {name: fullName, age} = getEmployee(22);

// Ho rinomincato "name" in "fullName"
console.log("employee", fullName, age);


// Funziona anche con gli array, attenzione che l'ordine è importante
function getEmpoyeeWorkInfo(id){
    return [
        id,
        "Office St",
        "France"
    ];
}

const [id, officeAddress] = getEmpoyeeWorkInfo(33);
console.log("Employee", id, officeAddress);