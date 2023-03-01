export const handleData = (data, card) => {
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
