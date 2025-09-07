/*
Falsy values :- false , 0 ,-0, " " emptystring, NaN (Not a number) ,BigInt 0n

Truthy Values :- true , "0","false", " " space , [] empty array, {} empty object, function (){}

how to check that array is empty use
if(arrayname.length===0)
*/

//how to check that object is empty

const emptyObj ={}
//call Object and uske keys ko woh array ke form mai kar dega then check 
if(Object.keys(emptyObj).length ===0){
    console.log("Empty Object")
}

//Nullish Coalesing Operator (??): undefeined , null

// let val1 = 10??5
let val1 = undefined ??10 //10 is output
// let val1 = undefined ?? null // null is output

console.log(val1)

//Terniary Opertaor (?)

let myAge = 20

//uska name and ? true :false
myAge >= 18 ? console.log("Eligible to vote") : console.log("Not eligible")

