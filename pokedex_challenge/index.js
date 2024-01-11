/*
?   Challenge:
    - Grab ahold of the HTML elements that are necessary
    - Use the PokeAPI to retrieve the information of a pokemon
    - Then using the input field, a user should be able to type in the pokemon name or number

        * HINT There is a method you can use to grab ahold of the value contained within the input field

    - The button with the text of "Look", should execute a fetch to the pokemon API
        * The API should return the exact data for the pokemon name/# that was provided to the input field
        * You will only need to fetch to one endpoint

    - Display results within each respected HTML element
        *Be sure to understand the data type you are working with to display the results correctly.

    - Name
    - Image
    - Stats
    - Moves

    Bonus*
        - When a user goes and types in another pokemon name/#, the moves and stats keep stacking on top of the previous data.

        - Handle clearing out the past data to present new data.
*/

let pokeImage = document.querySelector("#img-avatar");
let pokeName = document.querySelector(".name");
let pokeStats = document.querySelector(".stats");
let pokeMoves = document.querySelector(".moves");

let formInput = document.querySelector(".search");
let formBtn = document.querySelector(".btn");

const displayPokemon = (pokemonObj) => {
  pokeName.textContent = pokemonObj.name;
  pokeImage.src = pokemonObj.img;

  while (pokeStats.firstChild) {
    pokeStats.removeChild(pokeStats.firstChild);
  }
  while (pokeMoves.firstChild) {
    pokeMoves.removeChild(pokeMoves.firstChild);
  }

  pokemonObj.stats.forEach((i) => {
    let statName = document.createElement("p");
    statName.textContent = i.stat.name + " " + i.base_stat;
    pokeStats.appendChild(statName);
  });
  pokemonObj.moves.forEach((i) => {
    let moveName = document.createElement("li");
    moveName.textContent = i.move.name;
    pokeMoves.appendChild(moveName);
  });
};

const getPokemon = async (pokemon) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  //? Using async/await
  let response = await fetch(url);
  let json = await response.json();

  let jsonObj = {
    name: json.name,
    img: json.sprites.front_default,
    moves: json.moves,
    stats: json.stats,
  };

  // Call a function to display the data we received -- Passing our custom object
  displayPokemon(jsonObj);

  //? Using .then syntax
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
};

//? Adds a click event to our button
formBtn.addEventListener("click", (e) => {
  let input = formInput.value;
  getPokemon(input);
});
