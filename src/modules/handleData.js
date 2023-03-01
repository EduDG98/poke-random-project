export const handleData = (data, card) => {
  // Manejar datos de la API
  card.name.textContent = data.name.toUpperCase();
  card.height.textContent = data.height / 10 + " cm";
  card.weight.textContent = data.weight / 10 + " kg";
  card.pokemonImg.src = data.sprites.versions["generation-vi"]["x-y"].front_default;

  // Manjear los tipos de pokemons
  const pokemonTypes = data.types.map(pokemon => pokemon.type.name);
  card.types.innerHTML = "";
  pokemonTypes.forEach(pokemonTypeItem => {
    const divType = document.createElement("div");
    console.log("type-" + pokemonTypes);
    divType.classList.add("type", "type-" + pokemonTypes);
    divType.textContent = pokemonTypeItem;
    card.types.appendChild(divType);
  });

  // Añadir sonido a la última carta
  card.element.addEventListener("click", () => {
    const idPaddingZero = data.id.toString().padStart(3, 0);
    const url = `sounds/${idPaddingZero}.mp3`;
    const audio = new Audio(url);
    audio.play();
  });
};
