console.log("Entro al main.js");

const imgPokemon = document.getElementById("imgPokemon");
const namePokemon = document.getElementById("namePokemon");
const weightPokemon = document.getElementById("weightPokemon");

function randomPokemon() {
    // console.log("Entro a la función randomPokemon");
    const pokemonNumber = generateRandomNumber(1, 151);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        imgPokemon.src = data.sprites.other.home.front_shiny;
        namePokemon.innerText = data.name.toUpperCase();
        weightPokemon.innerText = data.weight;
    })
    .catch(error => console.log(error));

}

function generateRandomNumber(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

