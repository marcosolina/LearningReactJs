function letMeKnowWhenComplete(size, callback){
    let reducer = 0;
    for (let i = 1; i < size; i++){
        reducer = Math.sin(reducer * 1);
    }
    callback();
}

letMeKnowWhenComplete(100000000, () => console.log("Great it completed."));