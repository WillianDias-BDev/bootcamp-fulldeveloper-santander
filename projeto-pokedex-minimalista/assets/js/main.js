

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const container = document.querySelector(".container");
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;

    prevButton.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            updatePageTransform();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            updatePageTransform();
        }
    });

    function updatePageTransform() {
        const xOffset = -currentPage * 100; // 100% de deslocamento por página
        container.style.transform = `translateX(${xOffset}%)`;
        pages.forEach((page, index) => {
            if (index === currentPage) {
                page.style.transform = "translateX(0%)"; // Página atual visível
            } else {
                page.style.transform = `translateX(0%)`; // Páginas anteriores deslocadas para a direita
            }
        });
    }

    // Exibe a primeira página inicialmente
    updatePageTransform();
});


