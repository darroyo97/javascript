// Write a function which takes an array of numbers as input and
// returns a new array containing only the positive numbers in the given array.

var arr = [1, -1, 2, -2, 3, -3]
var newArr = arr.filter(function (element) {
    return element > 0;
})
console.log(newArr)