// (function () {
//     var x = "Hello!!";
//     console.log(x)  // I will invoke myself
// })();

// var a = 4
// var b = 5
// var c = a
// var c = 88
// console.log(a)
// console.log(c)
//pass by value

var myArray = [1, 2, 3, 4, 5]
var myArrayCopy = myArray
console.log(myArray)
console.log(myArrayCopy)
myArrayCopy[0] = 33
// var myArrayCopy = [33, 4, 5, 6, 7]
console.log(myArray)
console.log(myArrayCopy)
//pass by reference