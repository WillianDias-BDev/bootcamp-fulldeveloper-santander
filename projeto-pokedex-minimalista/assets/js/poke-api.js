const pokemonData = {}; // Objeto para armazenar os dados dos Pokémon

// Função para carregar dados dos primeiros 151 Pokémon
async function loadPokemonData() {
    for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonData[i] = data;
        pokemonData[data.name.toLowerCase()] = data; // Adicionei os dados também com o nome em letras minúsculas como chave
    }
}

// Função para exibir detalhes do Pokémon
function displayPokemonDetails(pokemon) {
    const pokemonImage = document.getElementById('pokemonImage');
    const pokemonName = document.querySelector('.name2');
    const pokemonNumber = document.querySelector('.number');
    const types = document.querySelector('.types');
    const pokemonType = pokemon.types[0].type.name.toLowerCase(); // Supondo que você quer usar o primeiro tipo

    // Aplicar classe de background com base no tipo do Pokémon
    const pokemonSection = document.querySelector('.background');
    pokemonSection.className = `background ${pokemonType}`;

    pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default;

    // Capitalizar a primeira letra do nome
    const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    pokemonName.textContent = formattedName;
    pokemonNumber.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;

    types.innerHTML = '';
    pokemon.types.forEach(type => {
        const typeElement = document.createElement('span');
        typeElement.textContent = `Type: ${type.type.name}`;
        types.appendChild(typeElement);
    });
}




// Função para pesquisar um Pokémon
function searchOnEnter(event) {
    if (event.key === "Enter") {
        const searchTerm = document.getElementById('mysearch').value.toLowerCase();
        const foundPokemon = pokemonData[searchTerm];

        if (foundPokemon) {
            displayPokemonDetails(foundPokemon);
        } else {
            alert("Pokemon not found");
        }
    }
}

// Função para limpar a caixa de pesquisa
function clearSearch() {
    document.getElementById('mysearch').value = '';
}

// Carregar dados dos primeiros 151 Pokémon em paralelo
loadPokemonData().then(() => {
    // Exibir o primeiro Pokémon (número 1) por padrão
    displayPokemonDetails(pokemonData[1]);
}).catch(error => {
    console.error(error);
});
