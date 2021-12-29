namespace InterfaceNamespace {
    interface Thing {
        name: string;
        getFullName: () => string;
    }

    interface Vehicle extends Thing {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void;
    }

    class MotorCycle implements Vehicle{
        name: string;
        wheelCount: number;
        constructor(name: string){
            this.name = name;
        }

        updateWheelCount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Motorcyle has ${this.wheelCount}`);
        }

        showNumberOfWheels(){
            console.log(`moved Motorcyle ${this.wheelCount} miles`);
        }

        getFullName(){
            return "MC-" + this.name;
        }
    }

    const moto = new MotorCycle("Aprilia RS 250");
    console.log(moto.getFullName());
}