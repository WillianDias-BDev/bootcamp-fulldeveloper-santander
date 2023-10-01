let currentPokemonId = null;

document.addEventListener("DOMContentLoaded", () => {
    const MAX_POKEMONS = 151;
    const pokemonID = new URLSearchParams(window.location.search).get("id")
    const id = parseInt(pokemonID, 10)

    if (id < 1 || id > MAX_POKEMONS) {
        return (window.location.href = "./index.html");
    }

    currentPokemonId = id;
    loadPokemon(id);
})

async function loadPokemon(id) {
    try {
        const [pokemon, pokemonSpecies] = await Promisse.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).
                then((res) => res.json()
                ),
            (await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)).
                then((res) => res.json()
                ),
        ])

        const abilitiesWrapper = document.querySelector(
            ".pokemon-detail-wrap .pokemon-detail-move"
        );

        abilitiesWrapper.innerHTML = "";

        if (currentPokemonId === id) {
            displayPokemonDetails(pokemon)
            const flavorText = getEnglishFlavorText
                (pokemonSpecies);
            document.querySelector(".body3-fonts.pokemon.pokmon-description").textContent = flavorText;

        }
        return true;
    }
    catch (error) {
        console.erro("An error occured while fatching pokemon data", error);
        return false;
    }
}