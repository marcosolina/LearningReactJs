namespace OptionalChaningNS {

    interface Wheels {
        count?: number;
    }

    interface Vehicle {
        wheels?: Wheels;
    }

    class Automobile implements Vehicle {
        constructor(public wheels?: Wheels){}
    }

    const car: Automobile | null = new Automobile({
        count: undefined
    });

    console.log("car ", car);
    console.log("wheels", car?.wheels);
    console.log("count", car?.wheels?.count);
    /*
    Il punto di domanda indica che l'oggetto potrebbe essere null o undefined.
    Se lo è l'esecuzione del codice finirà a quell'oggetto, ritornando il
    valore che sia di quell'oggetto / proprietà

    Il codice qui sotto fa la stessa cosa, ma è più lungo
    */
   const count = !car ? 0
   : !car.wheels ? 0
   : !car.wheels.count ? 0
   : car.wheels.count
}