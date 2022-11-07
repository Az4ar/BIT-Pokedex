const pokemonName = document.querySelector(".pokemon-name");
const pokemonNumber = document.querySelector(".pokemon-number");
const pokemonImage = document.querySelector(".pokemon-image");
const form = document.querySelector(".form");
const input = document.querySelector(".input-search");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");


const fetchPokemon = async  (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    const data = await APIResponse.json();

   return data;
}

const renderPokemon = async (pokemon) => {
    const data =  await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
}

const nextPokemon = async(pokemon) => {
    const dataId = await fetchPokemon(pokemon);

    const nextId = dataId.id + 1;
    input.value = nextId;

    renderPokemon(nextId.toString());
}

const prevPokemon = async(pokemon) => {
    const dataId = await fetchPokemon(pokemon);

    const nextId = dataId.id - 1;
    input.value = nextId;

    renderPokemon(nextId.toString());
}

btnPrev.addEventListener("click", (e) => {
    e.preventDefault();

    prevPokemon(input.value);
})

btnNext.addEventListener("click", (e) => {
    e.preventDefault();

    nextPokemon(input.value);
})


form.addEventListener("submit", (e) => {
    e.preventDefault();

   renderPokemon(input.value);
})

