// First Commit
/*  DOM stands for Document Object Model
        Document - HTML page
        Object - HTML elements and comments (Nodes but not node.js)
    BOM: Browser Object Model
        Global window variable properties
            window.location
            window.navigator
            window.history
            window.document
        And methods
            open(), close()
            moveTo(), sizeTo()
            alert(), prompt(), confirm()
            setTimeout()

    When you call the *document* method, it combs the documents of the web page.
        EG. let allTheParagraphs = document.getElementsByTagName("p")
    
    Can use a <script> tag within HTML document to write javascript within the HTML

    Can target elements within elements by being specific ("main div.preview > p")

    use the defer tag in html document to halt js from loading until html fully loaded
*/

/*  Event Listeners
        addEventListener is the method.
        alerts are pop-up windows
*/

/*
?   DOM
        - Document Object Model
        - Only through the browser
?   Frame
        - Document: HTML Page (in the browser)
            - document is a global variable
        - Object: Elements and Comments (nodes)
        - Model: Arrangement

    - Data representation of objects that comprise the strructure and content of a document on the web

?   BOM
        - Browser Object Model
        - "window" - global variable
        - various methods available to us
*/

// console.log("test")

function askForStuff () {
    prompt();
}

// askForStuff();

console.log(document);
console.log(document.URL);
console.log(document.location);
document.title = "First Lesson: Intro to DOM";
console.log(document.title);

let h1 = document.createElement("h1");
console.log({h1})
console.log({document})
/*
    Our variable now has access to our various properties.
        - innerHTML: can inject a block of HTML code (Not good code practice to use it)
        - innerText: returns visible text contained in a node
        -textContent: returns the full text in a node

    ex:
        <p>Hello<b>World</b></p>
            innerText = returns the word "Hello"
            textContent = returns the full string "Hello World"
*/

h1.textContent = "Creating my first DOM element"; // Creates the string that is to be shown.

document.body.appendChild(h1);

h1.style.color = "red";
h1.style.textAlign = "center";

/*
?   Finding Elements

*   HTMLCollection
        - Array like object
        - Allows access to index, properties, and methods to help navigate and modify
        - Does NOT allow to modify a group of elements all at once
        - Can loop through it
        - Can use the .length property to get the size of the list

    Accessing multiple elements requires these methods:
        - getElementsByTagName()
        - querySelectorAll()
        - getElementsByClassName()
*/

let li = document.getElementsByTagName("li");
console.log(li);

let bathroom = li[0];
bathroom.style.color = "red";

for (element of li) {
    element.style.color = "green";
}

/*
?   querySelector()
        - Grabs the first instance of an element or null if nothing was found
        - Can target by ID, Class, or Element
            - will need to append # for ID's
            - will need to append . for classes
*/

let firstLi = document.querySelector("li");
// console.log(firstLi);

let listTitle = document.querySelector("#listTitle");
// console.log(listTitle);
listTitle.style.textAlign = "center";

let toDoList = document.querySelector("#toDoList");
// console.log(toDoList)

let classListItem = document.querySelector(".listItem");
// console.log(classListItem);

/*
?   querySelectorAll()
        - Will return back a static node list(an array) of elements
*/

let nodeListLi = document.querySelectorAll("li");
// console.log(nodeListLi);
nodeListLi[0].style.color = "blue";

let newListItem = document.createElement("li");
let ul = document.getElementById("ulToDo");

newListItem.textContent = "New Item";
ul.appendChild(newListItem);

/*
?   Event Listeners

    Allows us to execute a function when an event occurs

    .addEventListener()
        - DOM node method
        - Require an event to 'listen' for, or type and a callback function
*/

let btn = document.getElementById("submit");
let input = document.getElementById("listInput");

function addItem () {
    let newItem = document.createElement("li")
    newItem.textContent = input.value; // value takes the value added from the INPUT and holds it as a string.
    newItem.style.color = "blue"
    ul.appendChild(newItem);
}

btn.addEventListener("click", addItem);