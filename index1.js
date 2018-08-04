/* Create a function named counter reducer that takes two arguments */
function counterReducer(counter, actionType){
    /* If actionType is equal to INC, increment by and return the counter. */
    if (actionType === "INC"){
        let v = counter += 1; 
        console.log(`We incremented the counter to ${v}.`);
    } 
    /* If actionType is equal to DEC, increment by and return the counter. */
    else if (actionType === "DEC"){
        let z = counter -= 1;
        console.log(`We decremented the counter to ${z}.`);
    } 
    /* IF actionType is neither DEC or INC, returns a string informing the requesters that nothing is going on here */
    else {
        console.log("Nothing is going on here, have a nice day.");
    }
}

/* Calls the code with INC and DEC to test if it's pure function  */
console.log(counterReducer(10, "INC"));
console.log(counterReducer(10, "DEC"));


