const box = document.querySelector('.container');
const pokemons = document.querySelector('.container .pokemon')

let contador = 0

function slider() {
    contador++;

    box.css.transform = `translateX (${-contador * }px)`
}