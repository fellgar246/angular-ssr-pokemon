
const TOTAL_POKEMONS = 10;
const TOTAL_PAGES = 5;

( async () => {
    const fs = require('fs');

    const pokemonsIds = Array.from({length: TOTAL_POKEMONS}, (_, i) => i + 1);
    let fileContent = pokemonsIds.map(
      id => `/pokemons/${id}`
    ).join('\n');

    //Pokemon pages
    for (let page = 1; page <= TOTAL_PAGES; page++) {
        fileContent += `\n/pokemons/page/${page}`;
    }

    const pokemonNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
      .then( res => res.json() )

    fileContent += '\n'
    fileContent += pokemonNameList.results.map(
      pokemon => `/pokemons/${pokemon.name}`
    ).join('\n');


    fs.writeFileSync('routes.txt', fileContent);

})();
