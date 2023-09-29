
//paginação 
// document.addEventListener("DOMContentLoaded", function () {
//     const prevButton = document.getElementById("prevButton");
//     const nextButton = document.getElementById("nextButton");
//     const container = document.querySelector(".container");
//     const pages = document.querySelectorAll(".page");
//     let currentPage = 0;

//     prevButton.addEventListener("click", () => {
//         if (currentPage > 0) {
//             currentPage--;
//             updatePageTransform();
//         }
//     });

//     nextButton.addEventListener("click", () => {
//         if (currentPage < pages.length - 1) {
//             currentPage++;
//             updatePageTransform();
//         }
//     });

//     function updatePageTransform() {
//         const xOffset = -currentPage * 100; // 100% de deslocamento por página
//         container.style.transform = `translateX(${xOffset}%)`;
//         pages.forEach((page, index) => {
//             if (index === currentPage) {
//                 page.style.transform = "translateX(0%)"; // Página atual visível
//             } else {
//                 page.style.transform = `translateX(0%)`; // Páginas anteriores deslocadas para a direita
//             }
//         });
//     }

//     // Exibe a primeira página inicialmente
//     updatePageTransform();
// });

class Pokemon {
    constructor(number, name, types) {
        this.number = number;
        this.name = name;
        this.types = types;
    }
}

const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const pokemonList = data.results;

        // Mapeia os resultados para obter informações detalhadas de cada Pokémon
        const pokemonDetailsPromises = pokemonList.map(pokemon => {
            return fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                    const number = String(pokemonData.id).padStart(3, '0');
                    const name = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
                    const types = pokemonData.types.map(type => type.type.name);
                    return new Pokemon(number, name, types);
                });
        });

        // Espere todas as solicitações terminarem
        return Promise.all(pokemonDetailsPromises);
    })
    .then(pokemonList => {
        // Agora você tem uma lista de objetos Pokemon
        // Preencha os elementos <li> com as informações dos Pokémon e aplique a classe de tipo apropriada
        const pokemonListContainer = document.getElementById('pokemonList');

        pokemonList.forEach(pokemon => {
            const listItem = document.createElement('div');
            listItem.className = 'box';

            const divBox = document.createElement('div');
            divBox.className = 'box';

            const numberSpan = document.createElement('span');
            numberSpan.className = 'number';
            numberSpan.textContent = `#${pokemon.number} -`;

            const nameSpan = document.createElement('span');
            nameSpan.className = 'name';
            nameSpan.textContent = `${pokemon.name} -`;

            const typeSpan = document.createElement('span');
            typeSpan.className = 'type';
            typeSpan.textContent = pokemon.types.join(', ');

            pokemon.types.forEach(type => {
                divBox.classList.add(type);
            });

            divBox.appendChild(numberSpan);
            divBox.appendChild(nameSpan);
            divBox.appendChild(typeSpan);

            listItem.appendChild(divBox);
            pokemonListContainer.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });

