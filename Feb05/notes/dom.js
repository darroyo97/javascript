// var elements = document.getElementsByClassName("hello")
// console.log(elements)
// console.log(elements.item(0))
// // or 
// console.log(elements[0])
// console.log(elements[1])

//

var imgArray = document.getElementsByTagName('img')
// console.log(imgArray[0])
console.log(imgArray[1])
var src = imgArray[1].getAttribute("src")
console.log(src)
// imgArray[0].setAttribute("src", "https://townsquare.media/site/519/files/2019/04/GettyImages-480615728.jpg?w=980&q=75")

//

var divArray = document.getElementsByClassName('hello')
console.log(divArray)
console.log(divArray.length)
var firstDiv = divArray[0]
console.log(firstDiv)
divArray[0].textContent = "good morning"
divArray[1].innerHTML = "<b>zip ti py do da</b>"

//

