//for of loop
// for (const item of object) { //yeh item means object ka new name rakho aur object means kisko point karna haii means koi string,obj,array
    
// }

const myArray= [1,2,3,4,5,6,7,8,9,10]

for (const arr of myArray) {
    // console.log(arr)    
}

const greetings = "Hello World !"
for (const greet of greetings) {
    // console.log(greet)
    
}

//---------------------MAPS-----------------------------------------------------------

const map = new Map()

//it hold unique value and print them in order as you have been written
//it dont prints duplicate value
map.set('IN', 'India')
map.set('USA', 'United States America')
map.set('Fr' , 'France')

// console.log(map)
for(const key of map){
    // console.log(key)
}
for (const [key , value] of map) {
    // console.log(key, ':-' , value)
    
}

//Objects

const myObjects = {
    js: "javascript",
    cpp : "c++",
    rb : "Ruby",
    swift : "Swift By apple"
}

//For in loop

for (const key in myObjects) {
//   console.log(key) yeh key values print kar dega
    // console.log(myObjects[key]) //phele object ka naam fir in[for mai jo likhe hai uska naam] and it will print the value of that object
    // console.log(`${key} shortcuts of ${myObjects[key]}`)
    }

    const programming = ['js','java','python','cpp']
    for (const key in programming) {
        // console.log(key)
        // console.log(programming[key])
    }

    //-----------------For each loop--------------------------

    const mylanguage = ['java','js','ruby','python','cpp']

    // mylanguage.forEach ( function(val){
    //     console.log(val)
    // } )
 //by using arro wfunction
    mylanguage.forEach ( (items) =>{
        // console.log(items)
    } )

    function printMe (items){
        // console.log(items)
    }

    mylanguage.forEach ( (items,index,arr) => {
        console.log(items , index , arr)
    })

// mylanguage.forEach(printMe)

//array ke  andr objects

// const myCoding = [
//     {
//         languageName : "javascript",
//         languagesFileName : "js"
//     }  ,  
//     {
//         languageName : "Java",
//         languagesFileName : "java"
//     }   , 
//     {
//         languageName : "Python",
//         languagesFileName : "py"
//     }
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName)
// } )