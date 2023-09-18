const carrossel = document.querySelector('.carrossel');
const carrosselWrapper = document.querySelector('.carrossel-wrapper');

carrosselWrapper.addEventListener('scroll', () => {
    const scrollLeft = carrosselWrapper.scrollLeft;
    const sectionWidth = carrossel.clientWidth / 6; /* 6 é o número de sections .pokemon */

    // Calcula a posição da section atual
    const currentSection = Math.floor(scrollLeft / sectionWidth);

    // Move o carrossel para a section atual
    carrossel.style.transform = `translateX(-${currentSection * sectionWidth}px)`;
});
