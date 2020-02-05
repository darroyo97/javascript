// var elements = document.getElementsByClassName("hello")
// console.log(elements)
// console.log(elements.item(0))
// // or 
// console.log(elements[0])
// console.log(elements[1])

//

// var imgArray = document.getElementsByTagName('img')
// // console.log(imgArray[0])
// console.log(imgArray[1])
// var src = imgArray[1].getAttribute("src")
// console.log(src)
// imgArray[0].setAttribute("src", "https://townsquare.media/site/519/files/2019/04/GettyImages-480615728.jpg?w=980&q=75")

//

// var divArray = document.getElementsByClassName('hello')
// console.log(divArray)
// console.log(divArray.length)
// var firstDiv = divArray[0]
// console.log(firstDiv)
// divArray[0].textContent = "good morning"
// divArray[1].innerHTML = "<b>zip ti py do da</b>"

//

// works just like css: examples
// var body = document.querySelector('.hello')
// var body = document.querySelector('#myFirstId')


// is powerful tool where you can use multiple:example
// var body = document.querySelector('div p img')
// console.log(body)
// prints only first one

// var div = document.querySelectorAll('div')
// console.log(div)


//

// var element = document.createElement("h1");

// element.textContent = "hello world";

// var body = document.querySelector("body");

// body.append(element);

//my solution always to pick what div
// var element = document.createElement("h1");
// element.textContent = "hello world"
// var divArray = document.getElementsByClassName("hello")
// var firstDiv = divArray[0]
// firstDiv.append(element)


//v's solution just goes to first one it finds bcus using query selector
// var element = document.createElement("h1");
// element.textContent = "hello world"
// var helloDiv = document.querySelector(".hello")
// helloDiv.append(element)


// or we can use queryselcAll
// var element = document.createElement("h1");
// element.textContent = "digital  crafts"
// var helloDiv = document.querySelectorAll(".hello")
// helloDiv[1].append(element)

// 

// testing if i can append all
// var element = document.createElement("h1");
// element.textContent = "digital  crafts"
// var helloDiv = document.querySelectorAll(".hello")
// helloDiv.append(element)
//doesnt work^^^


//


//remove
var divNode = document.getElementById("myFirstId")
document.body.removeChild(divNode)