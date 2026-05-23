// A function that doesn't finish running 
const neverStop =():never => {
    while(true){
        console.log("I'm still going!");
        
    }
}

//A function that throws an exception
const giveError =(msg:string)=>{
    throw new Error(msg)
}