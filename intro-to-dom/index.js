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

let incButton = document.getElementById("increase-button");
let decButton = document.getElementById("decrease-button");
let countText = document.getElementById("count");

let num = 0;

countText.textContent = num;
//e = event
incButton.addEventListener("click", (e) => {
    console.log(e);
    num++;
    countText.textContent = num;
});

decButton.addEventListener("click", () => {
    num--;
    countText.textContent = num;
});