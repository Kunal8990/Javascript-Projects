// const coding = [ "ruby","java","python","cpp","javascript"]

// const values = coding.forEach( (items)=> {
//     console.log(items)
//return items
// } )

// console.log(values)

const myNums = [1,2,3,4,,5,6,7,8,9,10]
// const newNums = Mynums.filter( (num)=> num >=5 )

// const newNums = myNums.filter ( (nums)=>{
//     return nums >=5

// } )

const newNums = []

myNums.forEach( (num)=> {
    if(num >=5){
        newNums.push(num)
    }
})
// console.log(newNums)


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumber = myNumbers.map ((num)=>num +10 )

const newNumber = myNumbers.map( (num)=> num*10 ).map(  (nums)=>nums+1 ).filter( (nums)=>nums >40 )

console.log(newNumber )
