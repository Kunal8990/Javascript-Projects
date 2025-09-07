//immedieate function
//IF you are using more than one immedieate function use ; to end that line explicitly

//isko bolte haii named IIFE
(function chai (){
    console.log(`DB CONNECTED`)
})(); //immedite mai last me function ko call karnah hai 

//unnamed IIFE
( ()=>{
    console.log(`DB CONNECTED TWO`)
} )();

//aur agar parameter passed karna ho toh 

((server)=>{
    console.log(`DB connected to ${server}`)
})("Server 101") //yeha end mai paramater pass karo , and see this as a function 