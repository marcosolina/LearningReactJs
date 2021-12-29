namespace AbstractNamespace {

    abstract class Vehicle {
        constructor(protected wheelCount: number){}

        abstract updateWheelCount(newWheelCount: number) : void;

        showNumberOfWheels(){
            console.log(`moved ${this.wheelCount} miles`);
        }
    }

    class Motorcycle extends Vehicle{
        constructor(){
            super(2);
        }

        updateWheelCount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
    }

    class Automobile extends Vehicle{
        constructor(){
            super(4);
        }

        updateWheelCount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Automibile has ${this.wheelCount}`);
        }
    }

    
    const motorCycle = new Motorcycle();
    motorCycle.showNumberOfWheels();
    motorCycle.updateWheelCount(1);
    motorCycle.showNumberOfWheels();
    
    const autoMobile = new Automobile();
    autoMobile.showNumberOfWheels();
}
