/*
?   API
    - Application Programming Interface
    - Client (front-end) to communicate with the server (database)
    - Allows HTTP requests and response lifecycles
*/

/*
?   Fetch
    - Before fetch(), we would have to use an HTTP request through items like JQuery, or Ajax
    - Is an API
    - Is a method that requires at least 1 argument
        - Argument = The location we are trying to obtain data from
    - Handles the request and response
    - Returns a promise
        - Allows us access to resolvers (.then(), or .catch())
*/

const testEndpoint = "https://jsonplaceholder.typicode.com/posts/1";
//console.log(fetch(testEndpoint));

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// fetch(testEndpoint)
//     .then((response) => response.json()) //? IMPORTANT TO ADD .JSON to response
//     .then((json) => console.log(json))
//     .catch((err) => console.log("ERR", err));

/*
?   JSON
    - JavaScript Object Notation
    - Very lightweight for sharing and transferring data
    - Easy to understand

    *
    {
        "key": "value",
        "key2": true,
        "key3": 32
    }

    - Everything is wrapped in quotes with some minor exceptions like integers and booleans
    - Data is all comma-separated
    - CANNOT hold comments or functions
*/

function displayIt (data) {
    const body = document.querySelector("body");
    const p = document.createElement("p");

    p.textContent = data.body;
    
    body.appendChild(p);
}

// fetch(testEndpoint)
// .then ((res) => res.json())
// .then (json => {
//     console.log(json)
//     // function calls
// })

const url = "https://meowfacts.herokuapp.com/";

// function getCatFacts() {
//     fetch(url)
//         .then((response) => response.json())
//         .then ((json) => {
//             console.log(json);
//         });
// }

// getCatFacts();

// async function getCatFacts() {

// }

const getCatFactsArrow = async() => {
    try {
    const response = await fetch(url);
    const json = await response.json();

// anything below has to wait for the above to complete

    console.log(json.data[0]);

    const body = document.querySelector("body");
    const p = document.createElement ("p");

    p.textContent = json.data[0];

    body.appendChild(p);
    } catch(err) {
        console.log("ERROR", err)
    }
};

getCatFactsArrow();



