// create navbar container
var nav = document.createElement("div");
var body = document.querySelector("body");
body.append(nav);
nav.className = "row navbar"
// create main title
var navItems = document.createElement("div")
nav.append(navItems)
navItems.className = "col navbar-brand"
navItems.textContent = "High On Coding"
// create list items
//list one
var navItems2 = document.createElement("div");
nav.append(navItems2)
navItems2.className = "col nav-item"
navItems2.textContent = "Home"
//list two
var navItems3 = document.createElement("div");
nav.append(navItems3)
navItems3.className = "col nav-item"
navItems3.textContent = "Categories"
//navbar done

//grerow
var greyRow = document.createElement("div");
body.append(greyRow)
greyRow.className = "row justify-content-center mt-3"
//making column
var col1 = document.createElement("div");
greyRow.append(col1)
col1.className = "col-10 grey-bc "
//addign the header
var h1 = document.createElement("h1");
col1.append(h1)
h1.textContent = "Curse of the Current Reviews"
//adding its paragraph
var p = document.createElement("p");
col1.append(p)
p.textContent = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."

//

//creating blog post 1
var blog1 = document.createElement("div")
body.append(blog1)
blog1.className = "row justify-content-center mt-3"
//first cont done now make col
var col2 = document.createElement("div")
blog1.append(col2)
col2.className = "col-10"
//make header
var h2 = document.createElement("h2")
h2.textContent = "Hello WatchKit"
col2.append(h2)
//paragraph
var p2 = document.createElement("p")
p2.textContent = "Last Month Apple released the anticipated WatchKit Framework for developers in the form of IOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with WatchKit framework and developing apps for the Apple Watch."
col2.append(p2)
//section holding likes
var section1 = document.createElement("div")
col2.append(section1)
section1.className = "section"
//ps in section
var p1s = document.createElement("p1")
section1.append(p1s)
p1s.textContent = "12 comments"
//second ps
var p2s = document.createElement("p1")
section1.append(p2s)
p2s.textContent = "124 Likes"
//done
//blog post2
var blog2 = document.createElement("div")
body.append(blog2)
blog2.className = "row justify-content-center mt-3"
//
var col3 = document.createElement("div")
blog2.append(col3)
col3.className = "col-10"
//
var h3 = document.createElement("h2")
h3.textContent = "Introduction to Swift"
col3.append(h3)
//
var p3 = document.createElement("p")
p3.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around basic concepts in the Swift lanaguage and how you can get started."
col3.append(p3)
//
var section2 = document.createElement("div")
col3.append(section2)
section2.className = "section"
//ps in section
var p3s = document.createElement("p1")
section2.append(p3s)
p3s.textContent = "12 comments"
//second ps
var p4s = document.createElement("p1")
section2.append(p4s)
p4s.textContent = "124 Likes"