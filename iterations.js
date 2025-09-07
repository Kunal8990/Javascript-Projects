// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let i=0; i<=5 ;i++){
    for(let j=0; j<=5; j++){
        // console.log(`Inner loop ${j} Outer loop${i}` )

    }
}

for(let i=1 ;i <=10 ;i ++){
    if(i ==5){
        // console.log(`Detected 5`)
        break; //loop tod dega
    }
    // console.log(`Value is ${i}`);

}

for(let i=1;i<=10;i++){
    if(i==5){
        // console.log("Number 5 is detected")
        continue // continue likho ya na likho woh loop continue rakhega
    }
    // console.log(`Value is ${i}`)

}
//  let num= 5
for(let i=0; i<=5; i++){
    // console.log("*" . repeat(i))
}

///........................WHILE LOOP..............................................................

let num = 1

while(num <=10){
    // console.log(`Value is ${num}`)
    num = num+2

}

let myarray = ['batman', 'Superman','flash']
let arr = 0 
while (arr <myarray.length){
    console.log(`Value is${myarray[arr]}`)
    arr++
}

let score =11

do {
    console.log(`Score is ${score}`)
    score++
}while(score<=10)