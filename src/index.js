import { addCardEffect } from "./modules/addCardEffect.js";
import { getRandomNumber } from "./modules/getRandomNumber.js";

const dom = {
  boton: document.querySelector(".get-pokemon"),
  pokemonList: document.querySelector(".pokemon-list"),
};

const URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_POKEMON = 151;

const getRandomPokemon = (card) => {
  const idPokemon = getRandomNumber(MAX_POKEMON);
  fetch(URL + idPokemon + "/")
    .then(response => response.json())
    .then(data => handleData(data, card));
};

dom.boton.addEventListener("click", () => {
  addNewCard();
});

const handleData = (data, card) => {
  card.name.textContent = data.name.toUpperCase();
  card.height.textContent = data.height / 10 + " cm";
  card.weight.textContent = data.weight / 10 + " kg";
  card.pokemonImg.src = data.sprites.versions["generation-vi"]["x-y"].front_default;

  const pokemonTypes = data.types.map(pokemon => pokemon.type.name);
  card.types.innerHTML = "";
  pokemonTypes.forEach(pokemonTypeItem => {
    const divType = document.createElement("div");
    divType.classList.add("type");
    divType.textContent = pokemonTypeItem;
    card.types.appendChild(divType);
  });
};

const addNewCard = () => {
  dom.pokemonList.innerHTML +=
      /* HTML */
      `<div class="pokemon-card dark">
        <img src="" alt="" class="pokemon-img">
        <div class="data">
            <h2 class="name">Pokemon</h2>
            <div class="info">
                <div class="height">--- m</div>
                <div class="weight">-- kg</div>
                <div class="types">-----</div>
            </div>
        </div>
      </div>`;

  const lastCard = document.querySelector(".pokemon-card:last-child");

  const card = {
    name: lastCard.querySelector(".name"),
    types: lastCard.querySelector(".types"),
    pokemonImg: lastCard.querySelector(".pokemon-img"),
    weight: lastCard.querySelector(".weight"),
    height: lastCard.querySelector(".height")
  };

  getRandomPokemon(card);
  addCardEffect();
};
