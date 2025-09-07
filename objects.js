// const mySum = Symbol("key1")

// const JSuser = {
//     name :"Kunal Jha",
//     email : "kunaljha8990@gmail.com",
//     age : 20,
//     location :"Pune",
//     IsLoggedIn : true,
//     [mySum] : "keys1" // []agar yeh use nahi karoge toh woh usko as a string lega
// }

// // console.log(JSuser)

// console.log([mySum])// yeh bhi syntax haii print karne ka
// // Object.freeze(JSuser) iske baad kuch changes nahi honge

// JSuser.email = "kunal@google.com"

// // console.log(JSuser)
// const obj1 = {1:"a"}
// const obj2={2:"b"}
// const obj3={3:"c"}

// // const obj4 = Object.assign({}, obj1,obj2,obj3) //({}=yeh hai target , baki ka hai scope)
// const obj4={...obj1,...obj2,...obj3} //spread operator
// // console.log(obj4)


// const user =[
//     {
//     id : 1,
//     email:"kunal@gmail.com"
//     },
//         {
//     id : 2,
//     email:"kunal2@gmail.com"
//     },    {
//     id : 3,
//     email:"kunal3@gmail.com"
//     },
// ]


// user[1].email

// const tinderUser = {}

// tinderUser.id = "abc"
// tinderUser.email ="user@mail.com"
// tinderUser.IsLoggedIn = false

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) //sabhi values ko array mai bana dega

// console.log(tinderUser.hasOwnProperty('IsLogg')) //to check yeh property exist karti hai ya nahii

// const course = {
//     coursename: "JS IN HINDI",
//     price : 999,
//     courseInstructor : "kunal"
// }

// // course.courseInstructor  //syntax

// const {courseInstructor : instructor} = course //jab baar bar print karna ho toh yeh use karte haii islye hum log uska name bhi change kar sakte haii

// console.log(instructor)