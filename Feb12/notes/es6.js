// console.log(x);
// // ReferenceError: x is not defined
// let x = 'hi';
// let today = new Date();
// console.log(today.toString())
// console.log(`Today's date is ${today.toLocaleTimeString()}`)


// we can put js in curly braces
// let a = 3
// let b = 4
// console.log(`The total is: ${a + b}`)

// let myArray = [4, 5, 6, 7, 2]

// let [a, b, c, d, e] = [4, 5, 6, 7, 2]

// console.log(a);
// console.log(b)

// let a = myArray[0]; //4
// let b = myArray[2] //6
// let c = myArray[3] // 7

// let myArray = [4, 'hi', 'chicken', 69, 'baby yoda']
// let [a, b, c, d, e] = myArray
// console.log(a)
// console.log(e)

//assign values ^^

// let myArray = [4, 'hi', 'chicken', 69, 'baby yoda']
// let [a, b, c] = myArray
// console.log(a)
// console.log(e)
// //will be undefined need to assign

let luke = { occupation: 'jedi', father: 'anakin' }
//dot . and [] are the same
// let job = luke[occupation]
// let father = luke.father

let { occupation, father } = luke;
// another way to get values ^^
console.log(occupation)
console.log(father)