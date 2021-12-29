function MyFunction(){
    console.log(this);
}

MyFunction(); // In questo caso, this sarà Node
let test = new MyFunction(); // Qui this è l'oggetto MyFunction