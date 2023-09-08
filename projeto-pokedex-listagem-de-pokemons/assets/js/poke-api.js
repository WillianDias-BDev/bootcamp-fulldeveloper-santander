
const pokeApi = {}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)



}
Promise.all([
    fetch('http://pokeapi.co/api/v2/pokemon/1'),
    fetch('http://pokeapi.co/api/v2/pokemon/2'),
    fetch('http://pokeapi.co/api/v2/pokemon/3'),
    fetch('http://pokeapi.co/api/v2/pokemon/4'),
    fetch('http://pokeapi.co/api/v2/pokemon/5'),
]).then((results) => {
    console.log(results)
})