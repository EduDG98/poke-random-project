import { getRandomNumber } from "./getRandomNumber.js";
import { handleData } from "./handleData.js";

const URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_POKEMON = 151;

export const getRandomPokemon = (card) => {
  const idPokemon = getRandomNumber(MAX_POKEMON);
  fetch(URL + idPokemon + "/")
    .then(response => response.json())
    .then(data => handleData(data, card));
};
