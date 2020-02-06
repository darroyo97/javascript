var container = document.querySelector('#container')
function createHTMLElement(tagName, parentNode, innerText, setClassName) {
    var tag = document.createElement(tagName);
    if (innerText.length > 0) {
        tag.textContent = innerText;
    }
    if (setClassName.length > 0) {
        tag.className = setClassName;
    }
    parentNode.append(tag);
    return tag
}
var link1 = createHTMLElement("a", container, "High On Coding", "nav-item nav-link active")
// idk how to add set Att to function
link1.setAttribute("href", "#");
var link2 = createHTMLElement("a", container, "Home", "nav-item nav-link active small pl-5")
link2.setAttribute("href", "#");
var link3 = createHTMLElement("a", container, "Categories", "nav-item nav-link active small pl-5")
link3.setAttribute("href", "#");

var headerDiv = createHTMLElement("div", container, "", "nav navbar-nav h3")

headerDiv.append(link1);
headerDiv.append(link2);
headerDiv.append(link3);

var headerNav = createHTMLElement("nav", container, "", "navbar navbar-expand navbar-dark p-4")
headerNav.style = "background-color: rgb(82, 167, 250); ";
headerNav.append(headerDiv);
container.append(headerNav);
