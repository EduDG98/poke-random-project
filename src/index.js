import { getRandomNumber } from "./modules/getRandomNumber.js";

const dom = {
  boton: document.querySelector(".get-pokemon"),
  name: document.querySelector(".name"),
  types: document.querySelector(".types"),
  pokemonImg: document.querySelector(".pokemon-img"),
  weight: document.querySelector(".weight"),
  height: document.querySelector(".height")
};

const URL = "https://pokeapi.co/api/v2/pokemon/";

const MAX_POKEMON = 151;

const getRandomPokemon = () => {
  const idPokemon = getRandomNumber(MAX_POKEMON);
  fetch(URL + idPokemon + "/")
    .then(response => response.json())
    .then(data => handleData(data));
};

dom.boton.addEventListener("click", () => {
  getRandomPokemon();
});

const handleData = (data) => {
  dom.name.textContent = data.name.toUpperCase();
  dom.height.textContent = data.height / 10 + " cm";
  dom.weight.textContent = data.weight / 10 + " kg";
  dom.pokemonImg.src = data.sprites.versions["generation-i"]["red-blue"].front_default;

  const pokemonTypes = data.types.map(pokemon => pokemon.type.name);
  dom.types.innerHTML = "";
  pokemonTypes.forEach(pokemonTypeItem => {
    const divType = document.createElement("div");
    divType.classList.add("type");
    divType.textContent = pokemonTypeItem;
    dom.types.appendChild(divType);
  });
};
