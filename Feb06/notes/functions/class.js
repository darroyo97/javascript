// var add = x + 1;
// console.log(add)
// var index = 0;

// for (let index = 0; index <= 10; index++) {
//     console.log(index)
// }

// console.log("final value of index:", index)
// function myFunc() {
//     console.log("hello")
//     return 'hello'
// }

// // let hello = myFunc()

// console.log(myFunc)
// //
// function greeting(name) {
//     return "hello " + name;
// }
// let result = greeting("Dani")
// console.log(result)
//

// var result = function (name) {
//     return "whats up " + name
// }
// console.log(result)

// console.log(result())

// let greet = result("dani")
// console.log(greet)

//

// var add = function (num1, num2) {
//     return num1 + num2
// }
// var sub = function (num1, num2) {
//     return num1 - num2
// }

// let calc = function (num1, num2, opFunction) {
//     return opFunction(num1, num2)
// }

// let result = calc(3, 2, add)
// console.log(result)

//

// let arr = [1, 2, 3, 4, 5]
// // for (let index = 0; index < arr.length; index++) {
// //     console.log(arr[index])
// // }

// //

// arr.forEach(function (element) {
//     console.log(element)
// })

//
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
]
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//
//get just name
// companies.forEach(function (element) {
//     // console.log(element["name"])
//     console.log(element.name)
// })
//

// let arr = [0, 1, 2, 3, 4, 5]
// // let newArr = []
// // //mult each by 2
// // for (let index = 0; index < arr.length; index++) {
// //     newArr.push(2 * arr[index]);
// // }
// // console.log(newArr)

// let newArr = arr.map(function (element) {
//     return 2 * element
// });

// console.log(newArr)

//
// let fiveYear = companies.map(function (element) {
//     return element.start - 5;
// })

// console.log(fiveYear)

// let newCom = companies.map(function (company) {
//     // company["start"] = company.start - 5
//     company.start = company.start - 5
//     return company
// })
// console.log(newCom)

// let minFive = ages.map(function (element) {
//     return element - 5
// })

// console.log(minFive)

//

//filter()

// let arr = [34, 5, -2, 13, 24, -55]
// let newArr = arr.filter(function (element) {
//     return element < 10;
// });
// console.log(newArr)

//
// let newCom = companies.filter(function (element) {
//     return element.category == "Retail"

//     // element.name = element.category == "Retail"
//     // return element /element.name
//     //bools^^
// })

// console.log(newCom)
//
//
// let arr = [34, 5, -2, 13, 24, -55]
// let myBull = arr.some(function (num) {
//     // return num < 5;
//     return num == 3;
// });

// console.log(myBull)


