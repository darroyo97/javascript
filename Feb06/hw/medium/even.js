var arr = [1, 2, 3, 4, 5, 6]
var evenArr = arr.filter(function (element) {
    if (element % 2 == 0) {
        return element
    }
})

console.log(evenArr)