// // const myArray = [1 ,2 ,3, 4,5]
// // // myArray.push(6)
// // // myArray.pop()
// // const newAir1 = myArray.slice(1,2)
// // console.log(myArray)
// // console.log(newAir1)

// const marvel =["Ironman","SpiderMan","Thor"]
// const dc = ["Superman", "Batman","Flash"]
// // const allHeros = marvel.concat(dc) yeh bhi use karte haii arrays ko join karne ko
// // console.log(allHeros)

// const allHeros = [...marvel,...dc] //ISko bolta haii spread operator aur yeh jayda use karte hai merge karne ke liye arras ko
// console.log(allHeros)

// const another_array = [1,2,3, [4,5],6,7,[1,2[6,7,8]]]
// const real_array = another_array.flat(Infinity)
// //agar kabhi iss situation mai fass jaye toh use karna haii (flat) isme uska depth define karna hota haii ku kitne tak solve karna infinifty use kafro but try to avoid it try to use the depth

// console.log(real_array)

// //agar kisi ko array mai convert karna bhoga toh use  ( from to convert anything to array) or use .of method to merge it

// console.log(Array.isArray("Kunal"))


// console.log(Array.from("kunal"))

// console.log(Array.from({name : "Kunal"})) //intresting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3))