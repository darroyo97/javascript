// ARROW FUNCTIONS

// function helloWorld() {
//     console.log('Hello World')
// }

// let helloWorld = () => {
//     console.log('Hello World')
// }
// helloWorld()

// they are the same ^^^ how to re write function in to arrow function *** EXAMPLE***

//short cut let met
// let methodName = (params) => {

// }

// setTimeout(function () {
//     console.log('hello wolrd')
// }, 2000)
// console.log('first')

//hello world prints until 2 seconds

// function getType() {
//     console.log('Type is: ' + this.type)
// }

//default parameters

// let nums = [1, 2, 3, 4, 5]
// // let newArray = nums.map(function (num) {
// //     ///
// // })

// let newArray = nums.map((num) => {
//     return num * 2
// })
// console.log(newArray)

//same thing but has arrow function//   EXAMPLE*****^^^

///

// let arr = [1, -1, 2, -2, 3, -3]
// let newArray = arr.filter((element) => {
//     return element > 0
// })
// console.log(newArray)
// var newArr = arr.filter(function (element) {
//     return element > 0;
// })

// console.log(newArr)

//////

let obj = {
    x: 5,
    y: 20,
    z: 3
}
//create func called mult
// let mult = ((object) => {
//     return object.x * object.y * object.z
// })
// console.log(mult(obj));

let mult = ((object) => {
    let { x, y, z } = obj
    return x * y * z
})
console.log(mult(obj));

// let { x, y, z } = obj
// console.log(x)
// console.log(y)
// console.log(z)

