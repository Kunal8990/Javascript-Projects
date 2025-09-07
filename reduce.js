const myNums = [1,2,3]

// const myTotal = myNums.reduce ( function (arr,currval) {
//     return arr + currval

//  },0) //yeha intialize value pass karna haii

const myTotal = myNums.reduce ( (acc,curr)=> acc+curr ,0 )

 console.log(myTotal)

 const shoopingCart = [
    {
        itemName : "Js",
        price :2000
    },
        {
        itemName : "Python",
        price :4000,
    }  ,
    {
        itemName : "Java",
        price :9999,
    }, 
    {
        itemName : "ReactJs",
        price :5999
    }
 ]

const priceToPay = shoopingCart.reduce (  (acc,items)=> acc+items.price ,0)

console.log(priceToPay)