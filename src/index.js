import { addCardEffect } from "./modules/addCardEffect.js";
import { getRandomPokemon } from "./modules/getRandomPokemon.js";

const dom = {
  boton: document.querySelector(".get-pokemon"),
  pokemonList: document.querySelector(".pokemon-list"),
};

dom.boton.addEventListener("click", () => {
  addNewCard();
});

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
