let currentPokemonId = null;

// Adicione um ouvinte de evento para carregar o Pokémon quando a página for carregada
document.addEventListener("DOMContentLoaded", () => {
    const MAX_POKEMONS = 151;
    const pokemonID = new URLSearchParams(window.location.search).get("id");
    const id = parseInt(pokemonID, 10);

    if (id < 1 || id > MAX_POKEMONS) {
        return (window.location.href = "../index.html");
    }

    currentPokemonId = id;
    loadPokemon(id);
});
// Função para exibir os detalhes do Pokémon nos elementos HTML
function displayPokemonDetails(pokemon) {
    const { name, id, types, weight, height, abilities, stats } = pokemon;

    document.querySelector('title').textContent = capitalizeFirstLetter(name);

    const detailMainElement = document.querySelector('.detail-main');
    detailMainElement.classList.add(name.toLowerCase());

    document.querySelector('.name-wrap .name').textContent = capitalizeFirstLetter(name);

    const imageElement = document.querySelector('.detail-img-wrapper img');
    imageElement.src = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/other/dream-world/${id}.svg`;

    const typeWrapper = document.querySelector('.power-wrapper');
    typeWrapper.innerHTML = '';
    types.forEach(({ type }) => {
        createAndAppendElement(typeWrapper, 'p', {
            className: `body3-fonts type ${type.name}`,
            textContent: type.name,
        });
    });

    document.querySelector('.pokemon-detail-wrap .pokemon-detail p.body3-fonts.weight').textContent = `Weight: ${weight / 10} kg`;
    document.querySelector('.pokemon-detail-wrap .pokemon-detail p.body3-fonts.height').textContent = `Height: ${height / 10} m`;

    const abilitiesWrapper = document.querySelector('.pokemon-detail-wrap .pokemon-detail.move');
    abilitiesWrapper.innerHTML = '';
    abilities.forEach(({ ability }) => {
        createAndAppendElement(abilitiesWrapper, 'p', {
            className: 'body3-fonts',
            textContent: capitalizeFirstLetter(ability.name),
        });
    });

    // Preencha as estatísticas do Pokémon
    const statNameMapping = {
        hp: 'HP',
        attack: 'ATK',
        defense: 'DEF',
        'special-attack': 'SATK',
        'special-defense': 'SDEF',
        speed: 'SPD',
    };

    stats.forEach(({ stat, base_stat }) => {
        const statDiv = document.querySelector(`.stats-wrap[data-stat="${stat.name}"]`);
        const statValue = statDiv.querySelector('p.body3-fonts');
        const progressBar = statDiv.querySelector('.progress-bar');

        statValue.textContent = `${statNameMapping[stat.name]}: ${base_stat}`;
        progressBar.value = base_stat;
    });

    setTypeBackgroundColor(pokemon);
}

// Função para carregar um Pokémon por ID
async function loadPokemon(id) {
    try {
        const parsedId = parseInt(id); // Tente converter id para um número inteiro
        if (!isNaN(parsedId)) { // Verifique se a conversão foi bem-sucedida
            const [pokemon, pokemonSpecies] = await Promise.all([
                fetch(`https://pokeapi.co/api/v2/pokemon/${parsedId}`).then((res) => res.json()),
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${parsedId}`).then((res) => res.json()),
            ]);

            // Verifique se o ID do Pokémon carregado corresponde ao ID atual
            if (id !== currentPokemonId) {
                return;
            }

            // Atualize os detalhes do Pokémon nos elementos HTML
            displayPokemonDetails(pokemon);
            const flavorText = getEnglishFlavorText(pokemonSpecies);
            document.querySelector('.body3-fonts.pokemon.pokemon-description').textContent = flavorText;
        } else {
            console.error("O valor de 'id' não é um número válido.");
        }
    } catch (error) {
        console.error("Ocorreu um erro ao buscar dados do Pokémon", error);
    }
}



const typeColors = {
    normal: "#94d4ce",
    grass: "#c2bfe5",
    fire: "#B0D9B1",
    water: "#F2D8D8",
    electric: "#afe0d3",
    ice: "#e6bbd7",
    ground: "#C4DFDF",
    flying: "#e6c9bb",
    poison: "#b6cde2",
    fighting: "#b4e2ab",
    psychic: "#DFCCFB",
    dark: "#c2edc2",
    rock: "#D2E9E9",
    bug: "#dcc3a6",
    ghost: "#dadca5",
    steel: "#e4b5c4",
    dragon: "#b5e3b2",
    fairy: "#b4bee2",
};

function setElementStyles(elements, cssProperty, value) {
    elements.forEach((element) => {
        element.style[cssProperty] = value;
    });
}

function rgbaFromHex(hexcolor) {
    return [
        parseInt(hexcolor.slice(1, 3), 16),
        parseInt(hexcolor.slice(3, 5), 16),
        parseInt(hexcolor.slice(5, 7), 16),
    ].join(", ");
}

function setTypeBackgroundColor(pokemon) {
    const mainType = pokemon.types[0].type.name;
    const color = typeColors[mainType];

    if (!color) {
        console.warn(`Color not defined for type: ${mainType}`);
        return; // Adicione um retorno para sair da função quando a cor não estiver definida.
    }

    const detailMainElement = document.querySelector(".detail-main");
    setElementStyles([detailMainElement], "backgroundColor", color);

    setElementStyles(
        document.querySelectorAll(".power-wrapper > p"),
        "backgroundColor",
        color
    );
    setElementStyles(
        document.querySelectorAll(".stats-wrap > p.stats"),
        "backgroundColor",
        color
    );
    setElementStyles(
        document.querySelectorAll(".stats-wrap > .progress-bar"),
        "color",
        color
    );

    const rgbaColor = rgbaFromHex(color);
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
    .stats-wrap .progress-bar::-webkit-progress-bar{
        background-color: rgba(${rgbaColor}, 0.5);
    }
    .stats-wrap .progress-bar::-webkit-progress-value{
        background-color: rgba(${rgbaColor}, 0.5);
    }
    `;
    document.head.appendChild(styleTag);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function createAndAppendElement(parent, tag, options = {}) {
    const element = document.createElement(tag);
    Object.keys(options).forEach((key) => {
        element[key] = options[key];
    });

    parent.appendChild(element);
    return element;
}

function getEnglishFlavorText(pokemonSpecies) {
    for (let entry of pokemonSpecies.flavor_text_entries) {
        if (entry.language.name === 'en') {
            let flavor = entry.flavor_text.replace(/\n/g, ' ');
            return flavor;
        }
    }
    return '';
}
